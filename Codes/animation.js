var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var xWater = 220;  // Initial Position of water from left
		var yWater = 300; //Initial Position of water from right
		var yWater_2 = 310;



			function animations()	// Animation function to perform desired Animation
			{
		
		id=window.requestAnimationFrame(animations);

		var i = 0
		if(xWater > 459 && xWater <480)	
		{
			
			ctx.fillStyle = "#4679D5";
			ctx.fillRect(xWater, 356, 10, 23 + i);
			i = i + 5;
			xWater = xWater + 1.5;
		}
		else if(xWater<800)
		{
			if(xWater> 420 && xWater < 810 && yWater>215)
			{
				ctx.fillStyle = "#4679D5";
				ctx.fillRect(420, yWater,6, -2);
				yWater = yWater - 0.2;
			}
			if(xWater>520 && xWater < 810 && yWater_2 > 250)
			{
				ctx.fillStyle = "#4679D5";
				ctx.fillRect(520, yWater_2 -10 ,6, -1);
				yWater_2 = yWater_2 - 0.1;
			ctx.fillStyle = "red";
			ctx.fillRect(485, 355, 10 , 1);
			ctx.font = "5px";
			ctx.fillStyle = "red" ;
			ctx.fillStyle = "red";
			ctx.fillRect(485, 382, 10 , 1);
			ctx.font = "5px";
			ctx.fillRect(490, 355, 1 , 27);
			ctx.font = "5px";
			ctx.fillStyle = "red";
			ctx.fillText("D b", 500, 370);


			}
			ctx.fillStyle = "#4679D5";
			ctx.fillRect(xWater, 301, 10, 124);
			
			for( i = 220; i<470; i = i + 20)
			for(var j = 301; j<425; j = j + 20)
			{
				ctx.fillStyle = "white";
				ctx.fillRect(i, j, 5,1);	// For white lines in Water
			}
			if(xWater > 460)
			{

			for(i = 480; i<810; i = i + 20)
			for(var j = 301; j<422; j = j + 20)
			{
				ctx.beginPath();

				ctx.arc(i, j + 3, 2, -0.5* Math.PI, -1.5* Math.PI);
				ctx.strokeStyle = "white";					// For arcs in water
				ctx.stroke();
			}

			}
			
			xWater = xWater + 1;

		}
		else {
			cancelAnimationFrame(id);	// Ends the Animation
		}


	}