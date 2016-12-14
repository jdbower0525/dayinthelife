// cookie csrf function
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

function coffeeChoices(){
    var patchdata = {'choices': 'coffee'}
    console.log('gee')
    var student_id = $('#studentid').val()
    jQuery.ajax({url: '/api/student/' + student_id + '/', data: patchdata, type:'PATCH'}).done(function(){
    })}
$("#coffeeButton").click(coffeeChoices)

function classChoices(){
    var patchdata = {'choices': 'class'}
    console.log('gee')
    var student_id = $('#studentid').val()
    jQuery.ajax({url: '/api/student/' + student_id + '/',
                data: patchdata,
                type:'PATCH'})
                .done(function(){
                })
}
$("#classButton").click(classChoices)
