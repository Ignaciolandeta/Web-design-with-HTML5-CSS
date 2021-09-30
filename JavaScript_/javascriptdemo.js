/* Some JavaScript basics; var Types and loops*/

for (var i=0; i<10; i++){
    console.log("Hello world! number secuence...", i);
}


var numbers = [1,2,3]
for (i in numbers){
    var a = numbers[i];
    console.log("Number secuence;", i);

}

var varlength = "Hello world!"
var lenght = varlength.length
console.log(lenght)


var txt1 = "Hello "
var txt2 = "world"
var concat = txt1 + txt2
console.log(concat);

var txt3 = "Hello "
var concat2 = txt3.concat("World!!!!!!");
console.log(concat2)

var txt4 = "Hi there Messi, this is the number for you..."
var num = 10
var sum = txt4 + num
console.log(sum)


var txt5 = "Hello"
var pos = txt5.indexOf('o')
console.log(pos)

var txt6 = "Substring java function"
var str = txt6.substring(3,20)
console.log(str)

var v=['1','2','3','4','5']
var len = v.length
v2 = v.concat(6,7,8)
console.log(len)
console.log(v2)


/* JSON Java Script Object Notation '{}' examples; */
var json = {"firstname": "Ignacio", "lastname":"Landeta"}
console.log(json.lastname)

var client = {
    "id": "111111",
    "name": "maria",
    "lastname": "jimenez",
    "age": "22",
    "active": true     
}
console.log(client.id)
console.log(client.name)
console.log(client.lastname)
console.log(client.age)
console.log(client.active)

var carinfo = {
    "colors": ["red", "white", "blue"],
    "doors": ["2","4"]
};
console.log(carinfo.colors[1]);


var myjson = {
    "name": {
            "first": "beau",
            "last": "Carnes",       
    },
    "age": 33,
    "skills": ["juggling", "stiltwalking", "coding"],
    "married": true,
    "superpowers": null   
}
// stringify method (transform Json to string)
var stringified = JSON.stringify(myjson)
console.log(stringified);

// parse method (transform string to Json)
var stringjson = '{"first": "beau", "last": "Carnes"}';
var parsejson = JSON.parse(stringjson);
console.log(parsejson)


var demojson = {
    "PhoneBook": {
                "objectid": "phonebookID",
                "owner": "Peter",
                "contacts": ["contact1", "contact2", "contact3"],
    },
    "Contact": {
            "objectid": "phonebookID",
            "phone": "555-5555",
            "name": "Jhon",
            "title": "SW Engineer",
            "age": 50,
            "address": "Mt View 1234, CA"
    },
    "Address": {
            "objectid": "phonebookID",
            "street": "street 1",
            "city": "California 90210",
            "state": "CA",
    }

}
console.log(demojson)


// AJAX Asynchronous JavaScript and XML. AJAX in JavaScript allows you to update parts of a web page without reloading the entire page. This is a example with vanilla JavaScript (not JQery);//

/*  <h1>This is an AJAX with JavaScript example;</h1>
<p id="demoajax">Lets AJAX change this text by pressing the button....!</p>
<button type="button" onclick="loadDoc()">Press to change content</button>

<script>
    function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById("demoajax").innerHTML = this.responseText;
            }
        };

        xhttp.open("GET",
        "http://carnes.cc/code/ajax_example.txt", true);
        xhttp.send();

    }
</script> */ 
