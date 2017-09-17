import {FineRouter} from 'meteor/aadams:fine-router'
import {Template} from 'meteor/templating'

Template.main.events({
  'click #scan': () => {
    FineRouter.go('scanTicket')
  }
})
