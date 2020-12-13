function fetch(url, method, body) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();

    xhr.open(url, method, true);

    if (method === 'POST') {
      xhr.setRequestHeader('Content-type', 'application/json');
    }

    xhr.onreadystatechange = function() {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(new Error('Error'));
      } 
    }

    xhr.send(body);
  });
}
