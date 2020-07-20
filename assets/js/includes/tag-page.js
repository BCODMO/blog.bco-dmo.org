$(document).ready(function () {
  showTag(window.location.hash);
});

$(window).on( 'hashchange', function( e ) {
  $('.tag').each(function( index ) {
    if (!$(this).hasClass('is-hidden')) {
      hideTag($(this).attr('id'));
    }
  });
  
  showTag(window.location.hash);
});

function showTag(tag) {
  $(tag).removeClass('is-hidden');
  setTitleTag(tag);
}
function hideTag(tag) {
  $(tag).addClass('is-hidden');
}

function setTitleTag(tag) {
  $('#title-tag').text('Posts about `' + tag + '`'); 
}
