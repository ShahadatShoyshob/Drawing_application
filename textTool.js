// This function creates a TextTool object
function TextTool(){
    // Set the icon and name of the tool
    this.icon = "assets/text.png";
    this.name = "Text";

    // The draw function is responsible for drawing the text on the canvas
    this.draw = function(){
        // Update the pixels on the canvas
        updatePixels();
        // Set the text alignment to center
        textAlign(CENTER);
        // Set the text size based on the value of the text size slider
        textSize(this.textSizeSlider.value());
        // Draw the text at the specified position on the canvas
        text(this.inputedText.value(),400,70);
    }

    // This function clears the HTML content of an element with id "SliderChange"
    this.unselectTool = function() {
        select("#SliderChange").html("");
    }

    // This function creates the options for the TextTool
    this.populateOptions = function() {
        // Create a div element for the text size text and add it to the slider change element
        this.textSizeText = createDiv('Text size: ');
        this.textSizeText.parent("#SliderChange");
        // Create a slider for the text size and add it to the slider change element
        this.textSizeSlider = createSlider(15,60,25);
        this.textSizeSlider.parent("#SliderChange");
        // Create a div element for the input text and add it to the slider change element
        this.textInputText = createDiv('Input your Text: ');
        this.textInputText.parent("#SliderChange");
        // Create an input field for the text and add it to the slider change element
        this.inputedText = createInput("");
        this.inputedText.parent("#SliderChange");
    }
}
