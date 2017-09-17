/* global qrScanner */

import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'

const ticketArray = [
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
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
  },
  {
    from: 'Pisa',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Pisa',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Firenze',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Firenze',
    departsAt: '18:10',
    arrivesAt: '21:55'
  },
  {
    from: 'Como',
    to: 'Milano Centrale',
    departsAt: '10:00',
    arrivesAt: '12:45'
  },
  {
    from: 'Milano Centrale',
    to: 'Como',
    departsAt: '18:10',
    arrivesAt: '21:55'
  }
]


Template.scanTicket.onCreated(function(){

const self = this

  qrScanner.on('scan', (_, message) => {
    //console.log(message);
    if (message) {
      qrScanner.stopCapture()

      var tickets = Tickets.find()
      var count = tickets.count()
      console.log("count",count);
      var index = count
      var doc = ticketArray[index]
      doc.pKey = window.localStorage.getItem('publicKey')
      Tickets.insert(doc,function(e,ticketId){
        //Meteor.setTimeout(function(){ FineRouter.redirect('ticketInfo/' + ticketInsert) }, 100);
        Bert.alert({ title : "Bigletto acquisito!", messagge : "", type : "success", style : "growl-top-right" })
        $(".qrcodeSanBox").hide()
        $(".qrcodeSanBtn").show()

        console.log("CREO R V",ticketId);
        //self.ticketId = new ReactiveVar(ticketId)
        window.localStorage.setItem('ticketId', ticketId)

      })



    }
  })
})



Template.scanTicket.helpers({

  ticketId: () => {
    //if(!Template.instance().ticketId) return;
    //return Template.instance().ticketId.get()
    var ticketId = window.localStorage.getItem('ticketId')
    console.log(ticketId);
    return ticketId
  }
})
