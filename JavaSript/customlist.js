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

$(document).ready(function () {

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'GET',
        success: function (allList) {
            $.each(allList, function (i, listItem) {
                $('#items').append('<tr> + <td>' + listItem.title + '</td></tr>');
            });
        },
       
    });
});