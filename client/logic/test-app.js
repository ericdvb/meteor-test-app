if (Meteor.isClient) {
  Session.setDefault('filterString', '');
  Session.setDefault('userID', 0);
  Session.setDefault('alertType', 'popular');

  Template.body.helpers({
    alerts: function() {
      return Session.get('filteredAlerts');
    }
  });

  Template.body.onRendered(function(){
    this.autorun(function(){
      var query = {title: new RegExp('^.*' + Session.get('filterString') + '.*$', 'gi')}
      var alertType = Session.get('alertType');
      if(alertType == 'popular') {
        query.popular = true;
      } else if(alertType == 'user') {
        query.selectedBy = Session.get('userID');
      }
        Session.set('filteredAlerts', Alerts
          .find(query)
          .fetch()
        );  
    });
  });
}
