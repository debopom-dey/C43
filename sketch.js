var hr
var mn
var sc
function setup() {
  createCanvas(800,400);

   angleMode(DEGREES)
  
   
}

function draw() {
  background(0);  
  translate(200,200)
  rotate(-90)
  hr=hour()
  mn=minute()
  sc=second()
 
    scAngle=map(sc,0,60,0,360)
    hrAngle=map(hr,0,60,0,360)
    mnAngle=map(mn,0,60,0,360)
  push();
  rotate(scAngle)
  stroke("red")
  strokeWeight(3)
  line(0,0,100,0)
  pop()
  strokeWeight(6)
  noFill()
  stroke(255,0,0)
  arc(0,0,250,250,0,scAngle)

  push()
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,115,0)
  pop()

  strokeWeight(10)
  noFill()
  stroke(0,0,255)
  arc(0,0,370,370,0,hrAngle)

  push()
  rotate(mnAngle)
  stroke(122,255,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  strokeWeight(10)
  noFill()
  stroke(122,255,0)
  arc(0,0,300,300,0,mnAngle)
  drawSprites();
}