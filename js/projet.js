function update() { // projetos
  var select = document.getElementById("projet");
  var option = select.options[select.selectedIndex].value;

  switch (option) {
    case "0":
      console.log("option 0");
      var element = document.getElementById("option0");
      element.classList.add("option0");
      var element = document.getElementById("option1");
      element.classList.remove("option0");
      var element = document.getElementById("option2");
      element.classList.remove("option0");
      var element = document.getElementById("option3");
      element.classList.remove("option0");
      var element = document.getElementById("option4");
      element.classList.remove("option0");
      var element = document.getElementById("option5");
      element.classList.remove("option0");
      var element = document.getElementById("option6");
      element.classList.remove("option0");
      
      break;
    case "1":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.add("option0");
        var element = document.getElementById("option2");
        element.classList.remove("option0");
        var element = document.getElementById("option3");
        element.classList.remove("option0");
        var element = document.getElementById("option4");
        element.classList.remove("option0");
        var element = document.getElementById("option5");
        element.classList.remove("option0");
        var element = document.getElementById("option6");
        element.classList.remove("option0");
      console.log("option 1");
      break;
    case "2":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.remove("option0");
        var element = document.getElementById("option2");
        element.classList.add("option0");
        var element = document.getElementById("option3");
        element.classList.remove("option0");
        var element = document.getElementById("option4");
        element.classList.remove("option0");
        var element = document.getElementById("option5");
        element.classList.remove("option0");
        var element = document.getElementById("option6");
        element.classList.remove("option0");
      console.log("option 2");
      break;
    case "3":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.remove("option0");
        var element = document.getElementById("option2");
        element.classList.remove("option0");
        var element = document.getElementById("option3");
        element.classList.add("option0");
        var element = document.getElementById("option4");
        element.classList.remove("option0");
        var element = document.getElementById("option5");
        element.classList.remove("option0");
        var element = document.getElementById("option6");
        element.classList.remove("option0");
      console.log("option 3");
      break;
    case "4":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.remove("option0");
        var element = document.getElementById("option2");
        element.classList.remove("option0");
        var element = document.getElementById("option3");
        element.classList.remove("option0");
        var element = document.getElementById("option4");
        element.classList.add("option0");
        var element = document.getElementById("option5");
        element.classList.remove("option0");
        var element = document.getElementById("option6");
        element.classList.remove("option0");
      console.log("option 4");
      break;
    case "5":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.remove("option0");
        var element = document.getElementById("option2");
        element.classList.remove("option0");
        var element = document.getElementById("option3");
        element.classList.remove("option0");
        var element = document.getElementById("option4");
        element.classList.remove("option0");
        var element = document.getElementById("option5");
        element.classList.add("option0");
        var element = document.getElementById("option6");
        element.classList.remove("option0");
      console.log("option 5");
      break;
    case "6":
        var element = document.getElementById("option0");
        element.classList.remove("option0");
        element.classList.add("_on");
        var element = document.getElementById("option1");
        element.classList.remove("option0");
        var element = document.getElementById("option2");
        element.classList.remove("option0");
        var element = document.getElementById("option3");
        element.classList.remove("option0");
        var element = document.getElementById("option4");
        element.classList.remove("option0");
        var element = document.getElementById("option5");
        element.classList.remove("option0");
        var element = document.getElementById("option6");
        element.classList.add("option0");
      console.log("option 6");
      break;
    default:
        alert("Erro Selecione projeto valido")
      console.log("Selecione projeto para visualizar informaçoes.");
  }
}


