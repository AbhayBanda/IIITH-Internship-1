var canvas1 = document.getElementById("I_O");
		var ctx1 = canvas1.getContext("2d");


		//Positioning of Input(String)
		ctx1.font = "20px Bold";
        ctx1.fillStyle = "Blue";
        var text = ctx1.measureText("Input");
        ctx1.fillText("Input", 200,30);
        ctx1.strokeStyle = "#000000";
        ctx1.strokeRect(200, 33, text.width,0.3);

        //Positioning if Output(String)
		ctx1.font = "20px Bold"
        ctx1.fillStyle = "Blue";
        var text2 = ctx1.measureText("Output");
        ctx1.fillText("Output", 700,30);
        ctx1.strokeStyle = "#000000";
        ctx1.strokeRect(700, 33, text2.width,0.3);
canvas1.style.position = "relative";
canvas1.style.top = "25px";
       
        