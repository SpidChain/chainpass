
Template.preCheckin.helpers({
  tickets: function(){
    var publicKey = window.localStorage.getItem('publicKey')
    return Tickets.find({pKey:publicKey})
  },
  rendered: function(){

  },
  destroyed: function(){

  },
});

Template.preCheckin.events({
  
});
