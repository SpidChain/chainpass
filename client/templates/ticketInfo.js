import {Template} from 'meteor/templating'

const ticket = {
  from: 'Roma Termini',
  to: 'Milano Centrale',
  departsAt: '10:00',
  arrivesAt: '12:45'
}

Template.ticketInfo.helpers({
  from: () => ticket.from,
  to: () => ticket.to,
  departsAt: () => ticket.departsAt,
  arrivesAt: () => ticket.arrivesAt
})
