Meteor.methods({
  insertAlert: function(newAlert) {
    Alerts.insert(newAlert, function(error, _id) {
      if(error) {
        // handle this error
        if(error.code !== 11000)
          console.log(error);
      }
    });
  }
});
