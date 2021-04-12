$(document).ready(function(){
    
    let board = Chessboard('review-board', {
        position: 'start'
    });
    
    $(".current-game-item").click(function(){
        $(".current-game-item").removeClass("selected-current-game");
        $(this).addClass("selected-current-game");
    });
});
