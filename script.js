document.body.addEventListener('keydown',(val)=>{
    let key = val.key.toLowerCase();
    // let sound = key + ".wav";
    let newsound = new Audio(`${key}.wav`);
    newsound.currentTime = 0;
    newsound.play();


    let keyDiv = document.querySelector(`.key[data-key="${key}" `)
    if(!keyDiv) return ;

    keyDiv.classList.add("active")

    setTimeout(()=>{
    keyDiv.classList.remove("active");
    },150);


    console.log(val);
})

document.querySelectorAll(".key").forEach(keyDiv =>{
    keyDiv.addEventListener("click", ()=>{
        let letter = keyDiv.dataset.key;

        let sound =new Audio(`${letter}.wav`)
        sound.currentTime = 0;
        sound.play();
    })

    //  let newDiv = document.querySelector(`.key[data-key="${letter}" `)
    // if(!newDiv) return ;

    // newDiv.classList.add("active")

    // setTimeout(()=>{
    // newDiv.classList.remove("active");
    // },150);
})

