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

function doThings(){
    id = 1
    var patchData = {
        user: 1,
        choices: [1,2,3]
}
    // var patchData = new FormData();
    // form.append("user", "1");
    // form.append("choices", "1");
    // form.append("choices", "4");


    var ajaxdata = {
        url: '/api/student/' + id + '/',
        data: { user: 1, choice: [1,2] },
        dataType: 'application/json',
        type: 'PUT'
    }
    console.log(ajaxdata)
    $.ajax(ajaxdata).done(function(results){console.log(results)})
}
doThings()
