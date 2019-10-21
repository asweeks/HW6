

for (var i = 0; i < 200; i++) {
  var tree = {
    x: 50,
    y: 50,
    w: 200,
    h: 300,
  };
  trees.push(tree);

}

function setup() {
  createCanvas(400, 600);
  imageMode(CENTER);

}

function draw() {
  background(200);
  textSize(100);

  tree.y--
//   for (var i = 0; i < 200; i += 50) {

//     image(img, i, tree.y + i + 20, tree.w, tree.h);
//   }
//   for (var i = 200; i > 0; i -= 50) {

//     image(img, i, tree.y + i + 20, tree.w, tree.h);
//   }
// for(var l=0; l<trees.length/2; l++){
  for (var i = 20; i <= 200; i = i + 70) {
    image(img, i, i+tree.y+t, tree.w, tree.h);
  }

  for (var x = 20; x <= 200; x = x + 70) {
    
    image(img,x, height - x+tree.y+t, tree.w, tree.h);
    
  }
  
  // if(tree.y<500){
  //    t+=200; 
  // }
  

// }
  //     if(track>199){
  //       track=track -50;
  //      image(img,track,tree.y+(i*40), tree.w, tree.h); 
  //     }




  // for(var x=0;x<trees.length; x+=3){
  //     if(i<height/2){
  //      image(img,200+x*20,tree.y+(x*40), tree.w, tree.h);
  //     }
  //     if(i>=height/2){
  //      image(img,200+width-x*15,tree.y+(x*40), tree.w, tree.h); 
  //     }


}
