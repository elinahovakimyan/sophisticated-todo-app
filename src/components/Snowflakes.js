export const canvasFunction = () => {
    
    const rand = function(num) {

        return Math.floor(Math.random() * num) + 1;

    };

    const forEach = function(arr, func) {
        
        for(let i = 0; i < arr.length; i++) {
            
            func(arr[i]);
            
        };
        
    };

    const canvas = document.getElementById("winter");
    const c = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    const height = canvas.height = document.getElementsByTagName("body")[0].scrollHeight;


    const snowflakeImg = new Image();
    snowflakeImg.src = 'http://moziru.com/images/number-clipart-snowflake-3.png';

    let end = false;

    const snowflakes = [];

    for(let i = 0; i < 500; i++) {
        
        snowflakes.push({
        
        x: rand(window.innerWidth),
        y: -rand(500),
        ydelta: (rand(15) + 5)/5,
        xdelta: rand(3),
        size: rand(20) + 10
        
    });
        
    };

    for(let i = 0; i < snowflakes.length; i++) {

        setInterval(function() {
            if(snowflakes[i]) {
                snowflakes[i].xdelta = Math.sign(-1 * snowflakes[i].xdelta) * rand(3);
            } 
        },rand(500)+700);
        
    };

    console.log(snowflakes);

    const update = function(snowflake) {
        
        snowflake.x += snowflake.xdelta;
        
        snowflake.y += snowflake.ydelta;
        
        if(snowflake.y > height) {
            
            snowflakes.splice(snowflakes.indexOf(snowflake), 1);
            
            // console.log(snowflakes);
           
        };
        
        c.drawImage(snowflakeImg, snowflake.x, snowflake.y, snowflake.size, snowflake.size);
        
    };

    document.addEventListener("click", function() {

        canvas.style.display = "none";

    }, true);

    const gameLoop = function() {
        
        c.clearRect(0, 0, window.innerWidth, height);
        
        forEach(snowflakes, update);
        
        if(snowflakes.length === 0) {end = true;
        canvas.style.display = "none";};
                
        if(!end) {
            requestAnimationFrame(gameLoop);
        }
        
    };

    gameLoop();


}












