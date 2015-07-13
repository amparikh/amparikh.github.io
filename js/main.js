setInterval('changePicture()',5000);
var currentHeaderPic = 0;
var headerPic = ["url('../final_project/images/landscape.jpg')","url('../final_project/images/leaves.jpg')","url('../final_project/images/forest_waterfall.jpg')","url('../final_project/images/clear_day_grass.jpg')","url('../final_project/images/ornament.jpg')","url('../final_project/images/winter_sunrise.jpg')","url('../final_project/images/open_field.jpg')"];

var nyc = 0;
var nycdetails = ['<h3>Neighborhoods</h3><li>Little Italy</li><li>Tribeca</li><li>Time Square</li><li>Meatpacking District</li><li>East Village</li>','<h3>Restaurants</h3><li>Seafood: Le Bernardin</li><li>Italian: Marea</li><li>American: Gotham Bar and Grill</li><li>French: Bouley</li><li>Sushi: Sushi Yasuda</li>','<h3>Attractions</h3><li>Empire State Building</li><li>Statue of Libery</li><li>Brooklyn Bridge</li><li>Central Park</li><li>Bronx Zoo</li>','<h3>Nightclubs</h3><li>Santos Party House</li><li>Provocateur</li><li>Output</li><li>Le Bain at the Standard</li><li>Cielo</li>'];

var chi = 0;
var chidetails = ['<h3>Neighborhoods</h3><li>Lincoln Park</li><li>South Loop</li><li>Wicker Park</li><li>River North</li><li>Wrigleyville</li>',' <h3>Restaurants</h3><li>Seafood: Catch 35 Restaurant</li><li>Italian: La Scarola</li><li>American: Alinea</li><li>French: Everest Restaurant</li><li>Sushi: Toro Sushi</li>','<h3>Attractions</h3><li>Willis Tower Skydeck</li><li>Millenium Park</li><li>Lincoln Park Zoo</li><li>Navy Pier</li><li>Shedd Aquarium</li>','<h3>Nightclubs</h3><li>Sound Bar</li><li>Paris Club</li><li>Roof on the Wit</li><li>The Mid</li><li>Beauty Bar</li>'];

var pdx=0;
var pdxdetails = ['<h3>Neighborhoods</h3><li>Pearl District</li><li>Downtown</li><li>Northwest District</li><li>Old Town Chinatown</li><li>Alberta</li>',"<h3>Restaurants</h3><li>Seafood: McCormick</li><li>Italian: Piazza Italia</li><li>American: Jake's Famous Crawfish</li><li>French: LePigeon</li><li>Sushi: Bamboo Sushi</li>",'<h3>Attractions</h3><li>Pittock Mansion</li><li>Voodoo Donut</li><li>Tom McCall Waterfront Park</li><li>Oregon Museum of Science and Industry</li><li>Pioneer Courthouse Square</li>','<h3>Nightclubs</h3><li>Departure</li><li>Splash Bar</li><li>Holocene</li><li>Barrel Room</li><li>Crown Room</li>'];

var sfo=0;
var sfodetails = ['<h3>Neighborhoods</h3><li>The Mission</li><li>The Marina</li><li>Mission Bay</li><li>Pacific Heights</li><li>Rockridge</li>',"<h3>Restaurants</h3><li>Seafood: Sotto Mare</li><li>Italian: La Ciccia</li><li>American: Michael Mina</li><li>French: L'Ardoise</li><li>Sushi: Ebisu Restaurant</li>","<h3>Attractions</h3><li>Fisherman's Wharf</li><li>Union Square</li><li>Golden Gate Park/Bridge</li><li>Alcatraz</li><li>Ghirardelli Square</li>",'<h3>Nightclubs</h3><li>Mighty</li><li>Mezzanine</li><li>Public Works</li><li>Mercer</li><li>Ruby Skye</li>'];

$('form').hide();

$('#nyc .rightarrow').on('click',function () {
   nyc++;
   $('#nyc ul').html(nycdetails[nyc]);
});

$('#nyc .leftarrow').on('click',function () {
   nyc--;
   $('#nyc ul').html(nycdetails[nyc]);
});

$('#chicago .rightarrow').on('click',function () {
   chi++;
   $('#chicago ul').html(chidetails[chi]);
});

$('#chicago .leftarrow').on('click',function () {
   chi--;
   $('#chicago ul').html(chidetails[chi]);
});

$('#pdx .rightarrow').on('click',function () {
   pdx++;
   $('#pdx ul').html(pdxdetails[pdx]);
});

$('#pdx .leftarrow').on('click',function () {
   pdx--;
   $('#pdx ul').html(pdxdetails[pdx]);
});

$('#sf .rightarrow').on('click',function () {
   sfo++;
   $('#sf ul').html(sfodetails[sfo]);
});

$('#sf .leftarrow').on('click',function () {
   sfo--;
   $('#sf ul').html(sfodetails[sfo]);
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

 


  document.addEventListener('WebComponentsReady', function() {
        var button = document.querySelector('paper-button');
        var greeting = document.getElementById("greeting");
        button.addEventListener('click', function() {
          greeting.textContent = 'Hello, ' + input.value;
        });
      });
