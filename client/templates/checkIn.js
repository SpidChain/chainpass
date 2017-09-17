import {Meteor} from 'meteor/meteor'
import {ReactiveVar} from 'meteor/reactive-var'
import {Template} from 'meteor/templating'

Template.checkIn.onCreated(() => {
  const self = Template.instance()
  self.searching = new ReactiveVar(true)
})

Template.checkIn.onRendered(() => {
  const self = Template.instance()
  Meteor.setTimeout(() => {
    self.searching.set(false)
  }, 5000)
})

Template.checkIn.helpers({
  searching: () => Template.instance().searching.get()
})
