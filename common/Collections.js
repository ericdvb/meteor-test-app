Alerts = new Mongo.Collection('alerts');
Alerts.allow({
  insert: function() {
    return true;        
  },
  update: function() {
    return true;
  },
  remove: function() {
    return true;
  }
});
