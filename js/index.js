$(document).ready(function () {
  let data = {
    'CATEGORIA': -1
  };
  consumeServicio('POST', data, CONSULTAIMAGENESXCATEGORIAS, llenaImagenesXCategorias);  
});

function llenaImagenesXCategorias(categorias) {
  var html = '';

  for (let cat of categorias) {
    html += '<div class="swiper-slide">';
    html += '<img class="card-img-top slideDimension"';
    html += 'src="' + cat.URLIMAGEN + '"';
    html += 'alt="' + cat.CATEGORIA + '">';
    html += '</div>';
  }
  $('#imagenespequeñas').html(html);
  cargaConfiguracion();
}

function cargaConfiguracion() {

  // Activate Carousel
  $("#carouseheader").carousel();

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#carouseheader").carousel(0);
  });
  $(".item2").click(function () {
    $("#carouseheader").carousel(1);
  });
  $(".item3").click(function () {
    $("#carouseheader").carousel(2);
  });

  // Enable Carousel Controls
  $("#prev-header").click(function () {
    $("#carouseheader").carousel("prev");
  });
  $("#next-header").click(function () {
    $("#carouseheader").carousel("next");
  });

  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 6,
    loop: true,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  swiper.update();
}

$('.swiper-slide').click(function() {
  //get index for div 
    var idx = $(this).parents('div').index();
    console.log(idx)
    var id = parseInt(idx);
    $('.bd-example-modal-lg').modal('show'); // show the modal
    $("#popUpModal").carousel(id); // slide carousel to selected
  });