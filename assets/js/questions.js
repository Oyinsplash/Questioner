// variables for the yes and no buttons user for any meeting
let scheduleBtn = document.getElementById('yesStatus');
let unScheduleBtn = document.getElementById('noStatus');
let scheduleStatus = document.getElementById('scheduleStatus');
let upvoteBtn = document.getElementById('upVoteBtn');
let upDownVoteBtn = document.getElementById('downVoteBtn');
let commentsBtn = document.getElementById('commentsBtn');
let lineBreak = document.createElement('br');
let questionSectionContainer =document.getElementById('questionSectionWrapper');
let commentBtn = document.getElementById('commentsVoteBtn');
let upBtn = document.getElementById('upvoteBtn');
let downBtn = document.getElementById('downvoteBtn');
let comentSection = document.querySelector('.question-comments-section');
let voteCase= document.querySelector('.vote-record');
//event for show comments
commentBtn.addEventListener('click',()=>{
    if(comentSection.classList.contains('display-none')){
        comentSection.classList.remove('display-none');
        commentBtn.innerText = 'hide comments';
    }else{
        comentSection.classList.add('display-none');
        commentBtn.innerText = 'show comments';
    }
})
upBtn.addEventListener('click',()=>{
 let val = parseInt(voteCase.textContent)+ 1;
 voteCase.textContent = val;
})
downBtn.addEventListener('click',()=>{
   if(parseInt(voteCase.textContent) > 0){
    let val = parseInt(voteCase.textContent) - 1;
    voteCase.textContent = val;
   }
    
   })
// variables for the new Question submission
let formQuestion = document.getElementById('formQuestion');
//TextArea variable for questions field
let textAreaToInput = document.getElementById('textArea');
let mimicSpan = document.createElement('span');
let questionSection =document.getElementById('questionSection');


//

//defining function to create Question
let createQuestion = (newQuestion, ByWhom = 'Tolu Adeolu',TimeAsked ="2hrs ago")=>{
    //creating question and comment container div
    let questionCommentWrapper = document.createElement('div');
    questionCommentWrapper.className = 'question-asked-comment-summary';
   // creating main question div
    let questionWrapper = document.createElement('div');
    questionWrapper.className = 'question-asked-summary';
    // creating existing comment div
    let existingCommentsWrapper = document.createElement('div');
    existingCommentsWrapper.className = 'question-comments-section';
    //creating comments input entry div
    let commentTextAreaWrapper = document.createElement('div');
    commentTextAreaWrapper.className = 'add-new-comment-section';

    //Creating child elements for main question paragraph
    let questionParagraph = document.createElement('p');
    questionParagraph.className = 'question-asked-container';
    
    let questionAsked = document.createElement('span');
    questionAsked.className = 'question-asked';
    questionAsked.textContent =newQuestion;
   
    let questionAskedBy = document.createElement('span');
    questionAskedBy.className = 'question-by-details';
    questionAskedBy.textContent =`By ${ByWhom}`;

    let questionAskedTime = document.createElement('span');
    questionAskedTime.className = 'question-by-details';
    questionAskedTime.textContent =`${TimeAsked}`;
    // appending child elements to main question paragraph
    questionParagraph.appendChild(questionAsked);
    questionParagraph.appendChild(lineBreak);
    questionParagraph.appendChild(questionAskedBy);
    questionParagraph.appendChild(questionAskedTime);

// creating  button array and vote indication section
let btnArrayDiv = document.createElement('div');
btnArrayDiv.className = 'question-btn-array';
//creating elements of button array div
let btnWrapper = document.createElement('div');

let btnForUpVote = document.createElement('button');
btnForUpVote.className = 'upvote-btn';
btnForUpVote.id = 'upvoteBtn';
btnForUpVote.innerText = 'upvote';

let btnForDownVote = document.createElement('button');
btnForDownVote.className = 'downvote-btn';
btnForDownVote.id = 'downvoteBtn';
btnForDownVote.innerText = 'downvote';

let showComments = document.createElement('button');
showComments.className = 'comments-btn';
showComments.id = 'commentsVoteBtn';
showComments.innerText = 'comments';
// appending child elements to button array div
btnWrapper.appendChild(btnForUpVote);
btnWrapper.appendChild(btnForDownVote);
btnWrapper.appendChild(showComments);

let voteRecordWrapper = document.createElement('div');
voteRecordWrapper.className = 'vote-record';
voteRecordWrapper.textContent = '0';
// appending child elements to button array and vote indication section
btnArrayDiv.appendChild(btnWrapper);
btnArrayDiv.appendChild(voteRecordWrapper);

//creating element for the add new comment section
let formForComment = document.createElement('form');
formForComment.className ='form-question-comment';
formForComment.id = 'formQuestionComment';
let textAreaForComment = document.createElement('textarea');
textAreaForComment.className ='new-question-comment';
textAreaForComment.id = 'textAreaComment';
textAreaForComment.placeholder ="Add a comment...";
textAreaForComment.rows = 1;
//appending child elements to form for comment
formForComment.appendChild(textAreaForComment);

//appending child elements to add new comment section
commentTextAreaWrapper.appendChild(formForComment);

//appending child elements to main question div
questionWrapper.appendChild(questionParagraph);
questionWrapper.appendChild(btnArrayDiv);
//appending all parent elements to question root parent
questionCommentWrapper.appendChild(questionWrapper);
questionCommentWrapper.appendChild(existingCommentsWrapper);
questionCommentWrapper.appendChild(commentTextAreaWrapper);

//appending parent to body
questionSectionContainer.appendChild(questionCommentWrapper);
}




