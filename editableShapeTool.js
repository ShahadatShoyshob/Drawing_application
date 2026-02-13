// This code defines a JavaScript object constructor function named EditableShapeButton
function EditableShapeButton(){
    // Set the name and icon of the tool
    this.name = "EditableShape";
    this.icon = "assets/Editable_shape.png";

    // Initialize variables
    var editMode = false; // Flag to check if the shape is in edit mode
    var currentShape = []; // Array to store the vertices of the shape
    
    noFill();
    loadPixels();

    var c= document.getElementById("defaultCanvas0");  

    // The draw function is responsible for drawing the shape on the canvas
    this.draw = function(){
        updatePixels();
        // Check if the mouse is pressed on the canvas
        if (this.mousePressOnCanvas(c) && mouseIsPressed){
            // If not in edit mode, add a new vertex to the shape at the mouse position
            if (!editMode){
                currentShape.push({
                    x: mouseX,
                    y: mouseY
                })
            }
            // If in edit mode, move the nearest vertex to the mouse position
            else{
                for (var i=0; i<currentShape.length;i++){
                    if (dist(currentShape[i].x, currentShape[i].y,mouseX,mouseY) < 15){
                        currentShape[i].x = mouseX;
                        currentShape[i].y = mouseY;
                    }
                }
            }
        }
        // Draw the shape
        beginShape();
        for (var i=0; i<currentShape.length; i++){
            vertex(currentShape[i].x,currentShape[i].y);
            // If in edit mode, draw a circle at each vertex
            if (editMode){
                fill("magenta");
                ellipse(currentShape[i].x,currentShape[i].y,10);
                noFill();
            }
        }
        endShape();
    }

    // This function checks if the mouse is pressed on the canvas
    this.mousePressOnCanvas = function(canvas) {
        if (mouseX > canvas.offsetLeft && mouseX < (canvas.offsetLeft + canvas.width) && mouseY > canvas.offsetTop && mouseY < (canvas.offsetTop + canvas.height - 40)){
            return true;
        }
        return false;
    }

    // This function clears the HTML content of an element with id "SliderChange"
    this.unselectTool = function() {
		select("#SliderChange").html("");
	};

    // This function creates buttons for editing and finishing the shape, and sets up their functionality
    this.populateOptions = function() {
        var self =this;
        this.editButton = createButton ('Edit Shape');
        this.editButton.parent("#SliderChange");
        this.finishButton = createButton ('Finish Button');
        this.finishButton.parent("#SliderChange");
        // When the finish button is pressed, exit edit mode and clear the shape
        this.finishButton.mousePressed(function(){
            editMode = false;
            self.editButton.elt.innerText = "Edit Shape";
            loadPixels();
            currentShape = [];
        })
        // When the edit button is pressed, toggle edit mode
        this.editButton.mousePressed(function(){
            if(editMode){
                editMode = false;
                self.editButton.elt.innerText = "Edit Shape";
            }
            else{
                editMode = true;
                self.editButton.elt.innerText = "Add Vertices";
            }
        })
    }
}
