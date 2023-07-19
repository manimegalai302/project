let container=document.querySelector('#display')
let title=document.querySelector('#title');
let content=document.querySelector('#content');
let nodeList=document.createElement('li')
let submitBtn=document.querySelector('#submit')

submitBtn.addEventListener('click',()=>{
        const value1= title.value;
        const value2= content.value;
        
        nodeList.textContent= value1 + " " + value2 ;
        myFunction()
        myFunction1()
    
    })
    function myFunction() {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("Delete");
        x.appendChild(t);
        onDelete(this)
        nodeList.appendChild(x);
       
      }
      function myFunction1() {
        var x = document.createElement("BUTTON");
        var t = document.createTextNode("edit");
        x.appendChild(t);
        nodeList.appendChild(x);
      
      }

      function  onDelete(){
        if (confirm("Are you sure to delete this notes ?")) {
        item= li.parentElement.parentElement;
        document.getElementById("display").deleteitem(item.itemIndex);
        }
    }

    container.appendChild(nodeList)
    