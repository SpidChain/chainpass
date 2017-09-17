Template.ticketRow.events({
  "click .preCheckin": function(e, t){
    var ticket = Template.currentData().ticket
    e.preventDefault()
    console.log(ticket._id);
    if(ticket.checkIn){
      Bert.alert({ title : "Hai gia fatto Checkin per questo viaggio", messagge : "", type : "danger", style : "growl-top-right" })
    }else{
      Session.set("checkIn_ticketId",ticket._id)

      FineRouter.go("checkIn")
    }


  }
});
