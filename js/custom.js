$(document).ready(function(){
    $("#navbar-toogle").on('click', function(){
        $("#nav").toggleClass("hidden").css({
            'background': 'linear-gradient(rgba(0,0,0,.4),rgba(5,47,28,.7), rgba(5,47,28,1)  )',
            'transition': '1s',
            'right': '0px',
            'width': '66%'
        })
        
    })
})