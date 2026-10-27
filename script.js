let nickname = prompt("Enter your nickname to play");
if (nickname)
{
    document.getElementById("nickname").textContent = nickname;
}
else
{
    document.getElementById("nickname").textContent = "Player";
}

let userScore = 0;
let aiScore = 0;

let displayscore1 = document.getElementById('displayscore1');
let displayscore2 = document.getElementById('displayscore2');
let displaypts1 = document.getElementById('displaypts1');
let displaypts2 = document.getElementById('displaypts2');
let btn = document.getElementById('btn');


const cards = 
[
{
    name: "6",
    bg:"url('6.jpg')",
    points: 6
},
{
    name: "7",
    bg:"url('7.jpg')",
    points: 7
},
{
    name: "8",
    bg:"url('8.jpg')",
    points: 8
},
{
    name: "9",
    bg:"url('9.jpg')",
    points: 9
},
{
    name: "10",
    bg:"url('10.jpg')",
    points: 10
},
{
    name: "jack",
    bg:"url('jack.jpg')",
    points: 2
},
{
    name: "queen",
    bg:"url('queen.jpg')",
    points: 3
},
{
    name: "king",
    bg:"url('king.jpg')",
    points: 4
},
{
    name: "ace",
    bg:"url('ace.jpg')",
    points: 11
}
]

btn.addEventListener('click', () =>
{
    displayscore1.innerHTML = '';
    displayscore2.innerHTML = '';
    displaypts1.innerHTML = '';
    displaypts2.innerHTML = '';

    let userPoints = Math.floor(Math.random()*cards.length);
    let aiPoints = Math.floor(Math.random()*cards.length);
    let userCard = cards[userPoints];
    let aiCard = cards[aiPoints];

    userScore +=userCard.points;
    aiScore += aiCard.points;

    displaypts1.style.backgroundImage = userCard.bg;
    displaypts2.style.backgroundImage = aiCard.bg;

    displaypts1.style.backgroundSize = "cover";
    displaypts1.style.backgroundPosition = "center";
    
    displaypts2.style.backgroundSize = "cover";
    displaypts2.style.backgroundPosition = "center";
    if (userPoints > aiPoints)
        {
            userCard+=1;
            displayscore1.innerHTML = userScore;
            displayscore2.innerHTML = aiScore;
        }
    else 
        {
            aiCard += 1;
            displayscore1.textContent = userScore;
            displayscore2.textContent = aiScore;
        };

    if (userScore >= 21)
        {
            alert('You have won!');
            userScore = 0;
            aiScore = 0;
        };
    if (aiScore >= 21)
        {
            alert('You have lost');
            userScore = 0;
            aiScore = 0;
        };
});
