if (Meteor.isClient) {
  Session.setDefault('filterString', '');

  Template.body.helpers({
    alerts: function() {
      return Session.get('filteredAlerts');
    }
  });

  Template.body.onRendered(function(){
    this.autorun(function(){
      Session.set('filteredAlerts', Alerts
        .find({title: new RegExp('^.*' + Session.get('filterString') + '.*$', 'gi')})
        .fetch()
      );  
    });
  });
}
