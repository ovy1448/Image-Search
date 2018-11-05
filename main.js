document.getElementById("button").addEventListener("click", loadImages);

function loadImages() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.unsplash.com/search/photos?page=1&query=ice&client_id=15020f1f31839a088aff745486e7a469cd064761ff165c9d3d9f57de77d10348", true);

    xhr.onload = function () {
        if (this.status == 200) {
            var response = JSON.parse(this.responseText);
            var images = response.results;
            

            var output = "";
            for (var i in images) {
                output +=
                    '<div class="image">' +
                    '<img src="' + images[i].urls.small + '">'
                '</div>';
            }

            document.getElementById("images").innerHTML = output;
            console.log(images);
        }

    }
    xhr.send();
}