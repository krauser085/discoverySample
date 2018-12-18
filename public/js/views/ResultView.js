import View from './View.js'

const tag = '[ResultView]'

export default function ResultView(el) {
  View.call(this, el)
  this.messages = { NO_RESULT: '該当のドキュメントがありません。' }

  this.init = function () {
    console.log(tag, 'init()')
    this.hide()
    return this
  }

  this.render = function (data = []) {
    console.log(tag, 'render()', data)
    this.el.innerHTML = data.length ? this.getSearchResultsHtml(data) : this.messages.NO_RESULT
    this.show()
  }

  this.getSearchResultsHtml = function (data) {
    return data.reduce((html, item) => {
      html += this.getSearchItemHtml(item)
      return html
    }, '<ul>') + '</ul>'
  }

  this.getSearchItemHtml = function (item) {
    return `<li>
      <h3>Document ID : ${item.id}</h3>
      <p>${item.text}</p>
    </li><hr>`
  }
}