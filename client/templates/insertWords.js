import {AutoForm} from 'meteor/aldeed:autoform'
import {Template} from 'meteor/templating'
import {Bert} from 'meteor/themeteorchef:bert'
import SimpleSchema from 'simpl-schema'

global.Buffer = global.Buffer || require('buffer').Buffer
const bip39 = require('bip39')
const {HDNode} = require('bitcoinjs-lib')

Template.insertWords.onCreated(() => {
  AutoForm.addHooks('insertWords', {
    onSubmit: function ({word1, word2}) {
      const secret = window.localStorage.getItem('secret').split(':')
      const publicKey = window.localStorage.getItem('publicKey')
      const storedWords = secret.slice(0, 10)
      const [pos1, pos2] = secret.slice(10)
      storedWords.splice(pos1, 0, word1)
      storedWords.splice(pos2, 0, word2)
      const error = new Error('Le parole immesse non corrispondono alla selezione')
      error.name = 'WordsMismatch'
      try {
        const mnemonic = storedWords.join(' ')
        const seed = bip39.mnemonicToSeed(mnemonic)
        const hdNode = HDNode.fromSeedBuffer(seed)
        if (publicKey === hdNode.getPublicKeyBuffer().toString('hex')) {
          this.done()
        } else {
          this.done(error)
        }
      } catch (e) {
        this.done(error)
      }
      return false
    },

    onSuccess: () => {
      FineRouter.go('checkInDone')
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

Template.insertWords.helpers({
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
  }),

  w1: () => Session.get('w1'),
  w2: () => Session.get('w2')
})
