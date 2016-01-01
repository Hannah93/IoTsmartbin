    module.exports = function(app, db) {


      //Get SmartBin Data =====================================================

      app.get('/smartbindata', function(req, res) {
        db.query('SELECT * FROM smartbin',function(err,rows){
          if(err) throw err;

          //console.log('Data received from Db:\n');
          //console.log(rows);
          return res.json(rows);

              });


          });


              // frontend routes =========================================================
              // route to handle all angular requests
              app.get('*', function(req, res) {
                  res.sendfile('./public/views/index.html'); // load our public/index.html file
              });

    };
