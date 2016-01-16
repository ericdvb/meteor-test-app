Template.alertFilter.events({
  'click .switch-option': function(event) {
    $('.switch-option').removeClass('active');
    $(event.target).addClass('active');
    Session.set('alertType', $(event.target).attr('name'));
  }
});
