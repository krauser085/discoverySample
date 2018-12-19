// Views
import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
let formView, resultView

// Models
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init() {
    // init FormView
    formView = new FormView(document.querySelector('form'))
    formView.init()
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())

    // init ResultView
    resultView = new ResultView(document.getElementById('search-result'))
    resultView.init()
  },

  search(query) {
    SearchModel.list(query)
      .then(data => this.onSearchResult(data))
      .catch(err => { throw new Error(err) })
  },

  renderView() {
    console.log(tag, 'renderView()')
    resultView.hide()
  },
  onSubmit(input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },
  onResetForm() {
    console.log(tag, 'onResetForm()')
    this.renderView()
  },
  onSearchResult(data) {
    console.log(tag, 'onSearchResult()', data)
    resultView.render(data)
  },
}