function getGif(url) {
    return new Promise(
        function (resolve, reject) {
            const request = new XMLHttpRequest();
            request.onload = function () {
                if (this.status === 200) {
                    resolve(this.response); // Sukces
                } else {
                    reject(new Error(this.statusText)); // Dostaliśmy odpowiedź, ale jest to np 404
                }
            };
            request.onerror = function () {
                reject(new Error(
                   `XMLHttpRequest Error: ${this.statusText}`));
            };
            request.open('GET', url);
            request.send();
        });
}

getGif('https://api.giphy.com/v1/gifs/random?api_key=79d4ejI5WnmHsZqbA6TZOyeG2iB4101D&tag=' + 'cat')
.then(response => {return (
      <div>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={{width: '100%', maxWidth: '350px', margin: '0 auto'}}/>
        </a>
      </div>
)}
 )
.catch(error => console.error('Something went wrong', error));

