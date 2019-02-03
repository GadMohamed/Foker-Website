(function(){

$(".mynav li a ").click(function(e){
    e.preventDefault();
    
    $('html, body').animate(
        {

            scrollTop: $('#' + $(this).data("scroll")).offset().top

        },1000)

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    
})

$("#scrollup").click(function(){

    $("body,html").animate({scrollTop:"0"},1000)

})

$(window).scroll(function(){

    var scroll = $(window).scrollTop();
    if( scroll > ($('#about').offset().top-100))
    {
        $('.header nav').css({   
            'backgroundColor':'rgba(0,0,0,.9)', 
        })

        $("#scrollup").css("opacity","1")
    }
    else{
        $('.header nav').css({   
            'backgroundColor':'transparent'
        })

        $("#scrollup").css("opacity","0")
    }
})

$(window).scroll(function(){
    
    $('.block').each(function()
        {
            let scroll = $(window).scrollTop(); 
            if( scroll > $(this).offset().top)
            {
               let sectionId =  $(this).attr('id');
               $('.mynav li a').removeClass('active');
               $('.mynav li a').css("transition","all 0s")
               $('.mynav li a[data-scroll="'+ sectionId +'"]').addClass('active')
            }
        })




})
    
}())

