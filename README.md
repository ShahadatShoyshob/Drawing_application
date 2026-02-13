# Drawing App (p5.js) — University Coursework

A browser-based **drawing application** built with **p5.js** for my university coursework (Intro to Programming II).  
The app provides a toolbox of drawing tools, a colour palette, and helper buttons to **clear** the canvas or **save** your artwork.

---

## Features

### Core UI
- **Canvas** fills the main content area
- **Toolbox** (icons) to switch tools
- **Colour palette** to choose stroke / fill colours
- Buttons:
  - **Clear**: reset the canvas
  - **Save image**: export the current canvas as a JPG (`myPicture.jpg`)

### Drawing Tools
Implemented as modular tools in separate JavaScript files:

- **Freehand** — draw continuous lines by dragging
- **LineTo** — draw straight lines between two points
- **Spray Can** — spray‑paint style drawing
- **Mirror Draw** — mirrored drawing across a vertical axis
- **Stamp** — place image stamps (e.g., Pokéball / character stamps)
- **Text** — place text onto the canvas
- **Eraser** — erase by drawing with background colour
- **Shape Tool** — draw basic shapes
- **Editable Shape** — create shapes and edit/adjust them interactively
- **Paint Brush** — brush-like strokes with smoother drawing

---

## Tech Stack

- **JavaScript**
- **p5.js** (included locally in `lib/`)
- Runs entirely in the browser (no backend)

---

## Project Structure

```
Drawing_app/
├─ index.html
├─ style.css
├─ sketch.js                  # main p5 setup/draw loop
├─ toolbox.js                 # tool container + selection logic
├─ colourPalette.js           # colour UI component
├─ helperFunctions.js         # clear + save buttons
├─ freehandTool.js
├─ lineToTool.js
├─ sprayCanTool.js
├─ mirrorDrawTool.js
├─ stamp.js
├─ textTool.js
├─ eraser.js
├─ shapeTool.js
├─ editableShapeTool.js
├─ paintBrush.js
├─ assets/                    # icons + stamp images
└─ lib/                       # p5 libraries (p5.min.js, p5.dom.js)
```

---

## How to Run

### Option A (Recommended): VS Code Live Server
1. Open the `Drawing_app` folder in **VS Code**
2. Install the **Live Server** extension
3. Right‑click `index.html` → **Open with Live Server**

### Option B: Open directly in browser
You can also double‑click `index.html` to open it, but some browsers may restrict certain features when running from `file://`.

---

## How to Use

1. Pick a tool from the **toolbox**
2. Choose a colour from the **palette**
3. Draw on the canvas (tool behavior depends on the selected tool)
4. Use:
   - **Clear** to reset
   - **Save image** to export as JPG

---
Educational / coursework use.
