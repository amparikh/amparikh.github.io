  var currentHeaderPic = 0;
  var headerPic = ["url('../final_project/images/landscape.jpg')","url('../final_project/images/leaves.jpg')","url('../final_project/images/forest_waterfall.jpg')","url('../final_project/images/clear_day_grass.jpg')","url('../final_project/images/ornament.jpg')","url('../final_project/images/winter_sunrise.jpg')","url('../final_project/images/open_field.jpg')"];

  var cities = [0, 0, 0, 0];


  setInterval('changePicture()',5000);

  $('form').hide();

  $('#nyc .tab').eq(0).addClass('active');
  $('#chicago .tab').eq(0).addClass('active'); 
  $('#pdx .tab').eq(0).addClass('active');
  $('#sf .tab').eq(0).addClass('active');

  $('#nyc .leftarrow,#chicago .leftarrow, #pdx .leftarrow,#sf .leftarrow').prop('disabled',true);

  $('#hamburger').on('click',function() {
    $('nav ul').toggleClass('menuToggle');

  })

  $('.arrow').on('click',function () {
    var parent = $(this).closest('.city_details');

    var selectedSlide = parent.data('city');
    if ($(this).data('dir') === "right") {
      cities[selectedSlide]++;

    } else {
      cities[selectedSlide]--;
     

    }
      cityCarouselButton(selectedSlide,parent);

    
    $(parent).find('.tab').removeClass('active');
    $(parent).find('.tab').eq(cities[selectedSlide]).addClass('active');
  });

  $('.contact_us button').on('click',function() {
    $('form').slideDown(600);
  });

  $(document).scroll(function(){
    var pos = $(this).scrollTop();
    navBackground(pos); 
     /* console.log(pos); */
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
    /* console.log(number); */
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

  function cityCarouselButton(selectedSlide,parent) {
       var countCityCharacteristics = $(parent).find('ul').length;
       if (cities[selectedSlide] === 0) {
          $(parent).find('.leftarrow').prop('disabled',true);
       }
       else if ((cities[selectedSlide] > 0) && (cities[selectedSlide] < countCityCharacteristics-1)) 
       {
          $(parent).find('.leftarrow').prop('disabled',false);
          $(parent).find('.rightarrow').prop('disabled',false);
       }
       else if (cities[selectedSlide] === countCityCharacteristics-1){
        $(parent).find('.rightarrow').prop('disabled',true);
       }
  }



       
  //C. WHEN YOU MOUSEOVER THE RIGHT SIDE OF NAV BAR, A CONTACT US TAB (LI ITEM) WILL BE APPENDED TO RIGHT MOST SECTION OF NAVBAR
     
       
        






   



