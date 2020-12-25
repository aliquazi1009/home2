//-------------OnScroll Navbar Effect--------------//
$(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 30){
        $('#navbar').css({
            'background':'#fff',
            'box-shadow': '0px -1px 15px 0 rgba(200, 219, 239, 0.7)'
        });
        $('#navbar').addClass('navSlowUp');
        $('.nav-link').css({'color':'#000'})
        $('.navbar-brand').css({'color':'#000'})
        document.getElementById("logo").src = "img/icons/menu-dark.png";
    } 
    else{
        $('#navbar').css({
            'background':'transparent',
            'box-shadow': 'none'
        });
        $('#navbar').removeClass('navSlowUp');
        $('.nav-link').css({'color':'#fff'})
        $('.navbar-brand').css({'color':'#fff'})
        document.getElementById("logo").src = "img/icons/menu-light.png";
    }
});



// ------------------Side Navbar [Mobile View]-------------//
function openSideNavOuter(){
    $('#sideNavOuter').css({'right':'0'});
    $('body').css({'overflow': 'hidden','right': '30%'});
}
function closeSideNavOuter(){
    $('#sideNavOuter').css({'right':'-100%'});
    $('body').css('overflow', 'auto');
}










