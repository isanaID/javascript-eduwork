const xhr = new XMLHttpRequest();


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
    getData('https://jsonplaceholder.typicode.com/users', (data)=> {
        data.forEach( (element) => {
            document.getElementById('list').innerHTML += `<tr> <th scope="row">${element.id}</th> <td>${element.name}</td> <td>${element.username}</td> <td>${element.email}</td> <td>${element.address.street}, ${element.address.suite}, ${element.address.city}</td> <td>${element.company.name}</td> </tr>`;
        });
        });
}

data();