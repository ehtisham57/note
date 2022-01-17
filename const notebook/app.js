// var addBtn= document.getElementById("add-button");
// var notetitle =document.getElementById("note-title")
// var notetext =document.getElementById("note-text")
const notes = document.getElementById("notes")



function add(){
    /////////////////////////// title


const input = document.getElementById("note-title")
     var heading = document.createElement("h3")
     var htxt= document.createTextNode(input.value)
     heading.className="note-title"
    notes.appendChild(heading)
    heading.appendChild(htxt)
     heading.innerHTML = input.value

    
    // console.log(input)


/////////////////////////////////text
    

    const textarea =document.getElementById("note-text")
    const para = document.createElement("p")
    const ptxt=document.createTextNode(textarea.value)
    para.className="note-text"
    notes.appendChild(para)
    para.appendChild(ptxt)
    para.innerHTML = textarea.value


    ////////////////////////delete


    const deleteBtn = document.createElement("button")
    deleteBtn.className = "far fa-times-circle note-btn"
    const deletBtntxt = document.createTextNode("Delete Note")
    deleteBtn.appendChild(deletBtntxt)
    deleteBtn.innerHTML
    deleteBtn.setAttribute("onclick","delet(this)") 
    console.log(deleteBtn) 



    const editBtn = document.createElement("button")
    editBtn.className = "far fa-edit edit note-btn edit-btn"
    const editBtntxt = document.createTextNode("Edit Note")
    editBtn.appendChild(editBtntxt)
    editBtn.innerHTML
    editBtn.setAttribute("onclick","edit(this)") 
    console.log(editBtn) 

    notes.appendChild(editBtn)
    notes.appendChild(deleteBtn)
}



///////////////Function delete


function delet(e){
  e.parentNode.remove()
}


//////edit function 

function edit(e){
  const edittitle =prompt("edit title"+e.parentNode.firstChild.value ) 
  const editnote= prompt("Edit Note")
  e.parentNode.firstChild.value = edittitle
  e.parentNode=editnote
}
