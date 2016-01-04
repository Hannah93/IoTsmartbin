    module.exports = function(app, db, passport) {


      //Get SmartBin Data =====================================================

      app.get('/smartbindata', function(req, res) {
        db.query('SELECT * FROM smartbin',function(err,rows){
          if(err) throw err;

          //console.log('Data received from Db:\n');
          //console.log(rows);
          return res.json(rows);

              });


          });



                  // LOGIN lEERKRACHT===============================

                  // process the login form
                  app.post('/Login', function(req, res, next) {
                      if (!req.body.user || !req.body.password) {
                          return res.json({ error: 'username and Password required' });
                      }
                      passport.authenticate('local-login', function(err, user, info) {
                          console.log("in authenticate");
                          if (err) {
                            console.log("error 1");
                              return res.json(err);
                          }
                          if (user.error) {
                            console.log("error user");

                              return res.json({ error: user.error });
                          }
                          req.logIn(user, function(err) {
                              if (err) {
                                console.log(err);
                                  return res.json(err);
                              }
                              console.log("login successful");
                              return res.json({ redirect: '/Dashboard' });
                          });
                      })(req, res);
                    });


              // frontend routes =========================================================
              // route to handle all angular requests
              app.get('*', function(req, res) {
                  res.sendfile('./public/views/index.html'); // load our public/index.html file
              });

    };
