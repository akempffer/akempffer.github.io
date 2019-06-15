$('nav').tabslet({
  
    mouseevent: 'hover'
    
  });
  
  const greetings = ['Artistic', 'Eclectic', 'Sweet', 'Energetic', 'Inspired', 'Friendly'];
  console.log( greetings[4] );
  
  let max = 6;
  let randNum = Math.floor( Math.random() * max);
  console.log( randNum );
  
  $('h2').text( greetings[randNum ] );

  const player = new Plyr( '#player' , {
  
    controls : ['play', 'progress', 'fullscreen', 'current-time', 'volume', 'settings'],
    muted : false,  
  });

  $('#chocolat-image').Chocolat({
  
    enableZoom : false
    
  });
  
  let date = new Date();
  let currentYear = date.getFullYear();
  
  console.log( currentYear );
  console.log( date );
  
  $('footer p span').text( currentYear )