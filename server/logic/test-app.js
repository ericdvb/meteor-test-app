Meteor.methods({
  insertAlert: function(newAlert) {
    if(Alerts.find({title: newAlert.title}).count() <= 0) {
      Alerts.insert(newAlert, function(error, _id) {
        if(error) {
          // handle this error
          if(error.code !== 11000)
            console.log(error);
        }
      });
    }
  },

  updateAlert: function(alertID, newAlertName, originalAlertName) {
    if(Alerts.find({title: newAlertName}).count() > 0) {
      throw new Meteor.Error('duplicate alert', 'error: an alert already exists for ' + newAlertName + '.');
    } else {
      return Alerts.update(alertID, {$set: {title: newAlertName}});
    }
  }
});
