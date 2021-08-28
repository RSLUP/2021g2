
let activeQuize;
let quizeName;
let list = $(".body-part .card");
for(let j=0; j<list.length; j++){
    list[j].onclick = function(){
        activeQuize = j;
        quizeName = $(".body-part .card-title")[j].innerHTML;
        console.log(quizeName);
    }
}

// when user click Quze Button
$(".body-part .card").on("click", function (){
    $(".quizes-wrapper").css("display", "flex");
    $(window).scrollTop(0);
    $("body").css("overflow", "hidden");
    $(".body-part, #quiz, .footer").css("pointer-events", "none");
});
// when user click close button in rules window or Exit button in Result window
$(".quizes-wrapper #quize-rules .btn-close, #quiz-result .exit-btn").on("click", function(){
    $("#quize-rules").css("display", "block");
    $(".quizes-wrapper #quiz-result").css("display", "none");
    $("body").css("overflow", "scroll");
    $(".quizes-wrapper").css("display", "none");
    $(".body-part, #quiz, .footer").css("pointer-events", "visible");
    totalPoint = 0;
    QuesCount = 0;
});

// when user click continue button in rules window
$(".quizes-wrapper #quize-rules .continue-btn").on("click", function(){
    $("#quize-rules").css("display", "none");
    $("#quize-question").css("display", "block");
    displayQuesion(0);
});

