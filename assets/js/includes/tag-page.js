$(document).ready(function () {
  showTag(window.location.hash);
});

$(window).on( 'hashchange', function( e ) {
  console.log(e);
  console.log('hash change: ' + window.location.hash );
  $('.tag-div').each(function( index ) {
    if (!$(this).hasClass('is-hidden')) {
      hideTag($(this).attr('id'));
    }
  });
  
  showTag(window.location.hash);
});

function showTag(tag) {
  console.log('show tag: ' + tag );
  $(tag).removeClass('is-hidden');
  setTitleTag(tag);
}
function hideTag(tag) {
  console.log('hide tag: ' + tag );
  $(tag).addClass('is-hidden');
}

function setTitleTag(tag) {
  console.log('set title: ' + tag );
  $('#title-tag').text('Posts about `' + tag.substring(1) + '`'); 
}
