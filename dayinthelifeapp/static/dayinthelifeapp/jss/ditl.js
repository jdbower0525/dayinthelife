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

// DELETE //
function removeChoices(){
    var id = $('#username_field').val()
    $.getJSON( "/api/student/" + id, function(student) {
        var patchData = {'choices':[]}
        jQuery.ajax({
            url:'/api/student/' + j + '/',
            data:patchData,
            dataType: 'jsonp',
            type:'PATCH'
        }).done(function())
    }
}

function addChoice(){
    var id = $('#username_field').val()
    $.getJSON( "/api/student/" + id, function(student) {
        var newchoice = document.getElementById("getChoice").value
        var choices = student.choices
        var patchData = {'choices':[choices + newchoice]}
        jQuery.ajax({url:'/api/student/' +  id + '/',
            data:patchData,
            dataType: 'jsonp',
            type:'PATCH'
        }).done(function())
})}
