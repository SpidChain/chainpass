/* global qrScanner */

import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'



Template.scanTicket2.onCreated(function(){

const self = this
var checkIn_ticketId = Session.get("checkIn_ticketId")
console.log("checkIn_ticketId",checkIn_ticketId);
  qrScanner.on('scan', (_, message) => {
    //console.log(message);
    if (message) {

      console.log("message",message);
      //message2 = JSON.parse(message)

        //console.log("message",message2);

        if(message=="{carrozza:9, posto:5d}"){
          qrScanner.stopCapture()
          Bert.alert({ title : "Checkin effettuato!", messagge : "", type : "success", style : "growl-top-right" })

          Tickets.update({_id:checkIn_ticketId},{$set:{
            checkIn:true
          }})
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
