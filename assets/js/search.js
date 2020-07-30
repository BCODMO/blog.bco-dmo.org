$(document).ready( function(){
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<li><table class="table is-fullwidth"><tr><td><a href="{{ site.url }}{url}">{title}</a></td><td>{date}</td><td>{category}</td><td>{authors}</td></tr></table></li>',
    json: '/search.json'
  });
  
  $('#search-button').click(function() {
    sjs.search( $('#search-input').val() );
  });
});
