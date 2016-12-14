



var gotoclassChoice = ''
var classChoice = ''
var lessonChoice = ''
var helloChoice = ''
var storyChoice = ''
var coffeeChoice = ''
var storeChoice = ''
function getCookie(name) {
   var cookieValue = null;
   if (document.cookie && document.cookie !== '') {
       var cookies = document.cookie.split(';');
       for (var i = 0; i < cookies.length; i++) {
           var cookie = jQuery.trim(cookies[i]);
           if (cookie.substring(0, name.length + 1) === (name + '=')) {
               cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
               break;
           }
       }
   }
   return cookieValue;
}


var csrftoken = getCookie('csrftoken');
function csrfSafeMethod(method) {
   return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
}


$.ajaxSetup({
    beforeSend: function(xhr, settings) {
        if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
            xhr.setRequestHeader("X-CSRFToken", csrftoken);
        }
    }
});

function getChoice(){
   jQuery.ajax("/api/student/1").done(function(results){
       stringChoices = results.choices
   })
}
getChoice()


function printChoices(){
   var $stuff = $("<p>")
   jQuery.ajax("/api/student/1").done(function(results){
   var choiceStuff = results
   var listChoices = choiceStuff.choices.split(',')
   if(listChoices.length == 5){
       console.log(listChoices)
       gotoclassChoice = listChoices[0]
       classChoice = listChoices[1]
       lessonChoice = listChoices[2]
       helloChoice = listChoices[3]
       storyChoice = listChoices[4]
   }
   if(listChoices.length == 6){
       console.log(listChoices)
       coffeeChoice = listChoices[0]
       $stuff.html(coffeeChoice)
       $("#coffeeId").append($stuff)
       storeChoice = listChoices[1]
       classChoice = listChoices[2]
       lessonChoice = listChoices[3]
       helloChoice = listChoices[4]
       storyChoice = listChoices[5]
   }
})
}
printChoices()
