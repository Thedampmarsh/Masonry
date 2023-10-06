const brickContainer = document.querySelector(".container");

function brickCreate(left, top){
    let bricks = document.createElement('div');
    bricks.classList.add("place");
    bricks.style.left = `${left}px`;
    bricks.style.top = `${top}px`;
    brickContainer.appendChild(bricks);
}

(async () => {
    const DELAY_MILLIS = 200;

    let sleep = time => new Promise((resolve) => {
        setTimeout(() => resolve(), time)
    })

    let stagger = false;
    for (let top = 0; top > -500; top -= 50) {
        stagger = !stagger;
        for (let left = 0; left < 600; left += 100) {
            let staggered_left = stagger ? left : left - 50;
            console.log(`laying brick at left: ${staggered_left}, top: ${top}`)
            brickCreate(staggered_left, top)

            await sleep(DELAY_MILLIS)
        }
    }
})()
