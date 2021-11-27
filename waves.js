// Fourier Series
// Daniel Shiffman
// https://thecodingtrain.com/CodingChallenges/125-fourier-series.html
// https://youtu.be/Mm2eYfj0SgA
// https://editor.p5js.org/codingtrain/sketches/SJ02W1OgV


let time = 0;

let slider;

let wave = [];
let wave2 = [];

function setup(){
  createCanvas(600,700);
  slider = createSlider(1,20,3);
}

function draw(){
  background(0);
  translate(200, 200);
  sqaurewave();
  translate(0, 300);
  trianglewave();

  translate(-400, 150);
  fill(255);
  textSize(20);
  text('Numero armoniche: '+slider.value(), 10, 30);

  time+=0.03;
}


function sqaurewave(){
    stroke(255,100);
    line(-200,-75,400,-75);
    line(-200,75,400,75);
    
    let x=0;
    let y=0;


    for(let i=0;i<slider.value();i++){
        let prevx = x;
        let prevy = y;
        
        let n = i * 2 + 1;
        let radius = 75 * (4/(n*PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);

        stroke(255,100);
        noFill();
        ellipse(prevx,prevy,radius*2);
        
        fill(255);
        stroke(255);
        line(prevx,prevy,x,y);
        //ellipse(x,y,8);
    }
    wave.unshift(y);

    //translate(200, 0)
    line(x,y,200,wave[0])
    
    beginShape();
    noFill();
    for(let i=0; i < wave.length; i++){
        vertex(i+200,wave[i]);
    }
    endShape();

    if(wave.length>250){
        wave.pop();
      }
}

function trianglewave(){
    stroke(255,100);
    line(-200,-75,400,-75);
    line(-200,75,400,75);

    let x=0;
    let y=0;

    for(let i=0;i<slider.value();i++){
        let prevx = x;
        let prevy = y;
        let n=i+1;
        //let n = i * 2 + 1;
        let radius = 75 * (2/(n*PI));
        x += (pow(-1,n+1)) * radius * cos(n * time);
        y += (pow(-1,n+1)) * radius * sin(n * time);
        
        stroke(255,100);
        noFill();
        ellipse(prevx,prevy,radius*2);

        fill(255);
        stroke(255);
        line(prevx,prevy,x,y);
        //ellipse(x,y,8);        
    }
    wave2.unshift(y);

    translate(200, 0)
    line(x-200,y,0,wave2[0])
    
    beginShape();
    noFill();
    for(let i=0; i < wave2.length; i++){
        vertex(i,wave2[i]);
    }
    endShape();
}