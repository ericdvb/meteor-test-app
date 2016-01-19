if (Meteor.isServer) {
  Meteor.startup(function () {
    // insert a few Alerts on startup. This will run every time, but
    // will produce an error after first startup. Error is handled in
    // insertAlert method
    Meteor.call('insertAlert', {title: 'Jay Z', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Beyonce', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Kanye West', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Lebron James', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'New York Yankees', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Steve Spurgat', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Flipboard', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Syria', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Barack Obama', popular: true, selectedBy: []});
  });
}
