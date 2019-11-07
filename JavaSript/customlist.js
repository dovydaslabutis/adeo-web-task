function getAPI() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            return response.json();
        })
        .then(data => {
            let tbody = document.getElementById('tbody');
            for (let i = 0; i < 5; i++) {
                if (data[i].id === 4) {
                    let tr = `${post.title}`;
                    tbody.innerHTML += tr; 
                } 
            }
        })
        .catch(err => {
            console.log(err);
        });


}
