
const search = () => {
    let value = document.getElementById('mySearch').value;
    let url = `https://newsapi.org/v2/everything?q=${value}&sortBy=publishedAt&apiKey=de5ca3f710ee45f58da58be47433cba8`;
    console.log(url);
    return url;
}

// let req = new Request(url);

// fetch(req)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//             // document.getElementById('berita').innerHTML = data.articles.map((element) => {
//             //     return `<div class="card mt-3 mb-3" style="width: 18rem;">
//             //     <img src="${element.urlToImage}" class="card-img-top" alt="...">
//             //     <div class="card-body">
//             //        <h5 class="card-title">${element.title}</h5>
//             //        <p class="card-text"><br>${element.author} - ${element.publishedAt}<br><br>${element.description}</p>
//             //        <a href="${element.url}" class="btn btn-primary">Read More</a>
//             //     </div>
//             //     </div>`
//             // })
//             // console.log(data);
//             data.articles.forEach((element) => {
//                 document.getElementById('berita').innerHTML += `<div class="card mt-3 mb-3 px-auto py-auto" style="width: 18rem;">
//                      <img src="${element.urlToImage}" class="card-img-top" alt="...">
//                      <div class="card-body">
//                         <h5 class="card-title">${element.title}</h5>
//                         <p class="card-text"><br>${element.author} - ${element.publishedAt}<br><br>${element.description}</p>
//                         <a href="${element.url}" class="btn btn-primary">Read More</a>
//                      </div>
//                      </div>`
//         })
//         console.log(data);
//     })
