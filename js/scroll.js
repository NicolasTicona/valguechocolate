var scrollTop = 0;

var nav = $('.menu')
var nav_logo = $('.menu #linkHome')

$(window).scroll(function(){
    scrollTop = $(window).scrollTop();

    if(scrollTop < 100){
        nav.css({
            background: 'transparent',
            padding: '15px 30px'
        })

        nav_logo.css({
            width: '0px'
        })
    }
    if(scrollTop > 100){
        nav.css({
            background: 'rgba(0,0,0, .6)',
            padding: '10px 30px'
        })
        
        nav_logo.css({
            
            width: '75px'
        })
    }
})



$(window).ready(function(){
    trufas = $('.trufas')
    bombones = $('.bombones')
    paletas = $('.paletas')
    chocotejas = $('.chocotejas')
    alfajores = $('.alfajores')

    trufasPos = trufas.offset().top 
    bombonesPos = bombones.offset().top 
    paletasPos = paletas.offset().top 
    chocotejasPos = chocotejas.offset().top 
    alfajoresPos = alfajores.offset().top  
     
})

$(window).resize(function(){
    trufasPos = trufas.offset().top
    bombonesPos = bombones.offset().top
    paletasPos = paletas.offset().top
    chocotejasPos = chocotejas.offset().top
    alfajoresPos = alfajores.offset().top  
})

var linkProductos = $('#linkProductos')
var linkContacto = $('#linkContacto')

var listProductos = $('.list')

linkProductos.click(function(e){
    e.preventDefault()
    listProductos.fadeToggle(300)
})

var scrollT = $('#scrollT');
var scrollB = $('#scrollB');
var scrollP = $('#scrollP');
var scrollCH = $('#scrollCH');
var scrollA = $('#scrollA');

scrollT.click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: trufasPos}, '800')
})
scrollB.click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: bombonesPos}, '800')
})
scrollP.click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: paletasPos}, '800')
})
scrollCH.click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: chocotejasPos}, '800')
})
scrollA.click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: alfajoresPos}, '800')
})


$('#linkHome').click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: 0}, '1000')
})

$('#linkContacto').click(function(e){
    e.preventDefault()
    $('html, body').animate({scrollTop: $('html, body').outerHeight(true)}, '1000')
})










