import {Meteor} from 'meteor/meteor'
import {ReactiveVar} from 'meteor/reactive-var'
import {Template} from 'meteor/templating'

Template.checkInDone.onCreated(() => {
  const self = Template.instance()
  self.greeting = new ReactiveVar(true)
})

Template.checkInDone.onRendered(() => {
  const self = Template.instance()
  Meteor.setTimeout(() => {
    self.greeting.set(false)
  }, 3000)
})

Template.checkInDone.helpers({
  greeting: () => Template.instance().greeting.get()
})
