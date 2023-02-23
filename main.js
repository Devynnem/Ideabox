// querySelectors
var userTitle = document.querySelector('.title-input')
var userBody = document.querySelector('.body-input')
var userSaveBtn = document.querySelector('.save-button')
var userTitleInput = document.querySelector('.idea-title')
var userBodyInput = document.querySelector('.idea-contents')
var ideaBoxes = document.querySelector('.saved-cards')


var currentIdea; // this is how we create new ideas
var savedIdeas= [] // this is what we will push saved ideas into

// Creates Ideas upon save click
// if (userTitle.value === '' || userBody.value === '') {
    // classList.add('.save-button2')
    //}
    userSaveBtn.addEventListener('mouseover', changeButtonColor)
    
    
    userSaveBtn.addEventListener('click', createIdea,)
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
        ideaBoxes.innerHTML += `<section class="idea-container">
        <section class="top-margin">
        <button class="star-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.06 15.65"><defs><style>.cls-1{fill:#fff;}</style></defs><title>Artboard 29</title><g id="background"><polygon class="cls-1" points="8.02 2.48 9.64 5.77 13.27 6.29 10.64 8.85 11.26 12.47 8.02 10.76 4.77 12.47 5.39 8.85 2.76 6.29 6.39 5.77 8.02 2.48"/></g></svg>
        <svg class="hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.93 16.49"><defs><style>.cls-1{fill:#f16139;}</style></defs><title>Artboard 30</title><g id="background"><polygon class="cls-1" points="8.28 2.85 9.91 6.13 13.53 6.66 10.91 9.22 11.53 12.83 8.28 11.13 5.04 12.83 5.66 9.22 3.03 6.66 6.66 6.13 8.28 2.85"/></g></svg>
        </button>
        <button class="x-btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.18 17.72"><defs><style>.cls-1{fill:"#fff";}</style></defs><title>Artboard 31</title><g id="background"><polygon class="cls-1" points="13.13 5.87 12.43 5.16 8.97 8.61 5.53 5.16 4.82 5.87 8.27 9.32 4.82 12.77 5.53 13.48 8.97 10.03 12.43 13.48 13.13 12.77 9.68 9.32 13.13 5.87"/></g></svg>
        </button>
        </section>
        <section class="idea-contents">
        <h3 class="idea-title">${currentIdea.title}</h3>
        <p class="idea-contents">${currentIdea.body}</p>
        </section>
        <section class="bottom-bar">
        <button class="plus-button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.71 19.71"><defs><style>.cls-1{fill:#fff;stroke:#353567;stroke-miterlimit:10;}.cls-2{fill:#353567;}</style></defs><title>abacus-v1Artboard 41</title><g id="background"><circle class="cls-1" cx="9.76" cy="9.76" r="5.58"/><polygon class="cls-2" points="5.65 9.37 5.65 10.14 9.37 10.14 9.37 13.86 10.14 13.86 10.14 10.14 13.86 10.14 13.86 9.37 10.14 9.37 10.14 5.65 9.37 5.65 9.37 9.37 5.65 9.37"/></g></svg>
        </button>
        <h3 id="idea-card-comment">Comment</h3>
        </section>
        </section>`
        clearInputs()
        
    }
    
    
    // userSaveBtn.disabled = true; //setting button state to disabled
    
    function changeButtonColor() {
        userSaveBtn.disabled = true
     if (userTitle.value === '' || userBody.value === '') {
         userSaveBtn.style.backgroundColor = '#ffffff';
         userSaveBtn.disabled = true
     }
    }

