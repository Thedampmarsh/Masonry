// Block Calculator
const block_result = document.querySelector(".block-result");
const width = document.getElementById("width");
const height = document.getElementById("height");
const masonryBtn = document.querySelector('.block-btn');

masonryBtn.addEventListener("click", () => {totalAmountOfBlocks()});


document.addEventListener("keypress",(e)=>{
    if(e.key === "enter")
    totalAmountOfBlocks()
    console.log(totalAmountOfBlocks())
});

function totalAmountOfBlocks(){
    let amountPerCourse = parseInt(width.value * 12) / 16;  //Amount of block per course
    let howManyCourses = parseInt(height.value * 12) / 8;   //Amount of courses
    let total = amountPerCourse * howManyCourses;
    console.log(amountPerCourse, howManyCourses)
    block_result.innerText = `${amountPerCourse} Blocks per course, and ${total} in total.`
};

// Calculate circumference of circle
const radius = document.getElementById("radius");
const diameter = document.getElementById("diameter");
const circumferenceBtn = document.querySelector(".circumference-btn");
const circumference_result = document.querySelector(".circumference-result");

circumferenceBtn.addEventListener('click', ()=>{
    if(diameter.input){
    let res = parseInt((2 * radius) * 3.14159265);
        circumference_result.innerText = `Total circumference is ${res}`;
    }else(radius.input)
        let res1 = parseInt(diameter * 3.14159265);
            circumference_result.innerText = `Total circumference is ${res1}`;
    
    });
