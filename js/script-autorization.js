$(document).ready(function(){
    
    $("#sign-in-form__sign-up-button").click(function(){
        $(".sign-in-form").addClass("deactivated");
        $(".sign-up-form").removeClass("deactivated");
    });
    
    $("#sign-up-form__sign-in-button").click(function(){
        $(".sign-in-form").removeClass("deactivated");
        $(".sign-up-form").addClass("deactivated");
    });
    
});
