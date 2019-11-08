// getAPI(); 
// function getAPI() {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         for (i = 0; i < data.length; i++) {
//                 let output ='';
//                 output +=
//                     "<p>" + data[i].title + "</p>";
//                     document.getElementById('output').innerHTML = output;
            
//         }
//     })
// }
    
// 
    // .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //         let output = '';
    //        for(i=0;i<4;i++){
    //         if (data[i].title === 4) { 
    //             output += `<p> + data[i].title + </p> `;
    //         });
    //         document.getElementById('output').innerHTML = output;
    //     })
    // }

postAPI();
function postAPI() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                return response.json();
            })
            .then(data => {
                let tbody = document.getElementById('tbody');
                for (let i = 0; i < 4; i++) {
                    if (data[i].id === 4) {
                        let tr = "<tr class=\"row" + data[i].title + "\">";
                        tr +=
                            "<td>" + data[i].title.toString() + "</td>" + "</tr>";
                        tbody.innerHTML += tr;
                    } else {
                        let tr = "<tr class=\"row" + data[i].title + "\">";
                        tr +=
                            "<td>" + data[i].title.toString() + "</td>" + "</tr>";
                        tbody.innerHTML += tr;
                    }
                }
            })
            .catch(err => {
                console.log(err);
            });
    
    
    }

