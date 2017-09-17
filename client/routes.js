import {FineBlazeLayout} from 'meteor/aadams:fine-blaze-layout'
import {FineRouter} from 'meteor/aadams:fine-router'

FineRouter.route('/', {
  action: () => FineBlazeLayout.render('main', {content: "home"}),
  name: 'home'
})

FineRouter.route('/scanTicket', {
  action: () => FineBlazeLayout.render('main', {content: "scanTicket"}),
  name: 'scanTicket'
})

FineRouter.route('/ticketInfo/:ticketId', {
  action: () => FineBlazeLayout.render('main', {content: "ticketInfo"}),
  name: 'ticketInfo'
})

FineRouter.route('/checkIn', {
  action: () => FineBlazeLayout.render('main', {content: 'checkIn'}),
  name: 'checkIn'
})

FineRouter.route('/checkInDone', {
  action: () => FineBlazeLayout.render('main', {content: 'checkInDone'}),
  name: 'checkInDone'
})
