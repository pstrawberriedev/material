/*
  navigation.js
*/

console.log('--> navigation.js loaded');

$(document).ready(function() {

  initializeMaterialNav();
  
});

// Initialize Materialize Plugins
function initializeMaterialNav() {
  // SideNav
  $(".button-collapse").sideNav();
  
  // Scrollspy
  doScrollspy();

  // Pushpin
  $('.table-of-contents').pushpin({ top: 80 });
}

// Custom Scrollspy Population
function doScrollspy() {
  var eleMain = $('main');
  var eleScrollspy = $('.scrollspy');
  var eleScrollspyMenu = $('.table-of-contents');
  
  if (eleScrollspy.length && eleScrollspyMenu.length) {
    eleScrollspy.each(function() {
      
      var self = $(this);
      var linkText = self.find('h3').text();
      var linkHref = self.attr('id');
      
      eleScrollspyMenu.append('<li><a href="#' + linkHref + '">' + linkText + '</a></li>');
      
    }, initScrollspy());
  }
  function initScrollspy() {$('.scrollspy').scrollSpy();}
  
}