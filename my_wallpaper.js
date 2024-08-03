//your parameter variables go here!
var armY = 90
var monkeyandlogY = 100;
var mouth = 1
var colourmonkey = 129


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

   //Grid settings
   pWallpaper.grid_settings.cell_width  = 150;
   pWallpaper.grid_settings.cell_height = 150;
   pWallpaper.grid_settings.row_offset  = 0;
 }

 function wallpaper_background() {
  background(0,100,20); //light honeydew green colour
}


function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 //colours
let c1 = color( colourofape, 65, 65)
let c3 = color(0)
let c4 = color(255,255,255)
let c5 = color( 120, 90, 65)
let c6 = (255, 255, 255)


//wood

fill (c5);
var x = 0
rect (x + 0, monkeyandlogY + 0, 150,10)

rect (x + 3, monkeyandlogY + 7, 20,0)
rect (x + 20, monkeyandlogY + 3, 20,0)
rect (x + 60, monkeyandlogY + 3, 20,0)
rect (x + 90, monkeyandlogY + 6, 20,0)
rect (x + 120, monkeyandlogY + 4, 20,0)
rect (x + 40, monkeyandlogY + 6, 20,0)

var x = 40;
var y = 0;
fill (c5);

rect (x + 0, y + 0, 10,150)

rect (x + 3, y + 4, 0,20)
rect (x + 6, y + 30, 0,20)
rect (x + 4, y + 60, 0,20)
rect (x + 7, y + 90, 0,20)
rect (x + 3, y + 100, 0,20)
rect (x + 6, y + 125, 0,20)


if (monkeyandlogY <= 60){

  
  
  //monke hanging
  var x = -25;
  var y = monkeyandlogY - 70;

  fill (c1);
  rect (x + 140,y + 70,15, 30,);

  fill (c1);
  rect (x + 100,y + 100,55, 30,0,0,10,0);

  fill (c1);
  rect (x + 117.5,y + 85,20,10,);

  fill (c2);
  rect (x + 112.5,y + 95,30,10);

  fill (c1);
  rect (x + 85,y + 100,15,30,10,0,3,5);

  fill (c1);
  rect (x + 130,y + 130,15, 25);

  fill (c1);
  rect (x + 110,y + 130,15,25);

  fill (c2);
  rect (x + 110,y + 110,35,20,)

  fill (c4);
  rect (x + 120.5,y + 87,5,8)

  fill (c4);
  rect (x + 129,y + 87,5,8)

  fill (c3);
  rect (x + 122.5,y + 89,3,6)

  fill (c3);
  rect (x + 131,y + 89,3,6)

  fill (c3);
  rect (x + 126,y + 123,3,3,10)

  fill (c6);
  rect (x + 117.5,y + 100,20,mouth);
}

if (monkeyandlogY > 60 && monkeyandlogY < 100){

//monke sitting
var x = -25;
var y = monkeyandlogY - 130;


fill (c1);
rect (x + 155,y + armY,15, 30,0,10,0,0);

fill (c1);
 rect (x + 85,y + armY,15,30,10,0,0,0);


fill (c1);
rect (x + 100,y + 100,55, 30,);

fill (c1)
rect (x + 117.5,y + 85,20,10);

fill (c2);
rect (x + 112.5,y + 95,30,10);

  fill (c2);
  rect (x + 110,y + 110,35,20,10)

  fill (c4);
  rect (x + 120.5,y + 87,5,8)

  fill (c4);
  rect (x + 129,y + 87,5,8,)

  fill (c3);
  rect (x +  129,y + 89,3,6)

  fill (c3);
  rect (x + 120.5,y + 89,3,6)

  fill (c3);
  rect (x + 126,y + 123,3,3,10,)

  fill (c6);
  rect (x + 117.5,y + 100,20,mouth);

  fill (c1);
rect (x + 130,y + 125,15, 30,10,10,0);

fill (c1);
rect (x + 110,y + 125,15,30,10,10,0);
}

if (monkeyandlogY >= 100){
  
  //monke grabbing 
  var x = -25;
  var y = monkeyandlogY -280 ;

fill (c1)
 rect (x + 85,y + 200,20,10,);

 fill (c2);
 rect (x + 80,y + 210,25,10,);

 fill (c1);
 rect (x + 75,y + 220,45, 30,0,10,10,0);

 fill (c4);
 rect (x + 85,y + 200,6,8)

 fill (c3);
 rect (x + 85,y + 200,3,6)

 fill (c6);
 rect (x + 80,y + 215,10,mouth)
 
 fill (c2);
 rect (x + 75,y + 230,20,15,0,10,10,0)

 fill (c1);
 rect (x + 60,y + 220,35, 15,10);

 fill (c1);
 rect (x + 60,y + 240,35, 15,10);
}
}