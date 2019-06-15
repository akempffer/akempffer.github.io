$('nav').tabslet({
  
    mouseevent: 'hover'
    
  });
  
  const greetings = ['Artistic', 'Eclectic', 'Sweet', 'Energetic', 'Inspired', 'Friendly'];
  console.log( greetings[4] );
  
  let max = 6;
  let randNum = Math.floor( Math.random() * max);
  console.log( randNum );
  
  $('h2').text( greetings[randNum ] );