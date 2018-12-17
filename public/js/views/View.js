const tag = '[View]'

export default function View (el) {
  if (!el) throw new Error('View element undifined')

  this.el = el
  this.on = function (event, handler) {
    this.el.addEventListener(event, handler)
    return this
  }

  this.emit = function (event, data) {
    const evt = new CustomEvent(event, { detail: data })
    this.el.dispatchEvent(evt)
    return this
  }

  this.hide = function () {
    this.el.style.display = 'none'
    return this
  }

  this.show = function () {
    this.el.style.display = ''
    return this
  }
}