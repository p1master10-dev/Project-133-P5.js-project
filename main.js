function preload(){
}

function setup(){
     canvas = createCanvas(700,700);

     video = createCapture(VIDEO);
     video.hide();
     tint_colour = "";
}

function draw(){
     background(300,300);

     image(video , 230,230,240,230);
     tint(tint_colour);

     /*1*/
     circle(100,100,100,100);
     noStroke();
     fill(39, 245, 70);  

     rect(100,100,100,100);
     noStroke();
     fill(68, 162, 235);
     /*1*/

     /*1*/
     fill(56, 201, 78);  
     rect(150,150,100,100);
     noStroke();
     fill(68, 162, 235);
     /*1*/

     /*1*/
     fill(245, 184, 17);  
     rect(185,250,30,200);
     noStroke();
     fill(68, 162, 235);
     /*1*/



     /*2*/
     circle(600,100,100,100);
     noStroke();
     fill(39, 245, 70);  

     rect(500,100,100,100);
     noStroke();
     fill(68, 162, 235);
     /*2*/

     /*2*/
     fill(56, 201, 78);  
     rect(450,150,100,100);
     noStroke();
     fill(68, 162, 235);
     /*2*/

     /*2*/
     fill(245, 184, 17);  
     rect(483,250,30,200);
     noStroke();
     fill(68, 162, 235);
     /*2*/


     /*3*/
     circle(100,600,100,100);
     noStroke();
     fill(39, 245, 70);  

     rect(100,500,100,100);
     noStroke();
     fill(68, 162, 235);
     /*3*/

     /*3*/
     fill(56, 201, 78);  
     rect(150,450,100,100);
     noStroke();
     fill(68, 162, 235);
     /*3*/

     /*3*/
     fill(245, 184, 17);
     rect(250,483,200,30);
     noStroke();
     fill(68, 162, 235);
     /*3*/


     /*4*/
     circle(600,600,100,100);
     noStroke();
     fill(39, 245, 70);  

     rect(500,500,100,100);
     noStroke();
     fill(68, 162, 235);
     /*4*/

     /*4*/
     fill(56, 201, 78);  
     rect(450,450,100,100);
     noStroke();
     fill(68, 162, 235);
     /*4*/

     /*4*/
     fill(245, 184, 17);
     rect(250,183,200,30);
     noStroke();
     fill(68, 162, 235);
     /*4*/

     console.clear();
}

function take_snapshot() {
     save('meInFramephoto.jpeg');
}