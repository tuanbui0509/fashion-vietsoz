$(document).ready(function(){
    
    
    $(window).resize(function(){
        if($(document).width() >=992 || $(document).width() <=992)
        {
            $('.wp-respon-menu').css('display','none');
            $('.respon-menu .sub-menu').css('display','none');
            $('.btn-respon i').removeClass('fa-times').addClass('fa-bars');
            $('#arrow-res').removeClass('fa-minus').addClass('fa-plus');
            close_form_search();

        }
    });
    
    slides('#feature.owl-carousel',10,true,false,10,'');
    slides('#list-same-cat.owl-carousel',10,true,false,10,'');
    slides('.owl-carousel',20,false,true,10,10);
    
    //Menu
    var direct_li = $('#main-menu > li > ul.sub-menu');
    direct_li.after('<i class="fa fa-chevron-down menu-arrow" aria-hidden="true"></i>');
    direct_li.find('li ul.sub-menu').after('<i class="fa fa-chevron-right menu-arrow-right" aria-hidden="true"></i>');
    direct_li.find('li ul.sub-menu').addClass('posi')
    // MENU RESPON 
    $('#menu-respon > li').find('.sub-menu').after('<i class="fa fa-chevron-right respon-arrow" aria-hidden="true"></i>');
    $('#menu-respon > li').find('.sub-menu').parent('li').addClass('position-relative');
    

    $('.icon-menu-respon').click(function(){
        $('#wp-menu-respon').stop().slideToggle();
        $(this).find('i').toggleClass('fa-bars fa-times');
    });
    $('.respon-arrow').click(function(){
        
        // if(!$(this).parent('li').hasClass('active')) // b1. kiểm tra nếu không có thì thêm vào
        // {
        //     $(this).parent('li').addClass('active'); //thêm active
            
        //     // $(this).closest('#menu-respon').find('li .sub-menu').slideUp(); // đóng sub-menu khác
        //     // $('#menu-respon').find('li .sub-menu').slideUp(); // đóng sub-menu khác
        //     $('.sub-menu').slideUp(); // đóng sub-menu khác
            
        //     // $(this).closest('#menu-respon').find('li .sub-menu').slideUp(); // đóng sub-menu khác
            
        //     $(this).prev().stop().slideDown(); // cho nó show ra
        //     $(this).closest('#menu-respon').find('li.active').removeClass('active'); // xóa class khác thì để quay về b1 kiểm tra tiếp 
        //     $(this).parent('li').addClass('active'); // thêm vào để để kiểm tra điệu kiện else
        //     $(this).closest('#menu-respon').find('.respon-arrow').removeClass('fa-chevron-down').addClass('fa-chevron-right');
        //     $(this).removeClass('fa-chevron-right').addClass('fa-chevron-down');
            
        // }
        // else
        // {
        //     $(this).prev().stop().slideUp();
        //     $(this).parent('li').removeClass('active');
        //     $(this).removeClass('fa-chevron-down').addClass('fa-chevron-right');
            
        // }
        // return false;
        $(this).toggleClass('fa-chevron-right fa-chevron-down');
        $(this).prev().stop().slideToggle();
    });

    
    $('.btn-search').click(function(){
        $('.icon-menu-respon ').css('visibility','hidden');
        $('.action').css('visibility','hidden');
        $('.wp-logo').css('visibility','hidden');
        $('.wp-menu').css('visibility','hidden');
        $('#form-search').addClass('open');
        $('#wp-menu-respon').stop().slideUp();
        $('.icon-menu-respon i').removeClass('fa-times').addClass('fa-bars');
        return false;
    });
    $('.close').click(function(){
        close_form_search();
    });
    $(window).resize(function(){
        if($(document).width() >=992 || $(document).width() < 992 || $(document).width() < 375 || $(document).width() > 375)
        {
            $('#wp-menu-respon').css('display','none');
            $('.icon-menu-respon i').removeClass('fa-times').addClass('fa-bars');
        }
        else if($(document).width() == 375)
        {
            $('#wp-menu-respon').css('display','block');
        }
    });

    // CUT TEXT 
    $('.widget.post .post-desc').each(function(){
        var content = $(this).html();
        var text_cut = content.substr(0,270);
        var html = text_cut + "<span>...</span>";
        $(this).html(html);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#btn-top').stop().fadeIn(150);
        } else {
            $('#btn-top').stop().fadeOut(150);
        }
        
    });
    if($('#wp-menu-respon').css('display')=='block')
    {
        $('#wp-menu-respon').css('display','block');
    }

    $('#btn-top').click(function () {
        $('body,html').stop().animate({scrollTop: 0}, 800);
    });
    
});
function close_form_search()
{
    $('.action').css('visibility','visible');
    $('.wp-logo').css('visibility','visible');
    $('.wp-menu').css('visibility','visible');
    $('.icon-menu-respon ').css('visibility','visible');
    $('#form-search').removeClass('open');
    $('.wp-menu-respon').css('visibility','visible');
}
function slides(class_name,margin_value,nav_bool,dot_bool,margin_respon ='',margin_respon_2 ='')
{
    $(class_name).owlCarousel({
        stagePadding: 0,
        loop: true,
        margin: margin_value,
        nav: nav_bool,
        dots: dot_bool,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                margin:margin_respon
            },
            414:{
                items:2,
                margin:margin_respon
            },
            768:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
}