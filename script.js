const ideaBtn = document.getElementById('idea-btn');
const stepsBtn = document.getElementById('steps-btn');
const resultsBtn = document.getElementById('results-btn');
const selectorBtns = document.querySelectorAll('.selector-btn');
const backBtn = document.getElementById('back-btn');
const removeBtns = document.querySelectorAll('.remove-btn');
const buttonFunctions = {
    'idea-btn':() => {
        document.getElementById('idea').classList.remove('hidden');
    },
    'steps-btn':() => {
        document.getElementById('steps').classList.remove('hidden')
    },
    'results-btn':() => {
        document.getElementById('results').classList.remove('hidden')
    }
}
const relatedButtons = {
    'remove-idea-btn':'idea-btn',
    'remove-steps-btn':'steps-btn',
    'remove-results-btn':'results-btn',
    'idea-btn':'remove-idea-btn',
    'steps-btn':'remove-steps-btn',
    'results-btn':'remove-results-btn'
}
selectorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const clickedBtnId = document.getElementById(btn.id).id
         btn.classList.add('hidden');
         buttonFunctions[clickedBtnId]();
         const removeBtn = document.getElementById(relatedButtons[btn.id]);
         removeBtn.classList.remove('hidden');
        
        })
    });
removeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.add('hidden');
        btn.parentElement.classList.add('hidden');
        const btnToAdd = document.getElementById(relatedButtons[btn.id]);
        console.log(btnToAdd)
        btnToAdd.classList.remove('hidden')
    })
})