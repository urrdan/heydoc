
function togglerNext(a, b){
    $(a).click(function(){
        $(this).next().toggleClass(b)
    })   
}

function ClickToOpenAnother(a,b){
   $(a).click(function(){
        $(b).removeClass('hide')
    }) 
}


$('.ordeRadio').change(function(){
    $('.ordeRadio').removeClass('focusd').parent().next().addClass('hide')
    $(this).addClass('focusd')
    $('.focusd').parent().next().removeClass('hide')
})



$('.closer').click(function(){
    $('.overLayer').addClass('hide')
})
togglerNext('#div5 > h2','hide')
ClickToOpenAnother('#signUpBtn','#signup-menu')
ClickToOpenAnother('#logInBtn','#login-menu')
ClickToOpenAnother('.overLayerGen','#seeDoc')

$('.confirm').click(function(){
    $('.acknow').removeClass('hide')
    $(this).hasClass('later')? $('#waitTime').html('the set date'): $('#waitTime').html('in 15 minutes')
})


$(window).scroll(function(){
    var offs=$('#div4').position().top-500
    var scrolled=$(this).scrollTop()
    if(scrolled >= offs){
        //$('#div4>h1').animate({marginBottom: '100px'},600)
        $('#div4> *').addClass('framesi')
    }else{
        $('#div4> *').removeClass('framesi')
    }
    //console.log(scrolled,offs)    
})



/*var ofsetofnav= document.getElementById('div4').offsetTop;
//var totalHeightOfHtml=document.documentElement.scrollHeight 
window.addEventListener('scroll',function(){
    var scrolled= window.scrollY;
    if (scrolled>=ofsetofnav){
        document.getElementById('div4').style= 'margin:100px';
    }else{
        document.getElementById('div4').style='margin:10px';
    }
    console.log('scrolled: '+scrolled);
    //console.log('documentHeight: '+totalHeightOfHtml);
})*/
