// This function creates a Stamp object
function Stamp(){
    // Set the icon and name of the tool
    this.icon = "assets/Pokeball.png";
    this.name = "stamp";

    // Load the images for the stamps
    this.dialga = loadImage("./assets/Dialga.png");
    this.palkia = loadImage("./assets/Palkia.png");

    // The draw function is responsible for drawing the stamps on the canvas
    this.draw =function(){
        // Check if the mouse is pressed
        if(mouseIsPressed){
            // Get the size of the stamp from the slider
            var PkmnSize = this.PkmnSlider.value();
            // Calculate the position of the stamp
            var X= mouseX - PkmnSize/2;
            var Y= mouseY - PkmnSize/2;
            // Draw the selected stamp at the calculated position
            if (this.ItemChosen.selected()=='Dialga'){
              image(this.dialga, X, Y, PkmnSize, PkmnSize); 
            }
            else if (this.ItemChosen.selected()=='Palkia'){
              image(this.palkia, X, Y, PkmnSize, PkmnSize); 
            }
        }
    }

    // This function clears the HTML content of an element with id "SliderChange"
    this.unselectTool = function() {
        select("#SliderChange").html("");
    }

    // This function creates the options for the Stamp tool
    this.populateOptions = function() {
        // Create a div element for the size text and add it to the slider change element
        this.textProperty = createDiv('size: ');
        this.textProperty.parent("#SliderChange");
        // Create a slider for the size and add it to the slider change element
        this.PkmnSlider = createSlider(10,150,20);
        this.PkmnSlider.parent("#SliderChange");
        // Create a div element for the options text and add it to the slider change element
        this.Options = createDiv('options: ');
        this.Options.parent("#SliderChange");
        // Create a select element for the stamp options and add it to the slider change element
        this.ItemChosen = createSelect();
        this.ItemChosen.parent("#SliderChange");
        // Add the stamp options to the select element
        var stamps = ['Dialga','Palkia'];
        for (var i=0; i<stamps.length;i++)
            {
                this.ItemChosen.option(stamps[i]);
            }
    }
}
