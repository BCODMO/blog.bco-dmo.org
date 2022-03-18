$(document).ready( function(){
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    searchResultTemplate: '<tr><td><a href="{url}">{title}</a></td><td>{date}</td><td>{category}</td><td>{authors}</td></tr>',
    json: '/search.json'
  });
  
  $('#search-button').click(function() {
    sjs.search( $('#search-input').val() );
  });
});
