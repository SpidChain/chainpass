import {Template} from 'meteor/templating'

const ticket = [
  {
    from: 'Roma Termini',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Roma Termini',
    departsAt: '18:10',
    arrivesAt: '21:55'
  }
]

Template.ticketInfo.onCreated(() => {
  //setTitle()
  var tickets = Tickets.find()
  var count = tickets.count()
  console.log("count",count);
  var index = count
  Tickets.insert(ticket[index])
})


Template.ticketInfo.helpers({

  //TODO: return the last ticket
  ticket: () => {
    var tickets = Tickets.find()
    var count = tickets.count()
    var ticketsArray = tickets.fetch()
    var ticket = ticketsArray[count]
    return ticket
  },


  from: () => ticket.from,
  to: () => ticket.to,
  departsAt: () => ticket.departsAt,
  arrivesAt: () => ticket.arrivesAt
})
