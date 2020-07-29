$(document).ready( function(){
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
  });
  
  $('#search-input').change(function() {
    sjs.search( $( this ).val() );
  });
});
