getAPI(); 
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
