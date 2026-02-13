// This function creates a paint brush tool
function paintBrush(){
    // Set the icon and name of the tool
    this.icon = "assets/Paintbrush_icon.png";
    this.name = "paintBrush";

    // Initialize the previous mouse positions and lastX, lastY variables
    var previousMouseX = -1;
    var previousMouseY = -1;
    var lastX, lastY;

    // The draw function is responsible for drawing the brush strokes on the canvas
    this.draw = function(){
        // Set the stroke weight based on the value of the stroke size slider
        strokeWeight(this.strokeSizeSlider.value());   
        // Get the selected color and set its alpha value based on the value of the opacity slider
        var c = colourP.selectedColour;
        var alp = this.opacitySlider.value();
        let c1 = color(c);
        c1._array[3] = alp/255;
        stroke(c1);
        // Check if the mouse is pressed
        if(mouseIsPressed){
            // If it's the start of the brush stroke, set the start position to the current mouse position
            if (previousMouseX == -1){
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
            // If it's not the start of the brush stroke, draw a line from the previous mouse position to the current mouse position
            else{
                // Depending on the selected brush type, draw the brush stroke differently
                if(this.selectionToolForOptions.selected()=='Type 1'){
                    // Brush Type 1: Draw a simple line
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                }
                else if(this.selectionToolForOptions.selected()=='Type 2'){
                    // Brush Type 2: Draw a bezier curve for a smoother brush stroke
                    for (var i = 0; i< this.strokeSizeSlider.value(); i++) {
                        var thisX= mouseX + random(-i, i); 
                        var thisY= mouseY + random(-i, i); 
                        noStroke();
                        fill(c1);
                        beginShape();
                        vertex(mouseX, mouseY);
                        bezierVertex(lastX, lastY, thisX, thisY, thisX, thisY);
                        bezierVertex(mouseX, mouseY, mouseX, mouseY, mouseX, mouseY);
                        lastX = thisX;
                        lastY = thisY;
                        endShape();
                    }
                }
                else if(this.selectionToolForOptions.selected()=='Type 3'){
                    // Brush Type 3: Draw a colorful line with changing hues
                    colorMode(HSB);
                    noStroke();
                    stroke((5*frameCount) % 360, 40, 100);
                    fill((5*frameCount) % 360, 100, 100);
                    strokeWeight(20);
                    line(previousMouseX, previousMouseY, mouseX, mouseY);
                }
                // Update the previous mouse position to the current mouse position
                previousMouseX = mouseX;
                previousMouseY = mouseY;
            }
        }
        // If the mouse is not pressed, reset the previous mouse positions
        else{
            previousMouseX = -1;
            previousMouseY = -1;
        }
    };

    // This function clears the HTML content of an element with id "SliderChange"
    this.unselectTool = function() {
        select("#SliderChange").html("");
    }

    // This function creates the options for the paint brush tool
    this.populateOptions = function() {
        // Create a div element for the stroke size text and add it to the slider change element
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#SliderChange");
        // Create a slider for the stroke size and add it to the slider change element
        this.strokeSizeSlider = createSlider(1,30,10);
        this.strokeSizeSlider.parent("#SliderChange");
        // Create a div element for the opacity text and add it to the slider change element
        this.opacityText = createDiv('Opacity: ');
        this.opacityText.parent("#SliderChange");
        // Create a slider for the opacity and add it to the slider change element
        this.opacitySlider = createSlider(0,255,50);
        this.opacitySlider.parent("#SliderChange");
        // Create a div element for the shape options text and add it to the slider change element
        this.optionTextProperty = createDiv('Shape options: ');
        this.optionTextProperty.parent("#SliderChange");
        // Create a select element for the brush types and add it to the slider change element
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#SliderChange");
        // Add the brush types to the select element
        var shapes = ['Type 1','Type 2','Type 3'];
        for (var i=0; i<shapes.length;i++)
            {
                this.selectionToolForOptions.option(shapes[i]);
            }
    }
}
