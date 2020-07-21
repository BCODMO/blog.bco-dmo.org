$(document).ready(function () {
  $('#blog-subnav a').on('click', function (event) {
    window.location = $(this).attr('href');
  });
});
