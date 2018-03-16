function httpGet(url) {
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

httpGet('https://api.giphy.com' + '/v1/gifs/random?api_key=' + '79d4ejI5WnmHsZqbA6TZOyeG2iB4101D' + '&tag=cat';)
.then(response => console.log('Contents: ' + response))
.catch(error => console.error('Something went wrong', error));

