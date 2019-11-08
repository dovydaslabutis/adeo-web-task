// function getAPI() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then((data) => {
//             let tbody = '';
//             data.forEach(function(post){
//                 tbody += `
//                 <tr>${post.title}</tr>
//                 `; 

//             });
//             document.getElementById('tbody').innerHTML = tbody; 
//         })
// }


// $(document).ready(function () {

//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'GET',
//         success: function (allList) {
//             $.each(allList, function (i, listItem) {
//                 $('#items').append('<tr class="clickable-row" id="' + listItem.id +
//                     '"><th scope="row">' + listItem.id + '</th><td>' + listItem.userId +
//                     '</td><td>' + listItem.title + '</td></tr>');
//             });
//         },
//         complete: function () {
//             $('.clickable-row').click(function () {
//                 let id_value = $(this).attr('id');
//                 window.location = 'post.html?name=' + id_value;
//             });
//             let last_id = $('.clickable-row:last-of-type').attr('id');
//             let next_id = parseInt(last_id) + 1;
//             $("a[href='new.html']").attr('href', 'new.html?name=' + next_id);
//         }
//     });
// });

// const getAPI = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then((res) => res.json())
//         .then(posts => console.log(posts))
//     }

// function getAPI() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             let tbody = document.getElementById('tbody');
//             for (let i = 0; i < data.length; i++) {
//                 if (data[i].id === 100) {
//                     let tr = "<tr class=\"rowing row-id-" + data[i].id + "\">";
//                     tr +=
//                         "<td>" + data[i].id + "</td>" +
//                         "<td>" + data[i].title.toString() + "</td>" + "</tr>";
//                     tbody.innerHTML += tr;
                   

//                 } else {
//                     let tr = "<tr class=\"rowing row-id-" + data[i].id + "\">";
//                     tr +=
//                         "<td>" + data[i].id + "</td>" +
//                         "<td>" + data[i].title.toString() + "</td>" + "</tr>";
//                     tbody.innerHTML += tr;
//                 }
//             }
//         })
//         .catch(err => {
//             console.log(err);
//         });


// }

function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let output = '';
            data.forEach(function(post){
                output += `
                <div>
                <p>${post.title}</p>
                </div>
                `;
            });
            document.getElementById('output').innerHTML = output;
        })
    }
