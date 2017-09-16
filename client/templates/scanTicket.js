/* global qrScanner */

import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'

Template.scanTicket.onCreated(() => {
  qrScanner.on('scan', (_, message) => {
    if (message) {
      FineRouter.go('ticketInfo')
    }
  })
})
