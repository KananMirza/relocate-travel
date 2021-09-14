function BlogContent(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET","blog.json",true);
    xhr.onload = function(){
        if(this.status === 200){
            
            var content = JSON.parse(this.responseText)
           
            let id= localStorage.getItem('contentid')


            let title='';
            title+=`
            <h1>${content[id].title}</h1>
            <h5>${content[id].subtitle}</h5>
            <div class="parallax"><img src='images/blog/background.jpg' alt="">
            </div>
            `
            document.getElementById("container").innerHTML = title;

           var  section = "";
          
           
         
            // let number = JSON.parse(localStorage.id)
            // let id =number.id[0]
            section+=`<div class="content col s6">
            <h2>About</h2>

            <p>${content[id].content}</p>
            <br>
            <p>${content[id].content1}</p>
            <br>
            <p>${content[id].content2}</p>
            <br>
            <p>${content[id].content3}</p>
          </div>
          <div class="col s1"></div>
          <div class="details col s5">
            <div class="row city_details" style="padding: 10px;">
              <div class="city_size col s4" >
                <p>City size</p>
                <p class="fas fa-users"><span>${content[id].citysize}</span></p><br>
              </div>
              <div class="city_weather col s4">
                <p>Weather</p>
                <p class=""> <img src="images/blog/Sun.png" alt=""><span>High-${content[id].weatherhigh}<sup>o</sup>C</span></p>
                <p class=""> <img src="images/blog/snow.png" alt=""><span>Low-${content[id].weatherlow}<sup>o</sup>C</span></p>
              </div>
              <div class="safety col s4"> 
                <p>Safety</p>
                <p class="fas fa-star"><span> ${content[id].star}</span></p>
              </div>
            </div>
            <div class="photos">
            <img class="materialboxed" src="images/blog/imagetop.jpg" alt="">
            <div class="row">
              <img  class="col s6 materialboxed" src="images/blog/imageleft.jpg" alt="">
              <img class="col s6 materialboxed" src="images/blog/imageright.jpg" alt="">
            </div>
            </div>
          </div>`;
            
            document.getElementsByClassName('content')[0].innerHTML = section;

            
         
        }
    }

    xhr.send();
}

BlogContent();
