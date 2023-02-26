// querySelectors
var userTitle = document.querySelector('.title-input');
var userBody = document.querySelector('.body-input');
var userSaveBtn = document.querySelector('.save-button');
var ideaBoxes = document.querySelector('.saved-cards');

// Global Variables
var currentIdea; 
var savedIdeas = [];

// eventListeners
userTitle.addEventListener('input', changeButtonColor);
userBody.addEventListener('input', changeButtonColor);
userSaveBtn.addEventListener('click', createIdea);
ideaBoxes.addEventListener('click', deleteIdea);
ideaBoxes.addEventListener('click', favoriteIdea);

// Functions
function changeButtonColor() {
    if (!userTitle.value || !userBody.value) {
        userSaveBtn.classList.remove('save-button-able');
        userSaveBtn.disabled = true;
    } else if (userTitle.value && userBody.value) {
        userSaveBtn.classList.add('save-button-able');
        userSaveBtn.disabled = false;
    }
}

function saveUserIdea() {
    savedIdeas.push(currentIdea);
}

function clearInputs() {
    userTitle.value = '';
    userBody.value = '';
}

function createIdea(event) {
    event.preventDefault()
    var selfTitle = userTitle.value;
    var selfBody = userBody.value;
    currentIdea = new Idea(selfTitle, selfBody);
    saveUserIdea();
    ideaBoxes.innerHTML += 
        `<section class="idea-container" >
            <section class="top-margin" id="${currentIdea.id}">
                <button class="star-btn">
                    <img class="star-icon" id="starIcon" src="assets/star.svg" alt="blank favorite icon">
                </button>
                <button class="x-btn" id="${currentIdea.id}">
                    <img class="x-icon" id="xIcon" src="assets/delete.svg" alt="delete icon">
                </button>
            </section>
            <section class="idea-contents">
                <h3 class="idea-title">${currentIdea.title}</h3>
                <p class="idea-contents">${currentIdea.body}</p>
            </section>
            <section class="bottom-bar">
                <button class="plus-button">
                    <img class="plus-icon" id="plusIcon" src="assets/comment.svg" alt="comment icon">
                </button>
                <h3 id="idea-card-comment">Comment</h3>
            </section>
        </section>`;
    clearInputs();
    changeButtonColor();
}

function favoriteIdea(event) {
  var favoriteCard = parseInt(event.target.parentNode.parentNode.id);
    if (event.target.className === 'star-icon') {
        event.target.parentNode.innerHTML = `<img class="star-icon-favorited" id="starIconFavorited" src="assets/star-active.svg" alt="favorite icon active">`;
        for (var i = 0; i < savedIdeas.length; i++) {
            if (savedIdeas[i].id === favoriteCard) {
                savedIdeas[i].updateIdea();
            }
        }
    } else if (event.target.className === 'star-icon-favorited') {
        event.target.parentNode.innerHTML = `<img class="star-icon" id="starIcon" src="assets/star.svg" alt="blank favorite icon">`;
        for (var i = 0; i < savedIdeas.length; i++) {
            if (savedIdeas[i].id === favoriteCard) {
                savedIdeas[i].updateIdea();
            }
        }
    }
}


function deleteIdea(event) {
  if (event.target.className === 'x-icon') {
        event.target.closest('.idea-container').remove()
    }
    var spliceIdea = parseInt(event.target.parentNode.id);
    for (var i = 0; i < savedIdeas.length; i++) {
        if (savedIdeas[i].id === spliceIdea) {
            savedIdeas.splice(i, 1)
        }
    }
}