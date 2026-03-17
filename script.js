function addtodisplay(value){
    document.getElementById('display').value += value;
}
function cleardisplay(){
    document.getElementById('display').value = "";
}
function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (err) {
        document.getElementById('display').value = "Error";
    }
}
function backspace() {
    let current = document.getElementById('display').value;
    document.getElementById('display').value = current.slice(0, -1);
}
document.addEventListener('keydown', function(event){
    const key= event.key;
    const display= document.getElementById('display');
    if(!isNaN(key) || ['+','-','*','/','.'].includes(key)) {
        addtodisplay(key);
    }else if (key === 'Enter') {
        calculate();
    } 
    else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        cleardisplay();
    }
})