const ideaBtn = document.getElementById('idea-btn');
const stepsBtn = document.getElementById('steps-btn');
const resultsBtn = document.getElementById('results-btn');
const selectorBtns = document.querySelectorAll('.selector-btn');
const selectorBtnsContainer = document.getElementById('selector-btns-container')
const goBackBtn = document.getElementById('go-back-btn');
const removeBtns = document.querySelectorAll('.remove-btn');
const clearAndShowAllBtn = document.getElementById('clear-btn')
const buttonFunctions = {
    'idea-btn':() => {
        document.getElementById('idea').classList.remove('hidden');
    },
    'steps-btn':() => {
        document.getElementById('steps').classList.remove('hidden')
    },
    'results-btn':() => {
        document.getElementById('results').classList.remove('hidden')
    },
}
const relatedButtons = {
    'idea-btn':'remove-idea-btn',
    'steps-btn':'remove-steps-btn',
    'results-btn':'remove-results-btn'
}
const buttonsAndGoToLocations = {
    'idea-btn': document.getElementById('idea'),
    'steps-btn': document.getElementById('steps'),
    'results-btn': document.getElementById('results')
}
selectorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const clickedBtnId = document.getElementById(btn.id).id;
        const elementToGoTo = buttonsAndGoToLocations[btn.id];
         buttonFunctions[clickedBtnId]();
         const removeBtn = document.getElementById(relatedButtons[btn.id]);
         removeBtn.classList.remove('hidden');
         elementToGoTo.scrollIntoView({behavior:'smooth', block:'start'});
          
        })
    });
removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('hidden');
        btn.parentElement.classList.add('hidden');
    })
})
goBackBtn.addEventListener('click', () => {
    window.scroll({top:0, behavior:"smooth"})
})
window.addEventListener('scroll', () => {
    if(window.scrollY>0 ){
        goBackBtn.classList.remove('hidden');
    }
    else{
        goBackBtn.classList.add('hidden')
    }
})
