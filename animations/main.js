let text = document.getElementById("text");

function rand(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function circle(elem, j, f) {
    x = elem.lx + elem.r * Math.sin(f);
    y = elem.ly + elem.r * Math.cos(f);
    
    elem.style.left = x + "px";
    elem.style.top = y + "px";
	
}

let divs = []

for (let i = 0; i < 20; i++) {
    div = document.createElement('div');
    div.className = "text";
    div.id = "t" + i;
    div.innerText = "Я ЛЮБЛЮ ФИЗИКУ!";
    div.dir = rand(2)
    div.lx = 250+rand(document.body.clientWidth*0.5 )
    div.ly = rand(20)
    div.r = rand(300)
    document.body.append(div);
	let a = rand(20)+30
	div.style.fontSize = a+"px"
	div.style.width = a*(rand(5)+10)+"px";
	div.style.color = '#' + rand(100) + rand(100) + rand(100) 
    circle(div, 0, 0);
    divs.push(div);
}

let j = 0;
let f = 0;
let s = 2 * Math.PI / 180;
setInterval(() => {
    j++;
    f += s;
    for(let i = 0; i < 20; i++){
        circle(divs[i], j, f);
    }
}, );