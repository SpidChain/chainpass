import {FineBlazeLayout} from 'meteor/aadams:fine-blaze-layout'
import {FineRouter} from 'meteor/aadams:fine-router'

FineRouter.route('/', {
  action: () => FineBlazeLayout.render('main'),
  name: 'home'
})
