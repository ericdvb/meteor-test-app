Template.listItem.helpers({
  updateItemName: function(itemID) {
  }
});

Template.listItem.events({
  'change input[name="itemName"]': function(event, template) {
    var errorContainer    = template.$('.error__container'),
        originalAlertName = this.title,
        alertID           = this._id,
        newAlertName      = template.$('input').val();
    if(!errorContainer.hasClass('inactive')){
      errorContainer.addClass('inactive');
    }
    // TODO: sanitize the user input
    // or disable javascript in mongo
    Meteor.call('updateAlert', alertID, newAlertName, originalAlertName, function(error, result) {
      if(error) {
        template.$('input').val(originalAlertName);
        errorContainer.text(error.reason).toggleClass('inactive');
        setTimeout(function(){
          errorContainer.text('').addClass('invisible collapsed-height').delay(250).queue(function() {
            $(this).addClass('inactive').removeClass('invisible collapsed-height');
          });
        }, 3000);
      }
      console.log(result);
    });
  },

  'keyup input[name="itemName"]': function(event) {
    if(event.which == 13) {
      $(event.target).toggleClass('inactive');
      $(event.target).siblings('p').toggleClass('inactive');
    }
  },

  'click .edit__button': function(event) {
    $(event.target).siblings('input[name="itemName"]').toggleClass('inactive');
    $(event.target).siblings('p').toggleClass('inactive');
  }
});
