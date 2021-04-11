$(document).ready(function(){
    
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
    
}); 
