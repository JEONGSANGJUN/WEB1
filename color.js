var body =
{
  setBackgroundColor : function (color)
  {
    $('body').css('backgroundColor', color);
    // document.querySelector('body').style.backgroundColor = color;
  },
  setColor : function(color)
  {
    $('body').css('color', color);
    // document.querySelector('body').style.color = color;
  }
}

var links =
{
  setColor : function(color)
  {
    $('a').css('color', color);
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i< alist.length)
    // {
    //     alist[i].style.color = color;
    //     console.log(alist[i]);
    //     i = i+1;
    // }
  }
}

function nightDayHandler(self)
{
  var target = document.querySelector('body');
  if(self.value == 'night')
  {
    body.setBackgroundColor('black');
    body.setColor('white');
    self.value = 'day';

    links.setColor('powderblue');
  }
  else
  {
    body.setBackgroundColor('white');
    body.setColor('black');
    self.value = 'night';

    links.setColor('blue');
  }
}
