document.addEventListener('DOMContentLoaded', function () {



  // Start message
  function firstAssistentMessage() {


    let firstMessage = "I`m CT! How can I help you?"
    document.getElementById("startMessage").innerHTML = '<p class="myAssistentText"><span>' + firstMessage + '</span></p>';

  }

  firstAssistentMessage();


  const phraseList = [


    [/experience/i,
      ["I have experience with HTML, CSS, SASS, SVG, Bootstrap, JavaScript and jQuery!"]],

    [/name/i,
      ["My name is CT!"]],

    [/know/i,
      ["If you want to know more about me, please send a message on Linkedin!"]],

    [/react/i,
      ["I don`t have experience with React!"]],

    [/typescript/i,
      ["I don`t have experience with Typescript!"]],

    [/vue/i,
      ["I don`t have experience with Vue!"]],

    [/react/i,
      ["I don`t have experience with React!"]],

    [/php/i,
      ["I don`t have experience with PHP!"]],

    [/node/i,
      ["I don`t have experience with Node.JS!"]],

    [/like/i,
      ["I like digital technologies that can improve the quality of life!"]],

    [/Cristian/i,
      ["You can find me on Linkedin!"]],

    [/adress/i,
      ["You can find me on Linkedin!"]],

    [/hi/i,
      ["Hi!"]],

    [/bye/i,
      ["Bye!"]],

    [/hello/i,
      ["Hi!"]],

      [/hi/i,
        ["Hi!"]],

      [/are/i,
        ["I`m fine. Thank you!"]],
        
      [/do you/i,
        ["Fine. Thank you!"]],
        
    [/quit/i,
      ["Good bye!"]],

    [/(.*)/i,
      ["I don`t understand!",
        "Please rephrase!",
        "Sorry, I don`t know what to say!"]],

  ]


  class chatbotExpressions {


    constructor() {
      this.keys = phraseList.map(x => x[0]);
      this.values = phraseList.map(x => x[1]);
    }



    //find a match betwen user question and chatbot statements list
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

  // Fold conversation page
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

  // Retrieves the response
  function getShortResponse(userText) {
    let botResponse = getText(userText);

    let botHtml = '<p class="myAssistentText"><span>' + botResponse + '</span></p>';
    $("#conversationPage").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
  }

  //processes text
  function getResponse() {
    let userText = $("#textInput").val();

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#conversationPage").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
      getShortResponse(userText);
    }, 1000)

  }

  // Enter to send a message
  $("#textInput").keypress(function (e) {
    if (e.which == 13) {
      getResponse();
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
    //Change chars in lowercase, remove sign-?, multiple spaces and trailing space
    return input.toLowerCase().replace("?", "").replace(/  +/g, ' ').trim();
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


  function getRandomItem(arr) {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);
    // get random item
    const item = arr[randomIndex];
    return item;
  }





});