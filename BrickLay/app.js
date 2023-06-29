const brickContainer = document.querySelector(".container");
const brick = document.querySelector(".place") 

function brickCreate(){
    let bricks = document.createElement('div');
    bricks.classList.add("place");
    brickContainer.appendChild(bricks);
}
function brickCreateCourse2(){
     let bricks = document.createElement('div');
   bricks.classList.add("course2");
    brickContainer.appendChild(bricks);

}

// const delayBrickLay = (delay, course1) =>{
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
           
//                   brickCreate();
//             resolve();
            

              
            
//         }, delay)
//     })
// }

// delayBrickLay(1000)
//     .then(() => delayBrickLay(1000))
//     .then(() => delayBrickLay(1000))
//     .then(() => delayBrickLay(1000))
//     .then(() => delayBrickLay(1000))
//     .then(() => delayBrickLay(1000))

    

setTimeout(function(){
    brickCreate();
    setTimeout(function(){
        brickCreate();
        setTimeout(function(){
            brickCreate();
            setTimeout(function(){
                brickCreate();
                setTimeout(function(){
                    brickCreateCourse2();
                    setTimeout(function(){
                        brickCreateCourse2();
                         }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000);


//  for (let i = 0; i < 5; i++) {
//      let bricks = document.createElement('div');
//     bricks.classList.add("place");
//      brickContainer.appendChild(bricks);
//  }
// for (let i = 0; i < 5; i++) {
//     setInterval(function(){
//     const newEl = document.createElement('div');
//     newEl.classList.add("place");
//     brickContainer.appendChild(newEl);
//     newEl.style.animationDelay = `${.5}s`}, 1000);

// }



// const interval = setInterval(function(){
//     delay+=.5;
//     brickPlace()
//     clearInterval(interval)
// }, 1000);

// updateImg()

// function updateImg(){
//     if(currentImg > imgsEl.length){
//         currentImg = 1;
//     } else if(currentImg < 1){
//         currentImg = imgsEl.length;
//     }

//    imageEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`;

//    timeout = setTimeout(()=>{
//     currentImg++
//     updateImg()
//    }, 3000)
// }











// let leftPx = newEl.style.left = "px"

// for (let index = 0; index < 3; index++) {
    
//     const newEl = document.createElement('div');
//     newEl.classList.add("place");
//     brickContainer.appendChild(newEl);
    
// }

// for (let i = 0; i <= 50; i += 10) {
//    console.log(i)
// }

//  setInterval(function (){
//         console.log();
// }, 1000)