// This function creates an eraser tool
function createEraser() {
    // Define the eraser object
    var eraser = {
        // Set the icon and name of the tool
        icon: "assets/eraser.png",
        name: "eraser",
        // Initialize the previous mouse positions
        previousMouseX: -1,
        previousMouseY: -1,
        // The draw function is responsible for drawing the eraser strokes on the canvas
        draw: function() {
            // Set the stroke weight based on the value of the stroke size slider
            strokeWeight(this.strokeSizeSlider.value());
            // Check if the mouse is pressed
            if (mouseIsPressed) {
                // If it's the start of the eraser stroke
                if (this.previousMouseX === -1) {
                    // Set the start position of the eraser stroke to the current mouse position
                    this.previousMouseX = mouseX;
                    this.previousMouseY = mouseY;
                } else {
                    // Set the stroke color to white (the color of the eraser)
                    stroke("white");
                    // Draw a line from the previous mouse position to the current mouse position
                    line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
                    // Update the previous mouse position to the current mouse position
                    this.previousMouseX = mouseX;
                    this.previousMouseY = mouseY;
                }
            } else {
                // Reset the previous mouse positions when the mouse is not pressed
                this.previousMouseX = -1;
                this.previousMouseY = -1;
                // Reset the stroke color to the selected color when the mouse is not pressed
                stroke(colourP.selectedColour);
            }
        },
        // This function clears the HTML content of the slider change and eraser size display elements
        unselectTool: function() {
            select("#SliderChange").html("");
            select("#eraserSizeDisplay").html("");
        },
        // This function creates the options for the eraser tool
        populateOptions: function() {
            // Create a div element for the eraser size text and add it to the slider change element
            this.strokeSizeText = createDiv('Eraser size: ');
            this.strokeSizeText.parent("#SliderChange");
            // Create a slider for the eraser size and add it to the slider change element
            this.strokeSizeSlider = createSlider(1, 100, 10);
            this.strokeSizeSlider.parent("#SliderChange");
            // Add an input event to the eraser size slider
            this.strokeSizeSlider.input(() => { 
                // Update the size property of the eraser object when the slider value changes
                this.size = this.strokeSizeSlider.value(); 
                // Update the eraser size display text when the slider value changes
                let eraserSizeDisplay = select('#eraserSizeDisplay');
                if (eraserSizeDisplay) {
                    eraserSizeDisplay.html('Eraser size: ' + this.size);
                }
            });
        }
    };
    // Return the eraser object
    return eraser;
}
