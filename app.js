const image = document.querySelector('.img');
const vides = document.querySelectorAll('.vide');

image.addEventListener('dragstart', dragSart);
image.addEventListener('dragend', dragEnd);

for(const vide of vides) {
    vide.addEventListener('dragover', dragOver);
    vide.addEventListener('dragenter', dragEnter);
    vide.addEventListener('dragleave', dragLeave);
    vide.addEventListener('drop', dragDrop);
}

function dragSart() {
    this.classList.add('hold');
    requestAnimationFrame(() => (this.classList.add('invisible')));
}
function dragEnd() {
    this.classList.remove('hold', 'invisible');
}
function dragOver(e) {
    e.preventDefault();
}
function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
}
function dragLeave() {
    this.classList.remove('hovered');
}
function dragDrop() {
    this.classList.remove('hovered');
    this.append(image);
}