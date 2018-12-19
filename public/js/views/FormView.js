import View from './View.js'

const tag = '[FormView]'

export default function FormView (el) {
  View.call(this, el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')

  this.init = function () {
    console.log(tag, 'init()')
    this.showResetBtn(false)
    this.bindEvents()
    return this
  }

  this.showResetBtn = function (show = true) {
    this.resetEl.style.display = show ? 'block' : 'none'
  }

  this.bindEvents = function () {
    this.on('submit', e => e.preventDefault())
    this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
    this.resetEl.addEventListener('click', e => this.onClickReset())
  }

  this.onKeyup = function (e) {
    const enter = 13
    this.showResetBtn(this.inputEl.value.length)
    if (!this.inputEl.value.length) this.emit('@reset')
    if (e.keyCode !== enter) return
    this.emit('@submit', { input: this.inputEl.value })
  }

  this.onClickReset = function () {
    this.emit('@reset')
    this.showResetBtn(false)
  }

  this.setValue = function (value = '') {
    this.inputEl.value = value
    this.showResetBtn(this.inputEl.value.length)
  }
}

// class FormView extends View {
//   constructor(el) {
//     super(el)
//     // ......
//   }
// }