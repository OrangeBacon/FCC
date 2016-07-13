const colours = ['blue','red','yellow','orange','green','purple'];
let i = 0;
$(document).ready(function(){
  $('#get').click(function(){
    $.get('https://api.github.com/zen','',function(data){
      i++
      if(i>=colours.length)i=0;
      $('#quote').html('“'+data+'”');
      $('body').css('background-color',colours[i]);
      $('#twitter').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent(data));
    });
  });
  $('#twitter').click(function(){
    let href = $('#twitter').attr('href');
    if(href)window.open($('#twitter').attr('href'))
  })
});