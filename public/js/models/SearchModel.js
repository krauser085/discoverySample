export default {
  // get document from discovery
  list (query) {
    return fetch('/documents', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query })
    })
      .then(res => res.json())
      .then(json => json.documents)
      .catch(err => { throw new Error(err) })
  }
}