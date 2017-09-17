/* global qrScanner */

import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'



Template.scanTicket2.onCreated(function(){

const self = this

  qrScanner.on('scan', (_, message) => {
    //console.log(message);
    if (message) {
      qrScanner.stopCapture()
      console.log("message",message);
      //message2 = JSON.parse(message)

        //console.log("message",message2);

        if(message=="{carrozza:9, posto:5d}"){
          Bert.alert({ title : "Checkin effettuato!", messagge : "", type : "success", style : "growl-top-right" })
          FineRouter.go("/")
          //Bert.alert({ title: 'Checkin effettuato!', message: error.message, type: 'success' })
        }else{
          Bert.alert({ title : "Attenzione! Hai sbagliato carrozza! La tua è la N° 9", messagge : "", type : "danger", style : "growl-top-right" })
          //alert("Attenzione! Hai sbagliato carrozza! La tua è la N° 9")
          //Bert.alert({ title: 'Errore hai sbagliato carrozza! La tua è la N° 9', message: error.message, type: 'danger' })
        }



    }
  })
})



Template.scanTicket2.helpers({

  ticketId: () => {
    //if(!Template.instance().ticketId) return;
    //return Template.instance().ticketId.get()
    var ticketId = window.localStorage.getItem('ticketId')
    console.log(ticketId);
    return ticketId
  }
})
