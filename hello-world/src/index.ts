type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

// using an intersection type

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => {},
    resize: () => {}
}