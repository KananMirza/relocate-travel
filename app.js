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
      let name = document.getElementById('name');
      let email = document.getElementById('email');
      let msg = document.getElementById('msg');
      if(name.value == ''){
        swal("Please check your Name");
      }else if(email.value == ''){
        swal("Please check your Email");
      }else if(msg.value == ''){
        swal("Please check your Message");
      } else{
      swal("Good job!", `Thanks for message, ${name.value}`, "success");
      document.getElementById('name').value='';
      document.getElementById('email').value='';
      document.getElementById('msg').value = '';

    }

    
    
    })
   
    


