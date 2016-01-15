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
