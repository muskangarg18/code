let addBtn = document.getElementById('add_btn')
      addBtn.addEventListener('click', addAction)
      let parentList = document.getElementById('parentlist');
      function addAction(e){
        if(parentList.children[0].className=="emptyMsg"){
          parentList.children[0].remove()

        }
          let currentBtn = e.currentTarget;
          let currentInput =currentBtn.previousElementSibling
          let currentActionName= currentInput.value
          
          let newLi = document.createElement('li')
          //newLi.classList.add('list-group-item')
          newLi.className = "list-group-item d-flex justify-content-between"
          newLi.innerHTML = `<h4 class="flex-grow-1">${currentActionName}</h4>
          <button class="btn btn-success mx-3" >Edit</button>
          <button class="btn btn-danger" onclick="removeAction(this)">Remove</button>`
          
          parentList.appendChild(newLi)
          
          }

        function removeAction(currElement){
          console.log(currElement.parentElement)
            currElement.parentElement.remove()
            let parentList = document.getElementById('parentlist');
            if(parentList.children.length <=0){
                let newEmptyMsg = document.createElement("h4")
                newEmptyMsg.classList.add("emptyMsg")
                newEmptyMsg.textContent = "No Action Found. Add new action"
                parentList.appendChild(newEmptyMsg)
    
            }
            }
         function editAction(currElement){
          if(currElement.textContent== "Done"){

            currElement.textContent= "Edit"
            let currentActionName = currElement.previousElementSibling.value
            let currHeading = document.createElement('h4');
            currHeading.className="flex-grow-1"
            currHeading.textContent=currentActionName
            currElement.parentElement.replaceChild(currHeading,currElement.previousElementSibling)


          }else{
            currElement.textContent= "Done"
            console.log(currElement.previousElementSibling)
            let currentActionName= currElement.previousElementSibling.textContent
            let currInput = document.createElement('input');
            currInput.type= "text"
            currInput.placeholder = "an action"
            currInput.className ="form-control"
            currInput.value = currentActionName;

            currElement.parentElement.replaceChild(currInput,currElement.previousElementSibling)

          }
          


         }