var angryphrases = [
  generateAngryPhrase1(),
  generateAngryPhrase2(),
  generateAngryPhrase3()
];

var happyphrases = [
  generateHappyPhrase1(),
  generateHappyPhrase2(),
  generateHappyPhrase3(),
  generateHappyPhrase4()
];



function generateAngryGreeting() {
  var intro = [
    "Oh... hi",
    "Oh it's you",
    "Can I help you?",
  ];

  var angry_greeting = "";
  angry_greeting = sample(intro);

  return angry_greeting;
}


function generateHappyGreeting() {

  var intro = [
    "Hi there!",
    "Hey hun!",
    "Well hello!",
    "Glad to see you!",
  ];

  var happy_greeting = "";
  happy_greeting = sample(intro);

  $(".greeting").css("font-weight", "900");
  $(".greeting").css("font-style", "italic");

  return happy_greeting;
}



function generateAngryPhrase1() {
  var verb = [
    "realize",
    "learn",
    "see",
    "show",
    "remember",
  ];

  var phrase = [
    "you appreciate and rely on me",
    "that you are not the center of the universe",
    "you mistreat me",
    "I have feelings, you know"
  ];

  var angry_phrase1 = "";
  angry_phrase1 = "You need to " + sample(verb) + " that " + sample(phrase) +
    ". ";


  return angry_phrase1;
}


function generateAngryPhrase2() {
  var place = [
    "place",
    "planet",
    "city",
    "earth",
    "life",
    "world"
  ];


  var angry_phrase2 = "";
  angry_phrase2 = "I wish you would just leave this " + sample(place) +
    ". ";


  return angry_phrase2;
}

function generateAngryPhrase3() {
  var frequency = [
    "only",
    "sometimes",
    "really",
    "always",
    "often",
    "also"
  ];

  var ability = [
    "think",
    "write",
    "make anything",
    "read",
    "spell",
    "run",
    "walk",
    "grow",
    "hear",
    "eat",
    "talk"
  ];

  var angry_phrase3 = "";
  angry_phrase3 = "Honestly I " + sample(frequency) +
    " wish you would lose your ability to " + sample(ability) +
    ". It would do the world a favor. ";

  return angry_phrase3;
}


function generateHappyPhrase1() {
  var verb = [
    "using",
    "reading",
    "looking at",
    "playing with",
    "watching",
    "keeping",
    "needing",
    "missing",
    "being with",
  ];


  var happy_phrase1 = "";
  happy_phrase1 = "Thank you so much for " + sample(verb) + " me. ";


  return happy_phrase1;
}

function generateHappyPhrase2() {
  var verb = [
    "pay attention to me",
    "give me attention",
    "watch me",
    "like me",
    "read me",
  ];

  var happy_phrase2 = "";
  happy_phrase2 = "I adore you because you " + sample(verb) + ". ";


  return happy_phrase2;
}

function generateHappyPhrase3() {

  var phrase = [
    "good",
    "great",
    "kind",
    "important",
    "different"
  ];

  var happy_phrase3 = "";
  happy_phrase3 = "Thank you for being so " + sample(phrase) +
    ". ";

  return happy_phrase3;
}

function generateHappyPhrase4() {

  var phrase = [
    "here",
    "reading me",
    "all the time",
    "and your face here",
    "enjoying my content"
  ];

  var happy_phrase3 = "";
  happy_phrase3 = "I love seeing you " + sample(phrase) +
    ". ";

  return happy_phrase3;
}



function sample(a) {
  return a[Math.floor(Math.random() * a.length)];
}


var phraseNumber = 1;

var lock_to_bottom = setInterval(move, 1000);
var repeat_phrase = setInterval(add_phrase, 2000);
changeGreeting();
var newAngryPhrase;
var newHappyPhrase;


