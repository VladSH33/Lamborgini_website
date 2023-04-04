const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });
  

  let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat:54.72123775010959, lng:20.506494981533116 },
    zoom: 16,
  });
}
window.initMap = initMap;