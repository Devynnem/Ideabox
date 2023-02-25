// querySelectors
var userTitle = document.querySelector('.title-input')
var userBody = document.querySelector('.body-input')
var userSaveBtn = document.querySelector('.save-button')
var userTitleInput = document.querySelector('.idea-title')
var userBodyInput = document.querySelector('.idea-contents')
var ideaBoxes = document.querySelector('.saved-cards')
var dltBtn = document.querySelector('.x-btn')
var ideaContainer = document.querySelector('.idea-container')
// var star = document.querySelector('.star-icon')
// var orangeStar = document.querySelector('.star-icon-favorited')

var currentIdea; // this is how we create new ideas
var savedIdeas= [] // this is what we will push saved ideas into

// Creates Ideas upon save click
// if (userTitle.value === '' || userBody.value === '') {
    // classList.add('.save-button2')
    //}
    userTitle.addEventListener('input', changeButtonColor)
    userBody.addEventListener('input',changeButtonColor)
    userSaveBtn.addEventListener('click', createIdea)
    changeButtonColor();
    ideaBoxes.addEventListener('click', deleteIdea) 
    ideaBoxes.addEventListener('click', favoriteIdea)
    
       
       
    
    

    function changeButtonColor() {
        // event.preventDefault()
     if (!userTitle.value || !userBody.value) {
         userSaveBtn.classList.remove('save-button-able');
         userSaveBtn.disabled = true;
     } else if (userTitle.value && userBody.value){
        userSaveBtn.classList.add('save-button-able');
        userSaveBtn.disabled =false;
     }
     }

    function saveUserIdea() {
        savedIdeas.push(currentIdea)
    } 
    
    function clearInputs() {
        userTitle.value = '';
        userBody.value = '';
    }
    function createIdea(event) {
        event.preventDefault()
        var selfTitle = userTitle.value;
        var selfBody = userBody.value;
        currentIdea = new Idea(selfTitle, selfBody)
        saveUserIdea() 
        console.log(savedIdeas)
        

        ideaBoxes.innerHTML += `<section class="idea-container" >
        <section class="top-margin">
        <button class="star-btn">
        <img class="star-icon" id="star-icon" src="assets/star.svg" alt="blank favorite icon">
        <img class="star-icon-favorited hidden" id="star-icon-favorited" src="assets/star-active.svg" alt="favorite icon active">
        </button>
        <button class="x-btn" id="${currentIdea.id}">
        <img class="x-icon" id="x-icon" src="assets/delete.svg" alt="delete icon">
        </button>
        </section>
        <section class="idea-contents">
        <h3 class="idea-title">${currentIdea.title}</h3>
        <p class="idea-contents">${currentIdea.body}</p>
        </section>
        <section class="bottom-bar">
        <button class="plus-button">
        <img class="plus-icon" id="plus-icon" src="assets/comment.svg" alt="comment icon">
        </button>
        <h3 id="idea-card-comment">Comment</h3>
        </section>
        </section>`
        
        clearInputs() 
        changeButtonColor()
        
    }

     userSaveBtn.disabled = true;
     
    //  ideaBoxes.addEventListener('click', deleteIdea)
     
     
    //  function deleteIdea(event) {
    //      event.target.remove(ideaContainer)
       
    //         console.log('hi')
    //     }
function favoriteIdea (event) {
    if (event.target.className === 'star-icon') {
        document.querySelector('.star-icon').classList.add('hidden')
       document.querySelector('.star-icon-favorited').classList.remove('hidden')
            
        currentIdea.updateIdea()
        //    star.classList.toggle('clicked')
        //     currentIdea.updateIdea()
        } else if (event.target.className === 'star-icon') {
            document.querySelector('.star-icon-favorited').classList.add('hidden')
            document.querySelector('.star-icon').classList.remove('hidden')
        }
        
        
    
}


        function deleteIdea(event) {
            if (event.target.className === 'x-icon') {
                event.target.closest('.idea-container').remove()
            }
            var spliceIdea = event.target.parentNode.id
            for (var i=0; i < savedIdeas.length; i++){
                if (savedIdeas[i].id == spliceIdea)
                savedIdeas.splice(i, 1);
           }
        }
    //     if (event.target.classList.contains("x-btn")) {
    //       this.closest(".idea-container").remove()
    //     }
    //         console.log(savedIdeas, "line 83")
    //     }

    
    
    
    
    
    
    
    