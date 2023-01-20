function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}
function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  request.onreadystatechange = () => {
    if (request.readyState == XMLHttpRequest.DONE) {
      response = JSON.parse(request.responseText);
      callback(response.query.pages['21721040'].extract)
    }
  }
  request.open('get', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*', true);
  request.send();
}
queryWikipedia(createElement);
