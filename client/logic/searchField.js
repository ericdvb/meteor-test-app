Template.searchField.events({
  'keyup input[name="alertSearch"]': function(event){
    Session.set('filterString', $('input[name="alertSearch"]').val());
  }
});
