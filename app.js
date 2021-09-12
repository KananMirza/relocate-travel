$(document).ready(function(){
    $('.sidenav').sidenav();

    $(window).scroll(()=>{
      if($(window).scrollTop()>100){
      $('#up').slideDown('slow')
      }else{
          $('#up').slideUp('slow')
      }
  })

  $('#up').click(()=>{
      $('html,body').animate({scrollTop:0},1000)
      return false;
  })

  $('.bottom').click(()=>{
    $('html,body').animate({scrollTop:835},1000)
    return false;
})
$('.tabs').tabs();
$('.parallax').parallax();
$('.materialboxed').materialbox();
  });


// function CheckUser(){
//     if(localStorage.getItem('id')=== null){
//         var Blog = {
//             id:[]
//         }
//     }
//     var Blog = {
//         id:[6]
//     }
    
//     localStorage.setItem('id', JSON.stringify(Blog));
    
    
// }


// CheckUser();

