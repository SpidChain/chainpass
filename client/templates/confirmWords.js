import {AutoForm} from 'meteor/aldeed:autoform'
import {Bert} from 'meteor/themeteorchef:bert'
import {Random} from 'meteor/random'
import {Template} from 'meteor/templating'
import SimpleSchema from 'simpl-schema'

Template.confirmWords.onCreated(function () {
  const self = Template.instance()
  const selectedWords = Template.currentData().selectedWords.get()
  const words = Template.currentData().words.get()
  const wordsConfirmed = Template.currentData().wordsConfirmed

  self.formId = Random.id()

  AutoForm.addHooks(self.formId, {
    onSubmit: function (insertDoc) {
      const {index1, selectedWord1, index2, selectedWord2} =
        selectedWords.word1.index < selectedWords.word2.index
          ? {
            index1: selectedWords.word1.index,
            selectedWord1: selectedWords.word1.word,
            index2: selectedWords.word2.index,
            selectedWord2: selectedWords.word2.word
          }
          : {
            index1: selectedWords.word2.index,
            selectedWord1: selectedWords.word2.word,
            index2: selectedWords.word1.index,
            selectedWord2: selectedWords.word1.word
          }

      if (insertDoc.word1 === selectedWord1 && insertDoc.word2 === selectedWord2) {
        words.splice(index1, 1)
        words.splice(index2 - 1, 1)
        const storedSecret = words.join(':') + ':' + index1 + ':' + index2
        window.localStorage.setItem('secret', storedSecret)
        wordsConfirmed.set(true)
      } else {
        const error = new Error('Le parole immesse non corrispondono alla selezione')

        error.name = 'WordsMismatch'
        this.done(error)
      }
      return false
    },

    onSuccess: () => {
      wordsConfirmed.set(true)
    },

    onError: (ignore, error) => {
      Bert.alert({
        title: 'Errore',
        message: error.message,
        type: 'danger'
      })
    }
  })
})

Template.confirmWords.helpers({
  formId: () => Template.instance().formId,
  schema: () => new SimpleSchema({
    word1: {
      type: String,
      optional: false
    },
    word2: {
      type: String,
      optional: false,
      label: 'Parola 2'
    }
  })
})

Template.confirmWords.onDestroyed(() => {
  delete AutoForm._hooks[Template.instance().formId]
})
