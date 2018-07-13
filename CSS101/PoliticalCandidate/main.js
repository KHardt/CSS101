const main_article = document.querySelector("#wrapper");
const text_note = document.createTextNode("Is also on the -I don't really care that much committee");
main_article.appendChild(text_note);



//const wrapper = document.getElementById("wrapper");
const wrapper = document.querySelector("#wrapper");
const congressAttr = document.createAttribute("congressional-district");
congressAttr.value = "20";
wrapper.setAttributeNode(congressAttr);




//main_article.querySelector("section").innerHTML += "hello";

/*
const articleRef = document.querySelector("#congress");
let paragraphElement= document.createElement("p")
let paragraphTextNode= document.createTextNode("made up mission statement")

paragraphElement.appendChild(paragraphTextNode)

articleRef.appendChild(paragraphElement)
*/