// present Times Questions pack
let simplePres = [
    {
        id: 1,
        Question: "01.Do you ______ chocolate milk?",
        answer: 1,
        options: [
            "like",
            "likes",
            "be like",
            "liking"
        ]
    },
    {
        id: 2,
        Question: "02.He ___ not want to go to the movies.",
        answer: 2,
        options: [
            "do",
            "does",
            "is",
            "be"
        ]
    },
    {
        id: 3,
        Question: "03.My parents ______ in a two-bedroom apartment.",
        answer: 1,
        options: [
            "live",
            "lives",
            "are live",
            "living"
        ]
    },
    {
        id: 4,
        Question: "04.You _____ so happy today!",
        answer: 2,
        options: [
            "looks",
            "seem",
            "be",
            "looking"
        ]
    },
    {
        id: 5,
        Question: "05.They're not here. They _________ right now.",
        answer: 3,
        options: [
            "go to school",
            "swim at the beach",
            "are on holiday",
            "jogging"
        ]
    },

];
let presntCont = [
    {
        id: 1,
        Question: "01. _____ they coming over for dinner?",
        answer: 2,
        options: [
            "Is",
            "Are",
            "Am",
            "Does"
        ]
    },
    {
        id: 2,
        Question: "02.I _____ my dinner right now.",
        answer: 3,
        options: [
            "eat",
            "eating",
            "am eating",
            "eats"
        ]
    },
    {
        id: 3,
        Question: "03.They are _____ a new shopping mall downtown.",
        answer: 1,
        options: [
            "opening",
            "opened",
            "was open",
            "open"
        ]
    },
    {
        id: 4,
        Question: "04.I _____ at the hair salon until September.",
        answer: 3,
        options: [
            "work",
            "be working",
            "am working",
            "works"
        ]
    },
    {
        id: 5,
        Question: "05.Why ________ playing football tomorrow?",
        answer: 3,
        options: [
            "he not is",
            "he isn't",
            "isn't he",
            "do he"
        ]
    },

];
let presntPerf = [
    {
        id: 1,
        Question: "01.We _____ never eaten Mexican food.",
        answer: 2,
        options: [
            "is",
            "have",
            "has",
            "are"
        ]
    },
    {
        id: 2,
        Question: "02.They___ gone to a rock concert.",
        answer: 3,
        options: [
            "'s",
            "'es",
            "'ve",
            "was"
        ]
    },
    {
        id: 3,
        Question: "03.Lindsay _____ not been to France.",
        answer: 1,
        options: [
            "has",
            "is",
            "have",
            "are"
        ]
    },
    {
        id: 4,
        Question: "04.Andrea has _____ her umbrella.",
        answer: 3,
        options: [
            "forget",
            "forgetting",
            "forgotten",
            "forgot"
        ]
    },
    {
        id: 5,
        Question: "05.The children ________ the lost puppy.",
        answer: 3,
        options: [
            "have find",
            "is finding",
            "have found",
            "are find"
        ]
    },

];
let presPerfCont = [
    {
        id: 1,
        Question: "01.It has _____ snowing a lot this week.",
        answer: 2,
        options: [
            "be",
            "been",
            "being",
            "seem"
        ]
    },
    {
        id: 2,
        Question: "02.Rick _____ been studying hard this semester.",
        answer: 1,
        options: [
            "'s",
            "s",
            "'ve",
            "were"
        ]
    },
    {
        id: 3,
        Question: "03.I'm tired because I _____ been working out.",
        answer: 3,
        options: [
            "'ve",
            "has",
            "have",
            "is"
        ]
    },
    {
        id: 4,
        Question: "04.We have been watching TV _____ we had dinner",
        answer: 2,
        options: [
            "for",
            "since",
            "by",
            "during"
        ]
    },
    {
        id: 5,
        Question: "Did you know he's been teaching German _____ fifteen years?",
        answer: 3,
        options: [
            "before",
            "since",
            "for",
            "by"
        ]
    },

];
// Past Times Questions pack
let simplePast = [
    {
        id: 1,
        Question: "simple Past",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let pastCont = [
    {
        id: 1,
        Question: "Past Continues",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let pastPerf = [
    {
        id: 1,
        Question: "past Perfect",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let pastPerfCont = [
    {
        id: 1,
        Question: "past perfect Continus",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
// Future Times Questions pack
let simpleFutu = [
    {
        id: 1,
        Question: "simple Future",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let futureCont = [
    {
        id: 1,
        Question: "Future Continues",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let futurPerf = [
    {
        id: 1,
        Question: "FuturPerfct",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];
let futurPerfCont = [
    {
        id: 1,
        Question: "future perfect Continues",
        answer: 1,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 2,
        Question: "dsfdfdfdsafdsafdsfds",
        answer: 4,
        options: [
            "Randsfdsfdsfry",
            "Randodsfdhrthtehemory",
            "Runrgregregremory",
            "Noregrgregregrse"
        ]
    },
    {
        id: 3,
        Question: "Whregergrgerg RAM",
        answer: 2,
        options: [
            "Randoregrgergmory",
            "Ranrewgreger Memory",
            "Runregregregregregory",
            "Nonregregrgse"
        ]
    },
    {
        id: 4,
        Question: "What is the full form of RAM",
        answer: 3,
        options: [
            "Random Access Memory",
            "Randomely Access Memory",
            "Run Acept Memory",
            "None of these"
        ]
    },
    {
        id: 5,
        Question: "Whregregegregregregof RAM",
        answer: 4,
        options: [
            "Ranregregregregemory",
            "Randoregregregregry",
            "Rregregregregregrry",
            "Noregregregregrge"
        ]
    },

];

let quizes =[simplePres,presntCont,presntPerf,presPerfCont
            ,simplePast,pastCont,pastPerf,pastPerfCont
            ,simpleFutu,futureCont,futurPerf,futurPerfCont];


let totalPoint = 0;
let QuesCount = 0;

// when user click next button in Question window
$(".quizes-wrapper #quize-question .next-btn").on("click", function(){
    QuesCount++;
    if(QuesCount < 5){
        displayQuesion(QuesCount);
        if(QuesCount == 4){
            $(".quizes-wrapper #quize-question .next-btn").html("Submit");
        }
    }else{
        $(".quizes-wrapper #quize-question").css("display", "none");
        $(".quizes-wrapper #quiz-result").css("display", "block");
        displayResult();
    }
    
});

function displayQuesion(n){
    // Before user select one of answer next button not display
    $(".quizes-wrapper #quize-question .next-btn").css("display", "none");
    
    $("#quize-question .quiz-title").html(`
        <h2>Question ${quizes[activeQuize][n].id} / 5</h2>
    `);
    $("#quize-question .quiz-body").html(`
    <div class="que-text">
        <span>${quizes[activeQuize][n].Question}</span>
    </div>
    <div class="option-list">
        <div class="li">
            <span>${quizes[activeQuize][n].options[0]}</span>
        </div>
        <div class="li">
            <span>${quizes[activeQuize][n].options[1]}</span>
        </div>
        <div class="li">
            <span>${quizes[activeQuize][n].options[2]}</span>
        </div>
        <div class="li" style="margin-bottom: 0;">
            <span>${quizes[activeQuize][n].options[3]}</span>
        </div>
    </div>`);
    getUserSelection(quizes[activeQuize][n].answer);
}

// This function is use to lisent user choise.and get nessosary reaction for that.
function getUserSelection(ans){
    let option = document.querySelectorAll("div.li");
    for(let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            $("#quize-question .option-list").css("pointer-events", "none");
            $(".quizes-wrapper #quize-question .next-btn").css("display", "block");
            option[ans-1].classList.add("right");
            option[ans-1].innerHTML += `<div class="icon tick"><i class="fas fa-check"></i></div>`;
            if((i+1) == ans){
                totalPoint++;
            }else{
                option[i].classList.add("wrong");
                option[i].innerHTML += `<div class="icon cross"><i class="fas fa-times"></i></div>`;
            }
        }
    }
};
// All Quizes type name Array

// All 5 type of Messages related to user scores 
let ResultMsg = [
    {
        // Massage for 0 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 1 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Oops!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 2 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Not Enough!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 3 correct answer
        imgSrc: "/images/QuizeLogo/notEnough.png",
        msg: "Not Enough!",
        subMsg: `You must work hard for `
    },
    {
        // Massage for 4 correct answer
        imgSrc: "/images/QuizeLogo/silver.jpg",
        msg: "Good!",
        subMsg: `You earned E-net Silver Badge for `
    },
    {
        // Massage for 5 correct answer
        imgSrc: "/images/QuizeLogo/golden.png",
        msg: "Congratulations!",
        subMsg: `You earned E-net Golden Trophy for `
    }
];

// inject all nessory question and answer in to result body of quize
function displayResult(){
    $("#quiz-result .result-body").html(`
        <div class="image">
            <img src="${ResultMsg[totalPoint].imgSrc}" alt="">
        </div>
        <h3>${ResultMsg[totalPoint].msg}</h3>
        <p>${ResultMsg[totalPoint].subMsg}${quizeName}</p>
        <p>Your Score</p>
        <span><h1><span style="color: rgb(6, 131, 6);">${totalPoint*10}</span> / 50</h1></span>
    `);
}

// when user clik Replay button end of the Quize 
function replayQuiz(){
    totalPoint = 0;
    QuesCount = 0;
    $(".quizes-wrapper #quize-question .next-btn").html("Next");
    $(".quizes-wrapper #quiz-result").css("display", "none");
    $("#quize-question").css("display", "block");
    displayQuesion(0);
}

