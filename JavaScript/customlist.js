
//this function will fetch API from the given json website and will post it in table rows, first 4 of them
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
                        let tr = "<tr class=\"table-row" + data[i].title + "\">";
                        tr +=
                            "<td>" + data[i].title.toString() + "</td>" + "</tr>";
                        tbody.innerHTML += tr;
                    } else {
                        let tr = "<tr class=\"table-row" + data[i].title + "\">";
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

