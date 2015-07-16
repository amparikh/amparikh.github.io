var currentHeaderPic = 0;
var headerPic = ["url('../final_project/images/landscape.jpg')","url('../final_project/images/leaves.jpg')","url('../final_project/images/forest_waterfall.jpg')","url('../final_project/images/clear_day_grass.jpg')","url('../final_project/images/ornament.jpg')","url('../final_project/images/winter_sunrise.jpg')","url('../final_project/images/open_field.jpg')"];

var cities = [0, 0, 0, 0];


setInterval('changePicture()',5000);

$('form').hide();

$('#nyc .tab').eq(0).addClass('active');
$('#chicago .tab').eq(0).addClass('active'); 
$('#pdx .tab').eq(0).addClass('active');
$('#sf .tab').eq(0).addClass('active');


$('.arrow').on('click',function () {
  var parent = $(this).closest('.city_details');
  var selectedSlide = parent.data('city');

  if ($(this).data('dir') === "right") {
    cities[selectedSlide]++;
  } else {
    cities[selectedSlide]--;
  }
  
  $(parent).find('.tab').removeClass('active');
  $(parent).find('.tab').eq(cities[selectedSlide]).addClass('active');
});


$('paper-button').on('click',function() {
  $('form').slideDown(600);
});

$(document).scroll(function(){
  var pos = $(this).scrollTop();
  navBackground(pos); 
  console.log(pos);
  if (pos < 2136) {
    unSelect();
  }

  if ((pos >= 556) && (pos < 3257)) {
    unSelect();
    $('#link1').addClass('selected');
  }

  if ((pos >= 3257) && (pos < 3754)) {
    unSelect();
    $('#link2').addClass('selected');
  }

  if (pos > 3754) {
    unSelect();
    $('#link3').addClass('selected');
  }
});


function changePicture() {
  currentHeaderPic++;
  $('#background_home').css('background-image',headerPic[currentHeaderPic]);
}

function navBackground(number){
  console.log(number);
  if (number > 400) {
    $('nav').addClass('navScroll');
    $('nav li a').addClass('navScrollFont');
    $('nav h1').addClass('navScrollTitle');
  }
   else {
    $('nav').removeClass('navScroll');
      $('nav li a').removeClass('navScrollFont');
    $('nav h1').removeClass('navScrollTitle');
   }
}

function unSelect() {
  $('#link1,#link2,#link3').removeClass('selected');
}


     
       //C. WHEN YOU MOUSEOVER THE RIGHT SIDE OF NAV BAR, A CONTACT US TAB (LI ITEM) WILL BE APPENDED TO RIGHT MOST SECTION OF NAVBAR
   
     
      


  //3. CITY GUIDE
       //A. MOUSE OVER PICTURE WILL DO THE FOLLOWING:
         // 1. INCREASE OPACITY OF PICTURE
          //2. PRINT NAME OF CITY IN PICTURE
          //3. PRINT A ONE-LINER ABOUT THE CITY (ex. for NYC, it might print "High-energy city that never sleeps")
       //B. ROLLING OFF THE PICTURE WILL REMOVE EFFECTS MENTIONED IN 'A'

  //4. TESTIMONIALS
       //A. MOUSE OVER PICTURE WILL DO THE FOLLOWING:
          //1. INCREASE OPACITY OF PICTURE
          //2. PRINT TESTIMONIAL QUOTE FROM THAT INDIVIDUAL
          //3. PRINT PERSON'S FIRST NAME
       //B. ROLLING OFF THE PICTURE WILL REMOVE EFFECTS MENTIONED IN 'A'


 


  
  //3. WHEN YOU ROLLOVER ANY IMG IN THUMBNAILS SECTION:
     //1. INCREASE OPACITY OF PICTURE
     //2. PRINT NAME OF CITY IN PICTURE
     //3. PRINT A ONE-LINER ABOUT THE CITY (ex. for NYC, it might print "High-energy city that never sleeps")
     //4. ROLLING OFF THE PICTURE WILL REMOVE EFFECTS MENTIONED IN 'A'

/*
 MARK'S COMMENTS
 $('#nyc .tab').eq(2).addClass('active');

$('#nyc .tab').removeClass('active')
 $('#nyc .tab').eq(index).addClass('active');


  document.addEventListener('WebComponentsReady', function() {
        var button = document.querySelector('paper-button');
        var greeting = document.getElementById("greeting");
        button.addEventListener('click', function() {
          greeting.textContent = 'Hello, ' + input.value;
        });
      });
*/