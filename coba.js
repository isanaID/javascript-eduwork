const getData = (url, cb)=> {
    xhr.onload = function () {
        if (xhr.status === 200) {
            return cb(JSON.parse(xhr.responseText));
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

  const data = ()=> {
    getData('https://jsonplaceholder.typicode.com/users', pred);
}