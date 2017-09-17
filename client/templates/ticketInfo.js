import {Template} from 'meteor/templating'


Template.ticketInfo.onCreated(function() {
  //setTitle()
  this.autorun(() => {
    if ( this.subscriptionsReady() ) {

    }
  })

})


Template.ticketInfo.helpers({

  //TODO: return the last ticket
  ticket: () => {
    var ticketId = FineRouter.getParam("ticketId")
    var ticket = Tickets.findOne({_id:ticketId})
    return ticket
  }
})
