// AJAX with jQuery. Query allows you to use AJAX with a lot less code than vanilla JavaScript. 
//Also it automatically makes your code work across different browsers. 
//Learn all about how to use AJAX with jQuery using the load, get, and post method 



 //this is an AJAX with vanilla JavaScript example, that could be change for just 1 LINE! of code with jQuery;
 //function loadDoc() {
     //var xhttp = new XMLHttpRequest();
       // xhttp.onreadystatechange = function() {
         //   if (this.readyState == 4 && this.status == 200) {
           //     document.getElementById("demoajax").innerHTML = this.responseText;
        //    }
        //};

//        xhttp.open("GET",
  //      "http://carnes.cc/code/ajax_example.txt", true);
    //    xhttp.send();

//    }

function loadDoc(){
    $("#demoajaxjquery").load("http://carnes.cc/code/ajax_example.txt")
}


// esta instruccion JQuery permiten escribir la cadena "hola" en negrita dentro de la etiqueta de identificador "demoajaxjquery"
// $("#demoajaxjquery").html("<b>hola</b>");