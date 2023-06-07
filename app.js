let r = document.getElementById('R');
let a = document.getElementById('A');
let c = document.getElementById('C');
let h = document.getElementById('H');
let i = document.getElementById('I');
let t = document.getElementById('T');

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    if(value > 960 && value < 1300){
        r.style.marginRight = (value-960) * 2.0 + 'px';
        r.style.marginTop = (value-960) * 1.8 + 'px';

        a.style.marginRight = (value-960) * 1.1 + 'px';
        a.style.marginTop = (value-960) * -1.1 + 'px';


        c.style.marginRight = (value-960) * 0.4 + 'px';
        c.style.marginTop = (value-960) * 1 + 'px';



        h.style.marginRight = (value-960) * -0.4 + 'px';
        h.style.marginTop = (value-960) * 0.4 + 'px';

        i.style.marginRight = (value-960) * -1.1 + 'px';
        i.style.marginTop = (value-960) * -1.1 + 'px';

        t.style.marginRight = (value-960) * -2.0 + 'px';
        t.style.marginTop = (value-960) * 1.8 + 'px';

    }
    let por = 340 * 1.8;
    let poa = 340 * -1.1;
    let poc = 340;
    let poh = 340 * 0.4;
    let poi = 340 * -1.1;
    let pot = 340 * 1.8;

    if(value > 1300 && value < 1950){
        r.style.marginTop = (por)+((value-1300) * 2.2) + 'px';
        a.style.marginTop = (poa)+((value-1300) * 3.748) + 'px';
        c.style.marginTop = (poc)+((value-1300) * 2.65) + 'px';
        h.style.marginTop = (poh)+((value-1300) * 2.95) + 'px';
        i.style.marginTop = (poi)+((value-1300) * 3.748) + 'px';
        t.style.marginTop = (pot)+((value-1300) * 2.2) + 'px';
    }
})