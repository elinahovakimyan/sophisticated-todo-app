import React from "react";

class Snowflakes extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			snowflakes: [],
			end: false
		}
	}

	componentWillMount() {
		this.updateCanvas();
	}

	rand(num) {
		return Math.floor(Math.random() * num) + 1;
	};

	forEach(arr, func) {
	    
	    for(let i = 0; i < arr.length; i++) {
	        
	        func(arr[i]);
	        
	    };
	    
	};

	update(snowflake) {
		const snowflakes = this.state.snowflakes;
		    
	    snowflake.x += snowflake.xdelta;
	    
	    snowflake.y += snowflake.ydelta;
	    
	    if(snowflake.y > window.innerHeight + 40) {
	        
	        snowflakes.splice(snowflakes.indexOf(snowflake), 1);
	        
	        console.log(snowflakes);
	       
	    };
	    
	    c.drawImage(snowflakeImg, snowflake.x, snowflake.y, snowflake.size, snowflake.size);
	    
	};

	gameLoop() {

		const snowflakes = this.state.snowflakes;

	    c.clearRect(0, 0, window.innerWidth, window.innerHeight);
	    
	    this.forEach(snowflakes, this.update);
	    
	    if(snowflakes.length === 0) {
	    	this.setState({
	    		end: true,
	    	});
	    };
	    
	    //console.log("ha!");
	    
	    if(!this.state.end) {
	        requestAnimationFrame(gameLoop);
	    }
	    
	};

	updateCanvas() {

		const snowflakes = this.state.snowflakes;
		console.log(this.refs.canvas);
		const c = this.refs.canvas.getContext("2d");

		this.refs.canvas.width = window.innerWidth;
		this.refs.canvas.height = window.innerHeight;


		const snowflakeImg = new Image();
		snowflakeImg.src = "http://moziru.com/images/number-clipart-snowflake-3.png";

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
		        snowflakes[i].xdelta = Math.sign(- snowflakes[i].xdelta) * rand(3);
		    },rand(500)+700);
		    
		};

		//console.log(snowflakes);

		this.gameLoop();

	}
	
	

	render() {
		return(
			<canvas id="winter" ref="canvas"></canvas>
		)
	}

}

export default Snowflakes;







// document.addEventListener('mouseover', function(event) {
    
// 	for(let i = 0; i < 5; i++) {
            
//             event.target.x += 2;
//             event.target.y -= 2;
            
//         };
       
// }, false);