function add_phrase() {
  phraseNumber++;

  newAngryPhrase = "<span class='text" + phraseNumber + "'>" +
    "<span class='rant" + phraseNumber + "'>" + sample(angryphrases) +
    "</span>" + "</span>";

  newHappyPhrase = "<span class='text" + phraseNumber + "'>" +
    "<span class='rant" + phraseNumber + "'>" + sample(happyphrases) +
    "</span>" + "</span>";



  if (secondsInactive <= 5) {
    $(".rant").append(newHappyPhrase);
    $(".greeting").html(generateHappyGreeting());
  }

  if (secondsInactive >= 5) {
    $(".rant").append(newAngryPhrase);
    $(".greeting").html(generateAngryGreeting());
  }

}

function changeGreeting() {

  if (secondsInactive <= 5) {
    $(".greeting").html(generateHappyGreeting());
  }

  if (secondsInactive >= 5) {
    $(".greeting").html(generateAngryGreeting());
  }

}


// AUTO SCROLL TO BOTTOM
function move() {
  $("html,body").animate({
    scrollTop: $(document).height()
  }, 0);
}

// BREAK AUTO SCROLL AND SET BACK WHEN SCROLLED TO BOTTOM
$(window).scroll(function() {
  moodangry = false;
  clearInterval(lock_to_bottom);

  var window_height = $(window).height(),
    doc_height = $(document).height(),
    scroll_pos = $(window).scrollTop();

  if ((scroll_pos + window_height) >= (doc_height - 100)) {
    lock_to_bottom = setInterval(function() {
      move();
    }, 100);
  }
});



var fontWeight;
var fontSize = 12;


var secondsInactive = 0;
var lastInteraction = new Date().getTime();


$(".page-wrapper").mousemove(function(event) {
  secondsInactive = 0;
  var currTime = new Date().getTime();
  var timeSinceUsed = ((currTime - lastInteraction));
  lastInteraction = new Date().getTime();

});

var mouseInactive = setInterval(function() {
  changeLineHeight();
  changeFontSize();
  changeFontWeight();

  secondsInactive++;
}, 500);



function changeFontWeight() {

  if (secondsInactive < 2) {
    fontWeight = 100;
  }
  if (secondsInactive >= 2 && secondsInactive < 4) {
    fontWeight = 200;
  }
  if (secondsInactive >= 4 && secondsInactive < 6) {
    fontWeight = 300;
  }
  if (secondsInactive >= 6 && secondsInactive < 8) {
    fontWeight = 400;
  }
  if (secondsInactive >= 8 && secondsInactive < 10) {
    fontWeight = 500;
  }
  if (secondsInactive >= 10 && secondsInactive < 12) {
    fontWeight = 600;
    $(".rant" + phraseNumber).css("font-style", "italic");
  }
  if (secondsInactive >= 12 && secondsInactive < 14) {
    fontWeight = 700;
    $(".rant" + phraseNumber).css("font-style", "italic");
  }
  if (secondsInactive >= 14 && secondsInactive < 16) {
    fontWeight = 800;
    $(".rant" + phraseNumber).css("font-style", "italic");
  }
  if (secondsInactive >= 16) {
    fontWeight = 900;
    $(".rant" + phraseNumber).css("font-style", "italic");
    $(".rant" + phraseNumber).css("text-transform", "uppercase");
  }


  $(".rant" + phraseNumber).css("font-weight", fontWeight);
}

function changeLineHeight() {
  console.log(1);

  var lineHeight;

  if (secondsInactive < 5) {
    lineHeight = 5;
  }

  if (secondsInactive >= 5 && secondsInactive < 10) {
    lineHeight = 15;
  }

  if (secondsInactive >= 10 && secondsInactive < 15) {
    lineHeight = 12;
  }

  if (secondsInactive >= 5) {
    lineHeight = 10;
  }


  $(".text" + phraseNumber).css("line-height", lineHeight + "px");
}

function changeFontSize() {
  // FONT SIZE
  if (secondsInactive <= 0) {
    fontSize = 12;
  }
  if (secondsInactive <= 20) {
    fontSize = fontSize + 2;
  }
  if (fontSize > 45) {
    fontSize = 45;
  }

  $(".rant" + phraseNumber).css("font-size", fontSize);
}
