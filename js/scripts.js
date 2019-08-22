$(document).ready(function() {
  $("form#some-form").submit(function(event) {
    event.preventDefault();
    var userInput = $("input:input").val();
    console.log(userInput);
    var rawText = userInput;
    var punctuation = [".", ",", ";", ":", "/", "?" , "<" , ">" ,'"', "'", "[", "]", "{", "}", "|", "!","@","#","$","%","^","&","*","(",")","_","+","-","=" ]

    while (rawText.search(" ") !== -1) {
      rawText = rawText.replace(" ", "");
    };

    var alphaNumeric = rawText;
    for (index = 0; index < rawText.length; index++) {
      if (alphaNumeric.search(punctuation)) {
        alphaNumeric = alphaNumeric.replace(punctuation[index], "")
      }
    };

    var count = alphaNumeric.length;
    var squareRoot = Math.sqrt(alphaNumeric);
    var columns = Math.ceil(squareRoot);
    var result = [];
    var rows = Math.ceil(alphaNumeric.length / columns)

    for (index = 0; index < rows; index++) {
      for (index = 0; index < columns; index++) {
        result[index] = result[index] + (alphaNumeric.slice(0,1));
        alphaNumeric = alphaNumeric.substr(1);
      }
    }
    console.log(alphaNumeric);
    console.log(result);
    var messageString = result.join("");
    var messageLowercase = messageString.toLowerCase();
    var encryptedMessage = "";
      for (index = 0; index < (count/5); index++) {
        encryptedMessage += (messageLowercase.slice(0,5));
        messageLowercase = messageLowercase.substr(5);
        encryptedMessage += " ";
      }
      console.log(encryptedMessage);
    encryptedMessage = encryptedMessage.trimEnd();
    $("p#encryptedOutput").text(encryptedMessage);
  });
});
