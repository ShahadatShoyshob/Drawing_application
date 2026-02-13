// This function creates a ShapeTool object
function ShapeTool(){
    // Set the icon and name of the tool
    this.icon = "assets/Shapes_image.png";
    this.name = "Shape";

    // Initialize the start mouse positions and drawing flag
    var startMouseX = -1;
    var startMouseY = -1;
    var drawing = false;

    // The draw function is responsible for drawing the shapes on the canvas
    this.draw = function(){
        // Set the stroke weight based on the value of the stroke size slider
        strokeWeight(this.strokeSizeSlider.value());
        // Set the fill color based on the selected fill type
        if (this.selectionToolForFill.selected()=='NoFill'){
            noFill();
        }
        else{
            var c = colourP.selectedColour;
            fill(c);
        }
        // Check if the mouse is pressed
        if(mouseIsPressed){
            // If it's the start of drawing a new shape
            if(startMouseX == -1){
                startMouseX = mouseX;
                startMouseY = mouseY;
                drawing = true;
                // Save the current pixel Array
                loadPixels();
            }
            // If it's not the start of the shape, draw the shape
            else{
                // Update the screen with the saved pixels to hide any previous shape
                updatePixels();
                // Draw the shape based on the selected shape type
                if(this.selectionToolForOptions.selected()=='rect'){
                    rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
                }
                else if(this.selectionToolForOptions.selected()=='ellipse'){
                    ellipse(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
                }
                else if(this.selectionToolForOptions.selected()=='circle'){
                    ellipse(startMouseX, startMouseY, mouseX-startMouseX);
                }
            }
        }
        // If the mouse is not pressed, reset the drawing flag and start mouse positions
        else if(drawing){
            loadPixels();
            drawing = false;
            startMouseX = -1;
            startMouseY = -1;
        }
    };

    // This function clears the HTML content of an element with id "SliderChange"
    this.unselectTool = function() {
        select("#SliderChange").html("");
    }

    // This function creates the options for the ShapeTool
    this.populateOptions = function() {
        // Create a div element for the stroke size text and add it to the slider change element
        this.strokeSizeText = createDiv('Stroke size: ');
        this.strokeSizeText.parent("#SliderChange");
        // Create a slider for the stroke size and add it to the slider change element
        this.strokeSizeSlider = createSlider(1,20,1);
        this.strokeSizeSlider.parent("#SliderChange");
        // Create a div element for the shape options text and add it to the slider change element
        this.optionTextProperty = createDiv('Shape options: ');
        this.optionTextProperty.parent("#SliderChange");
        // Create a select element for the shape types and add it to the slider change element
        this.selectionToolForOptions = createSelect();
        this.selectionToolForOptions.parent("#SliderChange");
        // Add the shape types to the select element
        var shapes = ['rect','ellipse','circle'];
        for (var i=0; i<shapes.length;i++)
            {
                this.selectionToolForOptions.option(shapes[i]);
            }
        // Create a div element for the fill type text and add it to the slider change element
        this.fillTypeSelectionText = createDiv('Fill type: ');
        this.fillTypeSelectionText.parent('#SliderChange');
        // Create a select element for the fill types and add it to the slider change element
        this.selectionToolForFill = createSelect();
        this.selectionToolForFill.parent('#SliderChange');
        // Add the fill types to the select element
        var fillType = ['Fill', 'NoFill'];
        for (var i=0; i<fillType.length;i++){
            this.selectionToolForFill.option(fillType[i]);
        }
    }
}
