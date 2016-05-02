$(".text").click(function() {
  $(".rant").append(sample(angryphrases));

});

var angryphrases = [
  generateAngryPhrase1(),
  generateAngryPhrase2(),
  generateAngryPhrase3()
];

$(".greeting").html(generateHappyGreeting());
$(".greeting").html(generateAngryGreeting());



function generateAngryGreeting() {

  var intro = [
    "Oh...hi.",
    "Oh, its you…",
    "Umm, can I help you?",
  ];

  var angry_greeting = "";
  angry_greeting = sample(intro);

  $(".greeting").css("font-weight", "900");
  $(".greeting").css("font-style", "italic");
  $(".greeting").css("text-transform", "uppercase");
  return angry_greeting;
}


function generateHappyGreeting() {

  var intro = [
    "Hi there!",
    "Hey hun!",
    "Well hello!",
    "Happy to see you!",
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
    "you understand that you are not the center of the universe",
    "you mistreat me",
    "I have feelings, you know"
  ];

  var angry_phrase1 = "";
  angry_phrase1 = "You need to " + sample(verb) + " that " + sample(phrase) +
    ". ";

  $(".rant").css("font-weight", "900");
  $(".rant").css("font-style", "italic");
  $(".rant").css("line-height", "25px");

  return angry_phrase1;
}


function generateAngryPhrase2() {
  var place = [
    "place",
    "planet",
    "city",
    "earth",
    "life",
    "land",
    "world"
  ];


  var angry_phrase2 = "";
  angry_phrase2 = "I wish you would just leave this " + sample(place) +
    ". ";

  $(".rant").css("font-weight", "900");
  $(".rant").css("font-style", "italic");
  $(".rant").css("line-height", "25px");

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
    ". It would do the world a favor.";

  $(".rant").css("font-weight", "900");
  $(".rant").css("font-style", "italic");
  $(".rant").css("line-height", "25px");

  return angry_phrase3;
}



function sample(a) {
  return a[Math.floor(Math.random() * a.length)];
}
