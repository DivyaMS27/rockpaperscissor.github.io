const botchoiceview =document.getElementById("botchoice");
const playerchoiceview =document.getElementById("playerchoice");
const resultview =document.getElementById("result");
var botscore=document.getElementById("score1");
var playerscore=document.getElementById("score2");

let score1=1;
let score2=1;

const possibilitesview = document.querySelectorAll("button");

possibilitesview.forEach(possibilitesview => possibilitesview.addEventListener("click",(e)=>
{
    userchoice=e.target.id;
    playerchoiceview.innerHTML=userchoice;
    botchoicefun();
    resultfun();
}));
    
function botchoicefun()
{
    const randomnumber =Math.floor(Math.random()*3)+1;
    if(randomnumber === 1)
    {
        botchosen="ROCK";
    }
    if(randomnumber === 2)
    {
        botchosen="PAPER";
    }
    if(randomnumber === 3)
    {
        botchosen="SCISSOR";
    }
    botchoiceview.innerHTML=botchosen;
}

function resultfun()
{
    if( botchosen === userchoice)
    {
        result ="MATCH DRAWS!";
        botscore.innerHTML=score1.innerHTML="draw";
        playerscore.innerHTML=score2.innerHTML="draw";
    }
    if( botchosen === "ROCK" && userchoice === "PAPER")
    {
        result ="YOU WINS!";
        playerscore.innerHTML=score2;
        score2++;
    }
    if( botchosen === "PAPER" && userchoice === "SCISSOR")
    {
        result ="YOU WINS!";
        playerscore.innerHTML=score2;
        score2++;
    }
    if( botchosen === "SCISSOR" && userchoice === "ROCK")
    {
        result ="YOU WINS!";
        playerscore.innerHTML=score2;
        score2++;
    }


    if( botchosen === "ROCK" && userchoice === "SCISSOR")
    {
        result ="BOT WINS!";
        botscore.innerHTML=score1;
        score1++;
    }
    if( botchosen === "PAPER" && userchoice === "ROCK")
    {
        result ="BOT WINS!";
        botscore.innerHTML=score1;
        score1++;
    }
    if( botchosen === "SCISSOR" && userchoice === "PAPER")
    {
        result ="BOT WINS!";
        botscore.innerHTML=score1;
        score1++;
    }
    resultview.innerHTML=result;
}

