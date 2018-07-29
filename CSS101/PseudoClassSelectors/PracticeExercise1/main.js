/*per instructions - below would be correct- title is an attr that provides extra info. but maybe not what was meant?
myNodeList = document.querySelectorAll("article")
for (var i = 0; i < myNodeList.length; i++) {
    var item = myNodeList[i]; 
    item.title += "Article Parent element";
    console.log(item)
  }
  */

 
 const newNode = document.createElement("h4")                 
 const textnode = document.createTextNode("Article Parent element");      
 const change1 = newNode.appendChild(textnode);                           
 
 const nodeList = document.querySelectorAll("article")
 let buildMeUp = ""
//console.log(nodeList)

/*will try the below again later: not sure why going right to end
 for (let i = 0; i < nodeList.length; i++) {
     buildMeUp += nodeList[i].prepend(change1)
     //console.log(item)
     //item.prepend(change1) 
    
 }   
*/

//below is last part with event listeners. I changed the tags first
const getIt = document.querySelector("ul")
const makeNav = document.createElement("nav")
const newAnchor = document.createAttribute("a")
let index;

/* //attempted to replace instead of import the children
while (getIt.firstChild) {
    //getIt.childNodes.replaceChild(newAnchor, getIt.childNodes)
    makeNav.appendChild(getIt.firstChild); // *Moves* the child
} */
for (index = getIt.attributes.length - 1; index >= 0; --index) {
    makeNav.attributes.setNamedItem(getIt.attributes[index].cloneNode());
}
getIt.parentNode.replaceChild(makeNav, getIt);

//now I need to replace the children of nav with anchor tags:
//<a href="#news">News</a>
function createAnchor() {
const makeAnchor = document.createElement("a")
makeAnchor.setAttribute("href", "")
const selectNav = document.querySelector("nav")
selectNav.appendChild(makeAnchor)
}

createAnchor();
createAnchor();

 