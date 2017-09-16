import {Meteor} from 'meteor/meteor'
import {Template} from 'meteor/templating'

// Template.confirmActivation.rendered = () => {
//    $('body').addClass('bg1');
// }

Template.confirmActivation.onRendered(() => {
  const activated = Template.currentData().activated

  Meteor.setTimeout(() => {
    activated.set(true)
  }, 5000)
})
