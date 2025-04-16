document.addEventListener('DOMContentLoaded', function () {

  // ANIMATED HEARTS - START
  function initparticles() {
    animatedHearts();

  }
  // SET HEARTS SIZE & NUMBER
  function animatedHearts() {
    $.each($(".animated.hearts"), function () {
      var heartcount = ($(this).width() / 71) * 4;
      for (var i = 0; i <= heartcount; i++) {
        var size = ($.rnd(53, 125) / 10);
        $(this).append('<span class="particle" style="top:' + $.rnd(17, 80) + '%; left:' + $.rnd(0, 95) + '%;width:' + size + 'px; height:' + size + 'px;animation-delay: ' + ($.rnd(0, 30) / 10) + 's;"></span>');
      }
    });
  }
  // CALCULATE RANDOM VALUE
  jQuery.rnd = function (m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }

  initparticles();
  //ANIMATED HEARTS - END

  // CT ASSISTENT ANIMATION EYES - START
  const eyeball = document.getElementsByClassName("iris");

  document.onmousemove = () => {
    let x = event.clientX * 100 / window.innerWidth + "%";
    let y = event.clientY * 100 / window.innerHeight + "%";

    for (let i = 0; i < 2; i++) {
      eyeball[i].style.left = x;
      eyeball[i].style.top = y;
      eyeball[i].style.transform = "translate(-" + x + ",-" + y + ")";
    }
  }
  // CT ASSISTENT ANIMATION EYES - STOP

  // CT ASSISTENT CHATBOT - START
  function firstAssistentMessage() {


    let firstMessage = "Buna! Ce doresti sa stii despre Cristian?<br>Scrie-mi fara semne diacritice!<br>Hi! What do you want to know about Cristian?"
    document.getElementById("startMessage").innerHTML = '<p class="myAssistentText"><span>' + firstMessage + '</span></p>';

  }

  firstAssistentMessage();

  //QUESTION - ANSWERS PAIRS LIST
  const phraseList = [


    [/experience/i,
      ["Cristian has experience with HTML, CSS, SASS, SVG, Bootstrap, JavaScript and jQuery!"]],

    [/experienta/i,
      ["Cristian are experienta cu HTML, CSS, SASS, SVG, Bootstrap, JavaScript si jQuery!"]],

    [/numele/i,
      ["Numele meu este CT!"]],

    [/name/i,
      ["My name is CT!"]],

    [/know/i,
      ["If you want to know more about Cristian, please send him a message on Linkedin!"]],

    [/stiu/i,
      ["Daca vrei sa stii mai multe despre Cristian te rog sa ii trimiti mesaj pe Linkedin!"]],

    [/javascript/i,
      ["Cristian has experience with JS!"]],

    [/html/i,
      ["Cristian has experience with HTML!"]],

    [/CSS/i,
      ["Cristian has experience with CSS!"]],

    [/react/i,
      ["Cristian has little experience with React!"]],

    [/typescript/i,
      ["Cristian has no experience with Typescript!"]],

    [/vue/i,
      ["Cristian has no experience with Vue!"]],

    [/php/i,
      ["Cristian has no experience with PHP!"]],

    [/node/i,
      ["Cristian has no experience with Node.JS!"]],

    [/like/i,
      ["I like digital technologies that can improve the quality of life!"]],

    [/Cristian/i,
      ["You can find Cristian on Linkedin!"]],

    [/recruter/i,
      ["If you want to know more about Cristian, please send him a message on Linkedin!"]],

    [/email/i,
      ["You can find Cristian on Linkedin!"]],

    [/adresa/i,
      ["Daca doresti sa il contactezi pe Cristian te rog cauta-l pe Linkedin!"]],

    [/mailul/i,
      ["Daca doresti sa il contactezi pe Cristian te rog cauta-l pe Linkedin!"]],

    [/adress/i,
      ["You can find Cristian on Linkedin!"]],

    [/hi/i,
      ["Hello!"]],

    [/bye/i,
      ["Bye!"]],

    [/hello/i,
      ["Hi!"]],

    [/ziua/i,
      ["Buna!"]],

    [/seara/i,
      ["Buna!"]],

    [/noapte/i,
      ["Noapte buna!"]],

    [/night/i,
      ["Good night!"]],

    [/evening/i,
      ["Hi!"]],

    [/morning/i,
      ["Hi!"]],

    [/salut/i,
      ["Bună!"]],

    [/Buna/i,
      ["Salut!"]],

    [/La revedere/i,
      ["Pe curand!"]],

      [/frumoasa/i,
        ["Pe curand!"]],
  
    [/pe curand/i,
      ["La revedere!"]],

    [/soon/i,
      ["Goodbye!"]],

      [/day/i,
        ["Goodbye!"]],
  
    [/goodbye/i,
      ["See you soon!"]],

    [/sarbatori/i,
      ["Sarbatori cu pace si bucurie!"]],

    [/Craciun/i,
      ["Craciun fericit!"]],

    [/Merry Christmas/i,
      ["Thank you. Merry Christmas!"]],

    [/an nou/i,
      ["Multumesc. Un an nou cu bucurii!"]],

    [/La multi ani/i,
      ["La multi ani cu sanatate!"]],

    [/new year/i,
      ["Thank you. Happy new year!"]],

    [/faci/i,
      ["Bine. Dar tu?"]],

    [/gasit/i,
      ["Bine ai venit!"]],

    [/bine/i,
      ["Mă bucur!"]],

    [/ok/i,
      ["I`m glad!"]],

    [/cine/i,
      ["De ce te intereseaza?"]],

    [/de ce/i,
      ["De ce te intereseaza?"]],

    [/cum/i,
      ["De ce te intereseaza asta?"]],

    [/fine/i,
      ["I`m glad!"]],

    [/are/i,
      ["I`m fine. Thank you!"]],

    [/do you do/i,
      ["Fine. Thank you!"]],

    [/do you have/i,
      ["Why do you ask me?!"]],

    [/can you/i,
      ["I can give you just some answers!"]],

    [/who/i,
      ["Why are you interested?"]],

    [/why/i,
      ["Why are you interested?"]],

    [/how/i,
      ["Why are you interested?"]],

    [/can you/i,
      ["I can give you just some answers!"]],

    [/can you/i,
      ["I can give you just some answers!"]],

    [/can you/i,
      ["I can give you just some answers!"]],

    [/prost/i,
      ["Eu sunt doar un software!"]],

    [/amabil/i,
      ["Eu sunt doar un software!"]],

    [/kind/i,
      ["I am just a software!"]],

    [/incantat/i,
      ["Incantat de cunostinta!"]],

    [/destept/i,
      ["Eu sunt doar un software!"]],

    [/narod/i,
      ["Eu sunt doar un software!"]],

    [/dobitoc/i,
      ["Eu sunt doar un software!"]],

    [/idiot/i,
      ["Eu sunt doar un software!"]],

    [/stupid/i,
      ["I`m just a software!"]],

    [/what/i,
      ["What do you think?"]],

    [/quit/i,
      ["Good bye!"]],

    [/because/i,
      ["Is that the real reason?"]],

    [/Why/i,
      ["Why do you ask that?"]],

    [/It is/i,
      ["You seem very certain."]],

    [/Yes/i,
      ["You seem quite sure."]],

    [/no/i,
      ["You do not seem quite sure."]],

    [/sad/i,
      ["Is there anything that's bothering you?"]],

    [/no/i,
      ["You do not seem quite sure."]],

    [/You/i,
      ["Why do you say that to me?"]],

    [/angry/i,
      ["Maybe it would feel better for you if you forgive those who upset you."]],

    [/suparat/i,
      ["Poate ca te-ai simti mai bine daca i-ai ierta pe cei care te-au suparat."]],

    [/computer/i,
      ["It`s strange to talk to a computer?"]],

    [/feel/i,
      ["I am not a therapist."]],

    [/have/i,
      ["Why do you have that impression?"]],

    [/wheater/i,
      ["Please consult the wheater apps"]],

    [/(.*)/i,
      ["Nu inteleg!<br>I don`t understand!"]],



  ]


  class chatbotExpressions {


    constructor() {
      this.keys = phraseList.map(x => x[0]);
      this.values = phraseList.map(x => x[1]);
    }



    // MATCH BETWEN QUSTION & ANSWER
    respond(str) {
      for (let i = 0; i < this.keys.length; i++) {
        let statements = this.keys[i];
        let match = statements.exec(str);
        if (match !== null) {

          let resp = getRandomItem(this.values[i]);

          let pos = resp.indexOf('%');
          while (pos > -1) {
            let num = parseInt(resp.slice(pos + 1, pos + 2));
            resp = resp.slice(0, pos) + this.translate(match[num]) + resp.slice(pos + 2);
            pos = resp.indexOf('%');
          }

          return resp;
        }
      }
    }
  }

  var chatbot = new chatbotExpressions();

  // FOLDIN CONVERSATION PAGE
  var fold = document.getElementsByClassName("collapsible");

  for (let i = 0; i < fold.length; i++) {
    fold[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var content = this.nextElementSibling;

      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }

    });
  }

  // RETRIEVES THE ANSWER
  function getBotResponse(userText) {
    let botResponse = getText(userText);

    let botHtml = '<p class="myAssistentText"><span>' + botResponse + '</span></p>';
    $("#conversationPage").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }

  // TEXT PROCESS
  function getUserResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#conversationPage").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
      getBotResponse(userText);
    }, 1000)

  }

  // SEND MESSAGE
  $("#textInput").keypress(function (e) {
    if (e.which == 13) {
      getUserResponse();
    }
  });

  function getText(input) {
    let inputOrig = `${input}`;
    input = editInputText(input);
    console.log(input);
    console.log(inputOrig);

    let eval = evalExpr(input);
    if (eval === null) {
      return chatbot.respond(inputOrig);
    } else {
      return eval;
    }
  }

  function editInputText(input) {
    // SOME SETTINGS ABOUT LOWERCASE CHARS, REMOVE SIGN ? & MULTIPLE SPACES
    return input.toLowerCase().replace("?", "").replace(/  +/g, ' ').trim();
  }


  function evalExpr(input) {
    let eval;
    try {
      eval = math.evaluate(input);
    }
    catch (err) {
      //RETURN "NU INTELEG! - I DON`T UNDERSTAND!";
      return null;
    }
    return eval;
  }


  function getRandomItem(arr) {
    // CALCULATE RANDOM INDEX VALUE
    const randomIndex = Math.floor(Math.random() * arr.length);
    // CALCULTAE RANDOM ITEM
    const item = arr[randomIndex];
    return item;
  }





});