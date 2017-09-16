import {ReactiveVar} from 'meteor/reactive-var'
import {Template} from 'meteor/templating'

Template.isActivated.onCreated(() => {
  Template.instance().activated = new ReactiveVar(false)
})

Template.isActivated.helpers({
  isActivated: () => {
    if (window.localStorage.getItem('secret')) {
      return true
    }

    return Template.instance().activated.get()
  },

  activated: () => Template.instance().activated
})
