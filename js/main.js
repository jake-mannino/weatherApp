
let viewIndex = 0;
let symbols = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '<', '>'];
let symbolKeys = [];
var keySymbol = null;
function answers() {
    symbolKeys = [];
    keySymbol = symbols[Math.floor(Math.random() * 10 )];
    for (i = 0; i <= 99; i++) {
        if (i % 9 === 0) {
            symbolKeys.push('<li class="justify-content-center align-self-center">' + i + '  =  ' + keySymbol + '</li>');
        }
        else {
            symbolKeys.push('<li class="justify-content-center align-self-center">' + i + '  =  ' + symbols[Math.floor(Math.random() * 10)] + '</li>');
        }
    }
    return symbolKeys;
}

let views = [

    {
        title: "Page 1",
        li: "I can read your mind",
    },

    {
        title: "Page 2",
        li: "2",
    },

    {
        title: "Page 3",
        li: "3",
    },

    {
        title: "Page 4",
        li: "4",
    },

    {
        title: "Page 5",
        li: "5",






    },

    {
        title: "Page 6",
        li: "6",
    }
];
let go = document.getElementById("go-btn");

let next = document.getElementById("next-btn");

let back = document.getElementById("back-btn");

let rtrn = document.getElementById("return-btn");

let instructions = document.getElementById("instructions");

let mainText = document.getElementById("mainText");



go.addEventListener('click', function go() {

    viewIndex++
    statechange()
});

next.addEventListener('click', function next() {

    viewIndex++
    statechange()
});

rtrn.addEventListener('click', function rtrn() {

    viewIndex = 0
    statechange()

});

back.addEventListener('click', function back() {

    viewIndex--
    statechange()
});


function statechange() {
    console.log("");
    if (viewIndex == 0) {
        go.classList.remove("d-none");
        go.classList.add("d-block");
        next.classList.remove("d-block");
        next.classList.add("d-none");
        back.classList.remove("d-block");
        back.classList.add("d-none");
        rtrn.classList.remove("d-block");
        rtrn.classList.add("d-none");
        instructions.innerHTML = "I can read your mind";
        instructions.classList.remove("d-none");
        instructions.classList.add("d-block");
        mainText.classList.remove("d-block");
        mainText.classList.add("d-none");
        mainText.innerHTML = "";


    }
    else if (viewIndex == 1) {
        go.classList.remove("d-block");
        go.classList.add("d-none");
        next.classList.remove("d-none");
        next.classList.add("d-block");
        back.classList.remove("d-none");
        back.classList.add("d-block");
        rtrn.classList.remove("d-none");
        rtrn.classList.add("d-block");
        instructions.classList.remove("d-none");
        instructions.classList.add("d-block")
        instructions.innerHTML = "Pick any number from 1-99";
        mainText.classList.remove("d-none");
        mainText.classList.add("d-block");
        mainText.innerHTML = "";
    }
    else if (viewIndex == 2) {
        go.classList.remove("d-block");
        go.classList.add("d-none");
        next.classList.remove("d-none");
        next.classList.add("d-block");
        back.classList.remove("d-none");
        back.classList.add("d-block");
        rtrn.classList.remove("d-none");
        rtrn.classList.add("d-block");
        instructions.innerHTML = "Add both digits together to make a new number";
        mainText.innerHTML = "";
    }
    else if (viewIndex == 3) {
        go.classList.remove("d-block");
        go.classList.add("d-none");
        next.classList.remove("d-none");
        next.classList.add("d-block");
        back.classList.remove("d-none");
        back.classList.add("d-block");
        rtrn.classList.remove("d-none");
        rtrn.classList.add("d-block");
        instructions.innerHTML = "Subtract your new number from the original number"
        mainText.innerHTML = ""
    }
    else if (viewIndex == 4) {
        go.classList.remove("d-block");
        go.classList.add("d-none");
        next.classList.remove("d-none");
        next.classList.add("d-block");
        back.classList.remove("d-none");
        back.classList.add("d-block");
        rtrn.classList.remove("d-none");
        rtrn.classList.add("d-block");
        let s = answers (); // an array of <li>
        // 
        instructions.innerHTML = "<p>Reveal</p> <ul class='overflow-auto justify-content-center align-self-center' style='max-height :100px;'>" + s.join('') + '</ul>';
        mainText.innerHTML = "Find your number's symbol:";

    }
    else if (viewIndex == 5) {
        go.classList.remove("d-block");
        go.classList.add("d-none");
        next.classList.remove("d-block");
        next.classList.add("d-none");
        back.classList.remove("d-none");
        back.classList.add("d-block");
        rtrn.classList.remove("d-none");
        rtrn.classList.add("d-block");
        instructions.innerHTML = keySymbol;
        mainText.innerHTML = "Your symbol is: " + keySymbol;
    }
}


document.body.onload = statechange;


// 
// for (i > 0; i < 100; i )
// if x % 9 == 0, 
  // if else symbols.random(numbers)



// function back render() { currentView-- }

// function next render() { currentView++ })

// function reset render() { currentView }

// overflow - y
// hidden


// add class visible , 



// let states = [
// A
//     {button
//     li.innerthml.= [0]
//     }
// ]



// If currentView = views[0]


// ViewA

// ViewB

// ViewC

// ViewD
// ]
// document.getElementById("")
// document.getElementById("")
// Create Object =


// views [0-6]



// onclick (i++)

// mindreader ()

// for (i > 0; i < 100; i )

// if x % 9 == 0, 

// return 


// btn.onclick function()
// {}

// document.addEventListener. 

//id unique

// if current veiw is state[1]
        // next d-block 2-5
            // next d-none 1 and 6
        // go d-block 1
            // go d-none 2-6
        // // return d-block 2-6
        //         return d-none 1



// add class to Element

// or remove all instances from element

// add or remove d-block, d-none

//Document.getelementbyID("")
// .addclass



