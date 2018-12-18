import FormView from '../views/FormView.js'
import SearchModel from '../models/SearchModel.js'

const tag = '[MainController]'
let formView

export default {
  init () {
    // init form view
    formView = new FormView(document.querySelector('form'))
    formView.init()
      .on('@submit', e => this.onSubmit(e.detail.input))
      .on('@reset', e => this.onResetForm())
  },
  search (query) {
    SearchModel.list(query)
      .then(data => console.log(data))
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
}