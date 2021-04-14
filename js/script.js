$(document).ready(function(){
    
    $(".block-invates p").click(function(){
        $(this).remove();
    });
    
    
    $(".create-tournament-button").click(function(){
        $(".create-tournament-block").removeClass("deactivated");
    });
    $("#block-info-tournament__button-cancel").click(function(){
        $(".create-tournament-block").addClass("deactivated");
    });
    
    
    $(".create-button").click(function(){
        $(".form-create-wait-for").removeClass("deactivated");
    });
    $(".form-create-wait-for_button").click(function(){
        $(".form-create-wait-for").addClass("deactivated");
    });
    
    
    
    $("#sign-in-form__sign-up-button").click(function(){
        $(".sign-in-form").addClass("deactivated");
        $(".sign-up-form").removeClass("deactivated");
    });
    
    $("#sign-up-form__sign-in-button").click(function(){
        $(".sign-in-form").removeClass("deactivated");
        $(".sign-up-form").addClass("deactivated");
    });
    
    
    
    $("#button-show-game").click(function(){
        $(".list-game").removeClass("deactivated");
        $(".list-tournament").addClass("deactivated");
        $(".list-friend").addClass("deactivated");
    });
    
    $("#button-show-tournament").click(function(){
        $(".list-game").addClass("deactivated");
        $(".list-tournament").removeClass("deactivated");
        $(".list-friend").addClass("deactivated");
    });
    
    $("#button-show-friend").click(function(){
        $(".list-game").addClass("deactivated");
        $(".list-tournament").addClass("deactivated");
        $(".list-friend").removeClass("deactivated");
    });
    
    
    
    
    $(".current-game-item").click(function(){
        $(".current-game-item").removeClass("selected-current-game");
        $(this).addClass("selected-current-game");
    });
    
});
 
