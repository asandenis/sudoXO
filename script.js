var i=0;
var fin=0;
var xwins=0;
var owins=0;
var theme=0; // 0 e dark, 1 e light

function play(clicked_id) {
    clicks(clicked_id);
    playCell(clicked_id);
    checkWin(clicked_id);
    counter();
}

function clicks(clicked_id) {
    const pid="p"+clicked_id;
    var ptext = document.getElementById(pid).innerHTML;
    if(fin != 1){
        if(ptext != 'X' && ptext != 'O'){
            i=i+1;
        }
    }
}

function playCell(clicked_id) {
    const pid="p"+clicked_id;
    var ptext = document.getElementById(pid).innerHTML;
    if(ptext != 'X' && ptext != 'O'){
        if(fin != 1){
            if(i%2===0){
                const p = document.getElementById(pid);
                p.textContent = 'O';
            }
            else{
                const p = document.getElementById(pid);
                p.textContent = 'X'; 
            }
        }
    } 
}

function checkWin(clicked_id) {
    const pid0="pcell-0";
    var ptext0 = document.getElementById(pid0).innerHTML;
    const pid1="pcell-1";
    var ptext1 = document.getElementById(pid1).innerHTML;
    const pid2="pcell-2";
    var ptext2 = document.getElementById(pid2).innerHTML;
    const pid3="pcell-3";
    var ptext3 = document.getElementById(pid3).innerHTML;
    const pid4="pcell-4";
    var ptext4 = document.getElementById(pid4).innerHTML;
    const pid5="pcell-5";
    var ptext5 = document.getElementById(pid5).innerHTML;
    const pid6="pcell-6";
    var ptext6 = document.getElementById(pid6).innerHTML;
    const pid7="pcell-7";
    var ptext7 = document.getElementById(pid7).innerHTML;
    const pid8="pcell-8";
    var ptext8 = document.getElementById(pid8).innerHTML;
    if(fin!=1){
        // check pe linii
            // linia 1
                // check for X win
        if(ptext0 === 'X' && ptext1 === 'X' && ptext2 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext0 === 'O' && ptext1 === 'O' && ptext2 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
            // linia 2
                // check for X win
        else if(ptext3 === 'X' && ptext4 === 'X' && ptext5 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext3 === 'O' && ptext4 === 'O' && ptext5 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
            // linia 3
                // check for X win
        else if(ptext6 === 'X' && ptext7 === 'X' && ptext8 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext6 === 'O' && ptext7 === 'O' && ptext8 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
        // check pe coloane
            // coloana 1
                // check for X win
        else if(ptext0 === 'X' && ptext3 === 'X' && ptext6 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext0 === 'O' && ptext3 === 'O' && ptext6 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
            // coloana 2
                // check for X win
        else if(ptext1 === 'X' && ptext4 === 'X' && ptext7 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext1 === 'O' && ptext4 === 'O' && ptext7 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
            // coloana 3
                // check for X win
        else if(ptext2 === 'X' && ptext5 === 'X' && ptext8 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext2 === 'O' && ptext5 === 'O' && ptext8 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
        // check pe diagonale
            // diagonala 1
                // check for X win
        else if(ptext0 === 'X' && ptext4 === 'X' && ptext8 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext0 === 'O' && ptext4 === 'O' && ptext8 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
            // diagonala 2
                // check for X win
        else if(ptext2 === 'X' && ptext4 === 'X' && ptext6 === 'X'){
            const result = document.getElementById('result');
            result.textContent = 'X won.';
            fin=1;
            xwins=xwins+1;
        }
                // check for O win
        else if(ptext2 === 'O' && ptext4 === 'O' && ptext6 === 'O'){
            const result = document.getElementById('result');
            result.textContent = 'O won.';
            fin=1;
            owins=owins+1;
        }
        // check for tie
        else if((ptext0 === 'X' || ptext0 === 'O') && (ptext1 === 'X' || ptext1 === 'O') && (ptext2 === 'X' || ptext2 === 'O') && (ptext3 === 'X' || ptext3 === 'O') && (ptext4 === 'X' || ptext4 === 'O') && (ptext5 === 'X' || ptext5 === 'O') && (ptext6 === 'X' || ptext6 === 'O') && (ptext7 === 'X' || ptext7 === 'O') && (ptext8 === 'X' || ptext8 === 'O')){
            const result = document.getElementById('result');
            result.textContent = 'Tie.';
            fin=1;
        }
    }
}

function reset() {
    const pcells = document.getElementsByClassName('pcell');
    for(let pcell of pcells){
        pcell.textContent = '';
    }
    i=0;
    fin=0;
    const result = document.getElementById('result');
    result.textContent = '';
}

function counter() {
    const winscount = document.getElementById('winscount');
    var count = 'X ' + xwins + ' : O ' + owins;
    winscount.textContent = count;
}

function changetheme() {
    if(theme === 0) { // se schimba in light
        document.getElementById('icon').src="images/lightmode.png";
        theme=1;
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        document.getElementById('ptheme').style.backgroundColor = '#4CAF50';
    }
    else if(theme === 1) { // se schimba in dark
        document.getElementById('icon').src="images/darkmode.png";
        theme=0;
        document.body.style.backgroundColor = '#000000';
        document.body.style.color = '#ffffff';
        document.getElementById('ptheme').style.backgroundColor = '#000000';
    }
}

// de facut poate a terminal version
    // $sudo placeX poz+5 sau $sudo placeO poz a1
        //   a b c
        // 1 _|_|_
        // 2 _|_|_
        // 3  | |
    // maybe $sudo insert password for Player X/O everytime?
    // sa arate ca un terminal