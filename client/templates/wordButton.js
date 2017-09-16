import {Template} from 'meteor/templating'
import _ from 'underscore'

Template.wordButton.events({
  'click button': (e, t) => {
    const word = {
      index: t.data.index,
      word: t.data.word
    }
    const selectedWords = t.data.selectedWords
    const {word1, word2} = selectedWords.get()
    if (!_.isUndefined(word1)) {
      if (word1.index === word.index) {
        selectedWords.set({word1: undefined, word2})
        t.firstNode.classList.remove('active')
        return
      }
    }
    if (_.isUndefined(word1)) {
      selectedWords.set({word1: word, word2})
      t.firstNode.classList.add('active')
      return
    }
    if (!_.isUndefined(word2)) {
      if (word2.index === word.index) {
        selectedWords.set({word1, word2: undefined})
        t.firstNode.classList.remove('active')
        return
      }
    }
    if (_.isUndefined(word2)) {
      selectedWords.set({word1, word2: word})
      t.firstNode.classList.add('active')
    }
  }
})

Template.wordButton.helpers({
  disabled: () => {
    const {word1, word2} = Template.currentData().selectedWords.get()
    const index = Template.currentData().index

    if (word1 && word1.index !== index && word2 && word2.index !== index) {
      return 'disabled'
    }

    return ''
  }
})
