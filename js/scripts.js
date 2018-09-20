var iceCreamFlavors = ['Chocolate Fudge', 'Earl Gray', 'Rocky Road', 'Chunky Monkey', 'Cookie Dough', 'Cookies n Cream'];

$(document).ready(function() {
  iceCreamFlavors.forEach(function(flavor) {
    $('#list').append('<li>' + flavor + '</li>');
  });
});