//height settings
let heightQuestion = () =>{
    formQuestion.style.minHeight = textAreaToInput.offsetHeight + 'px';
    questionSection.style.minHeight = textAreaToInput.offsetHeight + 'px';
}
// parseFloat(window.getComputedStyle(txt, null).getPropertyValue('padding-left'))

heightQuestion();

//Defining function that assigns mimicry properties to span
let mimicMeasure = () =>{
    mimicSpan.style.maxWidth = window.getComputedStyle(textAreaToInput, null).getPropertyValue('width');
    mimicSpan.style.width = window.getComputedStyle(textAreaToInput, null).getPropertyValue('width');
    mimicSpan.style.fontSize = window.getComputedStyle(textAreaToInput, null).getPropertyValue('font-size');
   mimicSpan.style.fontFamily = window.getComputedStyle(textAreaToInput, null).getPropertyValue('font-family');
   mimicSpan.style.overflowY = window.getComputedStyle(textAreaToInput, null).getPropertyValue('overflow-y');
   mimicSpan.style.minHeight = window.getComputedStyle(textAreaToInput, null).getPropertyValue('height');
   mimicSpan.style.padding =window.getComputedStyle(textAreaToInput, null).getPropertyValue('padding');
   mimicSpan.style.minWidth = window.getComputedStyle(textAreaToInput, null).getPropertyValue('min-width');
   mimicSpan.style.border = window.getComputedStyle(textAreaToInput, null).getPropertyValue('border');
   mimicSpan.style.boxSizing = window.getComputedStyle(textAreaToInput, null).getPropertyValue('box-sizing');
}

//TextArea variable for comments
let commentWrapper = document.querySelector('.add-new-comment-section');
let mimicSpanComment = document.createElement('span');
let textAreaComment = document.getElementById('textAreaComment');
let formQuestionComment = document.getElementById('formQuestionComment');

