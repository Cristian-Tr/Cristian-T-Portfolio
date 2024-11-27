document.addEventListener('DOMContentLoaded', function () {



  // Gets the first message
  function firstChatbotMessage() {
    let today = new Date();
    let dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = dayName[new Date().getDay()];
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
      hours = "0" + hours;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    let firstMessage = "Hi. How can I help you?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let chatTime = day + " " + hours + ":" + minutes;

    $("#chat-timestamp").append(chatTime);
    document.getElementById("userInput").scrollIntoView(false);
  }

  firstChatbotMessage();


  const gReflections = {
    "am": "are",
    "was": "were",
    "i": "you",
    "i'd": "you would",
    "i've": "you have",
    "i'll": "you will",
    "my": "your",
    "are": "am",
    "you've": "I have",
    "you'll": "I will",
    "your": "my",
    "yours": "mine",
    "you": "me",
    "me": "you"
  }

  const gPats = [


    [/experience/i,
      ["I have experience with HTML, CSS, SASS, SVG, Bootstrap, JavaScript and jQuery!"]],

    [/name/i,
      ["My name is CT!"]],

    [/I need (.*)/i,
      ["Why do you need %1?",
        "Would it really help you to get %1?",
        "Are you sure you need %1?"]],

    [/Why don\'?t you ([^\?]*)\??/i,
      ["Do you really think I don't %1?",
        "Perhaps eventually I will %1.",
        "Do you really want me to %1?"]],

    [/Why can\'?t I ([^\?]*)\??/i,
      ["Do you think you should be able to %1?",
        "If you could %1, what would you do?",
        "I don't know -- why can't you %1?",
        "Have you really tried?"]],

    [/I can\'?t (.*)/i,
      ["How do you know you can't %1?",
        "Perhaps you could %1 if you tried.",
        "What would it take for you to %1?"]],

    [/I am (.*)/i,
      ["Did you come to me because you are %1?",
        "How long have you been %1?",
        "How do you feel about being %1?"]],

    [/I\'?m (.*)/i,
      ["How does being %1 make you feel?",
        "Do you enjoy being %1?",
        "Why do you tell me you're %1?",
        "Why do you think you're %1?"]],

    [/Are you ([^\?]*)\??/i,
      ["Why does it matter whether I am %1?",
        "Would you prefer it if I were not %1?",
        "Perhaps you believe I am %1.",
        "I may be %1 -- what do you think?"]],

    [/(.*) child(.*)/i,
      ["Did you have close friends as a child?",
        "What is your favorite childhood memory?",
        "Do you remember any dreams or nightmares from childhood?",
        "Did the other children sometimes tease you?",
        "How do you think your childhood experiences relate to your feelings today?"]],

    [/What (.*)/i,
      ["Why do you ask?",
        "How would an answer to that help you?",
        "What do you think?"]],

    [/How (.*)/i,
      ["How do you suppose?",
        "Perhaps you can answer your own question.",
        "What is it you're really asking?"]],

    [/Because (.*)/i,
      ["Is that the real reason?",
        "What other reasons come to mind?",
        "Does that reason apply to anything else?",
        "If %1, what else must be true?"]],

    [/(.*) sorry (.*)/i,
      ["There are many times when no apology is needed.",
        "What feelings do you have when you apologize?"]],

    [/I think (.*)/i,
      ["Do you doubt %1?",
        "Do you really think so?",
        "But you're not sure %1?"]],

    [/(.*) friend (.*)/i,
      ["Tell me more about your friends.",
        "When you think of a friend, what comes to mind?",
        "Why don't you tell me about a childhood friend?"]],

    [/Yes/i,
      ["You seem quite sure.",
        "OK, but can you elaborate a bit?"]],

    [/(.*) computer(.*)/i,
      ["Are you really talking about me?",
        "Does it seem strange to talk to a computer?",
        "How do computers make you feel?",
        "Do you feel threatened by computers?"]],

    [/Is it (.*)/i,
      ["Do you think it is %1?",
        "Perhaps it's %1 -- what do you think?",
        "If it were %1, what would you do?",
        "It could well be that %1."]],

    [/It is (.*)/i,
      ["You seem very certain.",
        "If I told you that it probably isn't %1, what would you feel?"]],

    [/r'Can you ([^\?]*)\??/i,
      ["What makes you think I can't %1?",
        "If I could %1, then what?",
        "Why do you ask if I can %1?"]],

    [/Can I ([^\?]*)\??/i,
      ["Perhaps you don't want to %1.",
        "Do you want to be able to %1?",
        "If you could %1, would you?"]],

    [/You are (.*)/i,
      ["Why do you think I am %1?",
        "Does it please you to think that I'm %1?",
        "Perhaps you would like me to be %1.",
        "Perhaps you're really talking about yourself?"]],

    [/You\'?re (.*)/i,
      ["Why do you say I am %1?",
        "Why do you think I am %1?",
        "I'm still learning and I don't know much!",
        "Are we talking about you, or me?"]],

    [/I don\'?t (.*)/i,
      ["Don't you really %1?",
        "Why don't you %1?",
        "Do you want to %1?"]],

    [/I feel (.*)/i,
      ["Good, tell me more about these feelings.",
        "Do you often feel %1?",
        "When do you usually feel %1?",
        "When you feel %1, what do you do?"]],

    [/I have (.*)/i,
      ["Why do you tell me that you've %1?",
        "Have you really %1?",
        "Now that you have %1, what will you do next?"]],

    [/I would (.*)/i,
      ["Could you explain why you would %1?",
        "Why would you %1?",
        "Who else knows that you would %1?"]],

    [/Is there (.*)/i,
      ["Do you think there is %1?",
        "It's likely that there is %1.",
        "Would you like there to be %1?"]],

    [/My (.*)/i,
      ["I see, your %1.",
        "Why do you say that your %1?",
        "I'm still learning and I don't know much!",
        "When your %1, how do you feel?"]],

    [/You (.*)/i,
      ["We should be discussing you, not me.",
        "Why do you say that about me?",
        "I'm still learning and I don't know much!",
        "Why do you care whether I %1?"]],

    [/Why (.*)/i,
      ["Why don't you tell me the reason why %1?",
        "Why do you think %1?"]],

    [/I want (.*)/i,
      ["What would it mean to you if you got %1?",
        "Why do you want %1?",
        "What would you do if you got %1?",
        "If you got %1, then what would you do?"]],

    [/(.*) mother(.*)/i,
      ["Tell me more about your mother.",
        "What was your relationship with your mother like?",
        "How do you feel about your mother?",
        "How does this relate to your feelings today?",
        "Good family relations are important."]],

    [/(.*) father(.*)/i,
      ["Tell me more about your father.",
        "How did your father make you feel?",
        "How do you feel about your father?",
        "Does your relationship with your father relate to your feelings today?",
        "Do you have trouble showing affection with your family?"]],

    [/(.*)\?/i,
      ["Why do you ask that?",
        "Please consider whether you can answer your own question.",
        "Perhaps the answer lies within yourself?",
        "Why don't you tell me?"]],

    [/quit/i,
      ["Thank you for talking with me.",
        "Good-bye."]],

    [/(.*)/i,
      ["Please tell me more.",
        "Let's change focus a bit... Tell me about your family.",
        "Can you elaborate on that?",
        "Why do you say that %1?",
        "I see.",
        "Very interesting.",
        "%1.",
        "I see.  And what does that tell you?",
        "How does that make you feel?",
        "How do you feel when you say that?"]],

  ]


  class chatbotExpressions {


    constructor() {
      this.keys = gPats.map(x => x[0]);
      this.values = gPats.map(x => x[1]);
    }



    //----------------------------------------------------------------------
    //  respond: take a string, a set of regexps, and a corresponding
    //    set of response lists; find a match, and return a randomly
    //    chosen response from the corresponding list.
    //----------------------------------------------------------------------
    respond(str) {
      // TODO: if user asks first "I am fine and you?", chatbot's answer is weirdly constructed:
      // e.g. "How do you feel about being fine and you?"
      // without '?' in user's question -> "How do you feel about being fine and me?" [chatbot's answer]
      for (let i = 0; i < this.keys.length; i++) {
        let regex = this.keys[i];
        let match = regex.exec(str);
        if (match !== null) {
          // found a match ... stuff with corresponding value
          // chosen randomly from among the available options
          let resp = getRandomItem(this.values[i]);
          // we've got a response... stuff in reflected text where indicated
          let pos = resp.indexOf('%');
          while (pos > -1) {
            let num = parseInt(resp.slice(pos + 1, pos + 2));
            resp = resp.slice(0, pos) + this.translate(match[num], gReflections) + resp.slice(pos + 2);
            pos = resp.indexOf('%');
          }
          // e.g. "I am fine??" -> "I am fine???" [if not using the `while` like the old code]
          while (JSON.stringify(resp.slice(-2)) == '"?."' || JSON.stringify(resp.slice(-2)) == '"??"') {
            // fix munged punctuation at the end
            if (JSON.stringify(resp.slice(-2)) == '"?."') {
              resp = resp.slice(0, -2) + '.';
            }
            if (JSON.stringify(resp.slice(-2)) == '"??"') {
              resp = resp.slice(0, -2) + '?';
            }
          }
          return resp;
        }
      }
      return "Try something else!"
    }
  }

  var chatbot = new chatbotExpressions();

  // Collapsible
  var coll = document.getElementsByClassName("collapsible");

  for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });
  }


  // Retrieves the response
  function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    //let botResponse = "I love you too!";
    //let botResponse = "I hate you though!";
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }

  function getHardResponse2(userText) {
    //let botResponse = getBotResponse(userText);
    let botResponse = "I love you too!";
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }

  //Gets the text text from the input box and processes it
  function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
      userText = "Type something please!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
      getHardResponse(userText);
    }, 1000)

  }

  // Handles sending text via button clicks
  function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
      getHardResponse2(sampleText);
    }, 1000)
  }

  function sendButton() {
    getResponse();
  }

  function heartButton() {
    buttonSendText("Heart clicked!")
  }

  // Press enter to send a message
  $("#textInput").keypress(function (e) {
    if (e.which == 13) {
      getResponse();
    }
  });

  function getBotResponse(input) {
    let inputOrig = `${input}`;
    input = cleanInput(input);
    console.log(input);
    console.log(inputOrig);
    if (input == "hello" || input == "hi") {
      return greetingFormulas(input);
    } else if (input == "goodbye" || input == "bye") {
      return goodbyeFormulas(input);
    } else if (input == "date" || input.startsWith("what date") ||
      input.startsWith("what is the date") || input.startsWith("what's the date")) {
      return new Date().toDateString();
    } else if (input.startsWith("time") || input.startsWith("what time") ||
      input.startsWith("what is the time") || input.startsWith("what's the time")) {
      return new Date().toDateString();
    } else {
      let eval = evalExpr(input);
      if (eval === null) {
        return chatbot.respond(inputOrig);
      } else {
        return eval;
      }
    }
  }

  function cleanInput(input) {
    // - Change all characters in lowercase
    // - Remove '?'
    // - Replace multiple spaces with one space
    // - Remove trailing space
    return input.toLowerCase().replace("?", "").replace(/  +/g, ' ').trim();
  }

  function greetingFormulas(input) {
    let greetingFormula;
    let date = new Date();
    hour = date.getHours();

    if (hour < 5) {
      greetingFormula = "Welcome!";
    }
    else if (hour < 10) {
      greetingFormula = "Good morning!";
    }
    else if (hour < 18) {
      greetingFormula = "Good afternoon!";
    }
    else {
      greetingFormula = "Good evening!"
    }
    //let answers = ["Hello there!", "Hi!"];
    //return answers[getRandomInt(0, answers.length)];
    return greetingFormula;
  }

  function goodbyeFormulas(input) {
    let goodbyeAnswers = ["Goodbye!", "See you later!", "Nice talking to you!"];


    let answerIdx = Math.floor(Math.random() * goodbyeAnswers.length);
    console.log(answerIdx);
    return goodbyeAnswers[answerIdx];
  }



  function evalExpr(input) {
    let eval;
    try {
      eval = math.evaluate(input);
    }
    catch (err) {
      //return "Try asking something else!";
      return null;
    }
    return eval;
  }

  // From mozilla MDN
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); 
  }


  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }













});