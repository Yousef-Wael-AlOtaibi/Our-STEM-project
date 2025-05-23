const ideaBtn = document.getElementById('idea-btn');
const stepsBtn = document.getElementById('steps-btn');
const resultsBtn = document.getElementById('results-btn');
const selectorBtns = document.querySelectorAll('.selector-btn');
const selectorBtnsContainer = document.getElementById('selector-btns-container')
const goBackBtn = document.getElementById('go-back-btn');
const removeBtns = document.querySelectorAll('.remove-btn');
const clearAndShowAllBtn = document.getElementById('clear-btn')
const toggleACBtn = document.getElementById('ac-btn');
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
    'stem-btn':() => {
        document.getElementById('stem-education').classList.remove('hidden')
    },
    'credits-btn':()=>{
        document.getElementById('credits').classList.remove('hidden')
    },
    'concepts-btn':()=>{
        document.getElementById('key-concepts').classList.remove('hidden')
    }
}
const relatedButtons = {
    'idea-btn':'remove-idea-btn',
    'steps-btn':'remove-steps-btn',
    'results-btn':'remove-results-btn',
    'stem-btn':'remove-stem-btn',
    'credits-btn':'remove-credits-btn',
    'concepts-btn':'remove-concepts-btn'
}
const buttonsAndGoToLocations = {
    'idea-btn': document.getElementById('idea'),
    'steps-btn': document.getElementById('steps'),
    'results-btn': document.getElementById('results'),
    'stem-btn': document.getElementById('stem-education'),
    'credits-btn': document.getElementById('credits'),
    'concepts-btn': document.getElementById('key-concepts')
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
    if(window.scrollY>0){
        goBackBtn.classList.remove('hidden');
    }
    else{
        goBackBtn.classList.add('hidden')
    }
})
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(element => observer.observe(element));
});
