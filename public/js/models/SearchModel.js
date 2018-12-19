const tag = '[SearchModel]'

export default {
  // get document from discovery
  list(query) {
    console.log(tag, 'list()')
    if (window.fetch) {
      return fetch('/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
        .then(res => res.json())
        .then(json => json.documents)
        .catch(err => { throw new Error(err) })
    }
    else {
      // for IE11
      return new Promise((res, rej) => {
        const xhr = new XMLHttpRequest()
        xhr.open('POST', '/documents', true)
        xhr.setRequestHeader('Content-type', 'application/json')
        xhr.onload = function () {
          let documents = JSON.parse(this.responseText).documents
          res(documents)
        }
        xhr.send(JSON.stringify({ query }))
      })
    }
  }
}