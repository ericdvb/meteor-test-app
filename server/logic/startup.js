if (Meteor.isServer) {
  Meteor.startup(function () {
    // insert a few Alerts on startup. This will run every time, but
    // will produce an error after first startup. Error is handled in
    // insertAlert method
    Meteor.call('insertAlert', {title: 'Jay Z', _id: 'Jay Z', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Beyonce', _id: 'Beyonce', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Kanye West', _id: 'Kanye West', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Lebron James', _id: 'Lebron James', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'New York Yankees', _id: 'New York Yankees', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Steve Spurgat', _id: 'Steve Spurgat', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Flipboard', _id: 'Flipboard', popular: true, selectedBy: []});
    Meteor.call('insertAlert', {title: 'Syria', _id: 'Syria', popular: true, selectedBy: [0]});
    Meteor.call('insertAlert', {title: 'Barack Obama', _id: 'Barack Obama', popular: true, selectedBy: []});
  });
}
