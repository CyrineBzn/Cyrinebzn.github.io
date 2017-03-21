function requeteAPI(url, id) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var myObj = this.responseText;
            var jsonPretty = JSON.stringify(JSON.parse(myObj), null, 2);
            document.getElementById(id).innerHTML = jsonPretty;
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}
