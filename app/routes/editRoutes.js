module.exports = function(app, db, passport) {

  //EDIT LOCATION ==================================================================
  app.post('/editLocation/:binID', function(req, res,next) {

    db.query("UPDATE smartbin SET location='"+req.body.locationBin+ "' WHERE id='"+req.params.binID+"'",function(err,rows){
      if(err) throw err;

          });

          db.query("SELECT * FROM smartbin where id='"+req.params.binID+"'",function(err,rows){
            if(err) throw err;

            //console.log('Data received from Db:\n');
            return res.json(rows[0]);

                });

  });



  //EDIT DESCRIPTION ==================================================================
  app.post('/editDescription/:binID', function(req, res,next) {

    db.query("UPDATE smartbin SET description='"+req.body.descriptionBin+ "' WHERE id='"+req.params.binID+"'",function(err,rows){
      if(err) throw err;

          });

          db.query("SELECT * FROM smartbin where id='"+req.params.binID+"'",function(err,rows){
            if(err) throw err;

            //console.log('Data received from Db:\n');
            return res.json(rows[0]);

                });

  });



    //DELETE SMARTBIN ==================================================================
    app.delete('/deleteSmartbin/:binID', function(req, res,next) {

      db.query("DELETE FROM smartbin WHERE id='"+req.params.binID+"'",function(err,rows){
        if(err) throw err;
            return res.json({ redirect: '/Dashboard' });
            });


    });

};
