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

  Template.menu.helpers({
    menuItems: [
      {
        title: 'privacy policy',
        href: '#'
      },
      {
        title: 'terms of use',
        href: '#'
      },
      {
        title: 'settings',
        href: '#'
      },
      {
        title: 'logout',
        href: '#'
      }
    ]
  });

  Template.menuBar.events({
    'click #menu__button': function(event) {
      var $menuButton = $('#menu__button');

      if(!$('#menu__button').hasClass('active')) {
        $menuButton.addClass('active');        
        var deactivateMenuHandler = function(event){
          if( $('#menu').find(event.target).length < 1 &&
              $('#menu')[0] !== event.target ) {
            $('#menu__button').removeClass('active');
            $('body').off('click', null, deactivateMenuHandler);
          }
        }

        $('body').on('click', deactivateMenuHandler);
      }

    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
