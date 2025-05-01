/*  Make text bigger and greet  user  */
function makeBigger() {
    alert("Hello, world!");
    document.getElementById("text-area").style.fontSize = "24pt";
  }
  
  /*  Apply or remove the “fancy” styles  */
  function changeStyle() {
    const txt = document.getElementById("text-area");
    const fancy = document.getElementById("fancy-radio").checked;
  
    if (fancy) {
      txt.style.fontWeight = "bold";
      txt.style.color = "blue";
      txt.style.textDecoration = "underline";
    } else {
      txt.style.fontWeight = "normal";
      txt.style.color = "black";
      txt.style.textDecoration = "none";
    }
  }
  
  /*  Uppercase everything and add “-Moo” to each sentence’s last word  */
  function makeMoo() {
    const txtArea = document.getElementById("text-area");
    let text = txtArea.value.toUpperCase();
  
    const sentences = text.split(".");
    for (let i = 0; i < sentences.length - 1; i++) {
      const words = sentences[i].trim().split(/\s+/);
      if (words.length > 0 && words[0] !== "") {
        words[words.length - 1] += "-Moo";
        sentences[i] = words.join(" ");
      }
    }
    txtArea.value = sentences.join(". ");
  }
  