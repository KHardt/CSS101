/*per instructions - below would be correct- title is an attr that provides extra info. but maybe not what was meant?
myNodeList = document.querySelectorAll("article")
for (var i = 0; i < myNodeList.length; i++) {
    var item = myNodeList[i]; 
    item.title += "Article Parent element";
    console.log(item)
  }
  */

//Below adds the Article Parent element:
//I got mad and said screw it and wrapped it in a function
function addThingy (specificElement) {
    const newNode = document.createElement("h4")                 
    const textnode = document.createTextNode("Article Parent element");      
    const change1 = newNode.appendChild(textnode);                           
    
    const nodeList = document.querySelector(specificElement).prepend(change1)
    }
   addThingy(".n-child")
   addThingy(".n-type")
   addThingy(".first-of-type")
   addThingy(".three")
    //let buildMeUp = ""
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
   function createAnchor() {
   const makeAnchor = document.createElement("a")
   makeAnchor.setAttribute("href", "")
   const selectNav = document.querySelector("nav")
   selectNav.appendChild(makeAnchor)
   }
   //two tasks- parameter for the link or append 
   //also need to add a label somehow- done. See below addText
   createAnchor();
   createAnchor();
   createAnchor()
   
   //wasnt sure how to pass an argument with the above and add the below that way- setAttribute requires arguments of it's own
   const addText = document.querySelectorAll("a")[0]
   addText.text = "CNN"
   addText.setAttribute("href", "https://www.cnn.com")
   
   const addText2 = document.querySelectorAll("a")[1]
   addText2.text = "Titans"
   addText2.setAttribute("href", "https://www.musiccitymiracles.com/")
   
   const addText3 = document.querySelectorAll("a")[2]
   addText3.text = "NSS"
   addText3.setAttribute("href", "http://nashvillesoftwareschool.com/")
   
   
   
    
   
   /*Notes to ask Meg:
   1. to loop adding Article Parent- why not working with prepend
   2. Instead of importing UL's li children or blowing them away- changing them using a while loop
   3. passing a link as a parameter for createAnchor function 
   */