//height settings for comments container
let heightQuestionComment = () =>{
    formQuestionComment.style.minHeight = textAreaComment.offsetHeight + 'px';
    commentWrapper.style.minHeight = textAreaComment.offsetHeight + 'px';
}
heightQuestionComment();
//Defining function that assigns mimicry properties to span of the comments section
let commentMimicMeasure = () =>{
    mimicSpanComment.style.maxWidth = window.getComputedStyle(textAreaComment, null).getPropertyValue('width');
    mimicSpanComment.style.width = window.getComputedStyle(textAreaComment, null).getPropertyValue('width');
    mimicSpanComment.style.fontSize = window.getComputedStyle(textAreaComment, null).getPropertyValue('font-size');
    mimicSpanComment.style.fontFamily = window.getComputedStyle(textAreaComment, null).getPropertyValue('font-family');
    mimicSpanComment.style.overflowY = window.getComputedStyle(textAreaComment, null).getPropertyValue('overflow-y');
    mimicSpanComment.style.minHeight = window.getComputedStyle(textAreaComment, null).getPropertyValue('height');
    mimicSpanComment.style.padding =window.getComputedStyle(textAreaComment, null).getPropertyValue('padding');
    mimicSpanComment.style.minWidth = window.getComputedStyle(textAreaComment, null).getPropertyValue('min-width');
    mimicSpanComment.style.border = window.getComputedStyle(textAreaComment, null).getPropertyValue('border');
    mimicSpanComment.style.boxSizing = window.getComputedStyle(textAreaComment, null).getPropertyValue('box-sizing');
}

//Defining eventHandler functions for yes and no buttons
let confirmAttendance =()=>{
// Todo
//if todo is successful
if(scheduleStatus.classList.contains('display-none')) scheduleStatus.classList.remove('display-none');
}

let confirmNotAttending =()=>{
    // Todo
//if todo is successful
if(!scheduleStatus.classList.contains('display-none')) scheduleStatus.classList.add('display-none');

}
//eventHandlers for yes and no button
scheduleBtn.addEventListener('click', confirmAttendance);
unScheduleBtn.addEventListener('click', confirmNotAttending);

//adding class to mimic span & appending it to body
mimicSpan.classList.add('span-mimic');
formQuestion.appendChild(mimicSpan);
mimicMeasure();
//onkeyup events for question input field
textAreaToInput.addEventListener('keyup',(e)=>{
    mimicSpan.textContent =e.target.value;
    e.target.style.height = window.getComputedStyle(mimicSpan, null).getPropertyValue('height');
})
//keypress events for question input field
textAreaToInput.addEventListener('keypress',(e)=>{
  if(e.which === 13 && !e.shiftKey)
  {
      e.target.form.dispatchEvent(new Event('submit',{cancelable:true}));
      e.preventDefault();
  }
})
//function that adds height settings to dynamically created comment section wrappers
let dynamicWrapSet =()=>{
    let allQuestionWrappers = document.querySelectorAll('.add-new-comment-section');
    let allQuestionForms = document.querySelectorAll('#formQuestionComment');
    allQuestionWrappers.forEach((element)=>{
        if(window.getComputedStyle(element, null).getPropertyValue('height') === '0px')
        {
            element.style.height = textAreaComment.offsetHeight + 'px';
        }
    })
    allQuestionForms.forEach((element)=>{
        if(window.getComputedStyle(element, null).getPropertyValue('height') === '0px')
        {
            element.style.height = textAreaComment.offsetHeight + 'px';
        }
    })
}
// eventHandlers for new question input
formQuestion.addEventListener('submit',(e)=>{
     e.preventDefault();
    createQuestion(textAreaToInput.value);
    dynamicWrapSet();
    textAreaToInput.value="";
})

   //adding class to mimic span & appending it to body
    mimicSpanComment.classList.add('span-mimic');
    formQuestionComment.appendChild(mimicSpanComment);
    commentMimicMeasure();
    textAreaComment.addEventListener('keyup',(e)=>{
        mimicSpanComment.textContent =e.target.value;
        // formQuestionComment.style.minHeight= window.getComputedStyle(mimicSpanComment, null).getPropertyValue('height');
        e.target.style.height = window.getComputedStyle(mimicSpanComment, null).getPropertyValue('height');
    })
    
//eventHandlers for new comments input
formQuestionComment.addEventListener('submit',(e)=>{
    e.preventDefault();
    });
    
