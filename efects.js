var i = 0
var txt = 'Transformamos\ntus ideas\nencodigo;'
var speed = 50;

function typeWriter() {
if(i < txt.lenght) {
    document.getElementById(demo).innerHTML += txt.charAt(i)
    i++;
    setTimeout(typewriter,speed);
    }
}
typeWriter();

#demo {
    white-space: pre-wrap;
}

