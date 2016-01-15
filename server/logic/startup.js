if (Meteor.isServer) {
  Meteor.startup(function () {
    // insert a few Alerts on startup. This will run every time, but
    // will produce an error after first startup. Error is handled in
    // insertAlert method
    Meteor.call('insertAlert', {title: 'Jay Z', _id: 'Jay Z'});
    Meteor.call('insertAlert', {title: 'Beyonce', _id: 'Beyonce'});
    Meteor.call('insertAlert', {title: 'Kanye West', _id: 'Kanye West'});
    Meteor.call('insertAlert', {title: 'Lebron James', _id: 'Lebron James'});
    Meteor.call('insertAlert', {title: 'New York Yankees', _id: 'New York Yankees'});
    Meteor.call('insertAlert', {title: 'Steve Spurgat', _id: 'Steve Spurgat'});
    Meteor.call('insertAlert', {title: 'Flipboard', _id: 'Flipboard'});
    Meteor.call('insertAlert', {title: 'Syria', _id: 'Syria'});
    Meteor.call('insertAlert', {title: 'Barack Obama', _id: 'Barack Obama'});
  });
}
