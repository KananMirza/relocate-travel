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



    
   
    $('.blog').click((data)=>{
      let ID = data.target.id
     console.log(data.target.id)
     localStorage.setItem('contentid', ID);
    

    })

    $('.submit').click(()=>{
      let name = document.getElementById('name').value;
      let email = document.getElementById('email').value
      let msg = document.getElementById('msg').value;
      if(name == ''){
        swal("Please check your Name");
      }else if(email == ''){
        swal("Please check your Email");
      }else if(msg == ''){
        swal("Please check your Message");
      } else{
      swal("Good job!", `Thanks for message, ${name}`, "success");
    }
    })
   
    


