// Views
import FormView from '../views/FormView.js'
import ResultView from '../views/ResultView.js'
let formView, resultView

// Models
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'

export default {
  init () {
    // init form view
    formView = new FormView(document.querySelector('form'))
    formView.init()
      .on('@submit', e => {
        console.log('1-1', JSON.stringify(e))
        this.onSubmit(e.detail.input)
        console.log('1-2')
      })
      .on('@reset', e => this.onResetForm())

    // init ResultView
    resultView = new ResultView(document.getElementById('search-result'))
    resultView.init()
  },

  search (query) {
    SearchModel.list(query)
      .then(data => this.onSearchResult(data))
  },

  renderView () {
    // console.log(tag, 'rednerView()')
    // TabView.setActiveTab(this.selectedTab)

    // if (this.selectedTab === '추천 검색어') {
    //   this.fetchSearchKeyword()
    //   HistoryView.hide()
    // } else {
    //   this.fetchSearchHistory()
    //   KeywordView.hide()
    // }

    // ResultView.hide()
  },
  onSubmit (input) {
    console.log(tag, 'onSubmit()', input)
    this.search(input)
  },
  onResetForm () {
    console.log(tag, 'onResetForm()')
    this.renderView()
  },
  onSearchResult(data) {
    resultView.render(data)
  },
}