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

  Template.searchField.events({
    'keyup input[name="alertSearch"]': function(event){
      Session.set('filterString', $('input[name="alertSearch"]').val());
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
