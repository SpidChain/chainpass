import {Bert} from 'meteor/themeteorchef:bert'
import {Template} from 'meteor/templating'
import _ from 'underscore'

global.Buffer = global.Buffer || require('buffer').Buffer
const bip39 = require('bip39')
const {HDNode} = require('bitcoinjs-lib')

Template.selectWords.onCreated(() => {
  const mnemonic = bip39.generateMnemonic()
  const hdNode = HDNode.fromSeedBuffer(bip39.mnemonicToSeed(mnemonic))
  const publicKey = hdNode.getPublicKeyBuffer().toString('hex')
  const words = mnemonic.split(' ')
  Template.currentData().publicKey.set(publicKey)
  Template.currentData().words.set(words)
})

Template.selectWords.helpers({
  words: () => Template.currentData().words.get(),

  selectedWords: () => Template.currentData().selectedWords
})

Template.selectWords.events({

  'click .js-next': () => {
    const {word1, word2} = Template.currentData().selectedWords.get()

    if (_.isObject(word1) && _.isString(word1.word) &&
      _.isObject(word2) && _.isString(word2.word)) {
      Template.currentData().wordsSelected.set('true')
    } else {
      Bert.alert({
        title: 'Seleziona due parole',
        type: 'danger'
      })
    }
  }
})
