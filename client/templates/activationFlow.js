import {ReactiveVar} from 'meteor/reactive-var'
import {Template} from 'meteor/templating'

Template.activationFlow.onCreated(function () {
  const selectedWords = new ReactiveVar({
    word1: undefined, // {index: undefined, word: undefined}
    word2: undefined  // {index: undefined, word: undefined}
  })
  Template.instance().selectedWords = selectedWords
  Template.instance().wordsSelected = new ReactiveVar(false)
  Template.instance().wordsConfirmed = new ReactiveVar(false)
  Template.instance().activationConfirmed = new ReactiveVar(false)
  Template.instance().words = new ReactiveVar([])
  Template.instance().publicKey = new ReactiveVar('')
})

Template.activationFlow.helpers({
  areWordsSelected: () => Template.instance().wordsSelected.get(),

  wordsSelected: () => Template.instance().wordsSelected,

  areWordsConfirmed: () => Template.instance().wordsConfirmed.get(),

  wordsConfirmed: () => Template.instance().wordsConfirmed,

  selectedWords: () => Template.instance().selectedWords,

  isActivationComfirmed: () => Template.instance().activationConfirmed.get(),

  activationConfirmed: () => Template.instance().activationConfirmed,

  words: () => Template.instance().words,

  publicKey: () => Template.instance().publicKey
})
