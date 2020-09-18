function jump() {
  document.getElementById('current-projects').scrollIntoView(true);
}

function jumpr() {
  document.getElementById('properties').scrollIntoView(true);
}

$(document).on('click', '#apart', function(e) {
  $("#gap").trigger('click');
});

$(document).on('click', '#house', function(e) {
  $("#ghl").trigger('click');
});

$(document).on('click', '#townh', function(e) {
  $("#gth").trigger('click');
});

window.onload=function(){
  document.getElementById("gall").click();
};