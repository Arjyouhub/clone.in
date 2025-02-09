$(document).ready(function(){
    $("#Login-form").validate({
        rules:{
            Email:{
                required:true,
                email:true
            }
          
        }

    })
})