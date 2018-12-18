export default {
  // get document from discovery
  list(query) {
    try {
      return fetch('/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
        .then(res => res.json())
        .then(json => json.documents)
        .catch(err => { throw new Error(err) })
    } catch (err) {
      // for IE11
      return new Promise((res, rej) => {
        let hr = new XMLHttpRequest()
        if (!hr) throw new Error('not able to create XMLHttpRequest')
        hr.onreadystatechange = () => {
          if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status >= 200 && httpRequest.status <= 300)
              // TODO: implement returning result
              alert(httpRequest.responseText);
          }
        }
        hr.setRequestHeader('Content-Type', 'application/json')
        hr.open('POST', '/documents')
        hr.send(JSON.stringify({ query }))
      })
    }
  }
}