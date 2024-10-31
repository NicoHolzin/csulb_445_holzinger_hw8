// List of questions (statement + answer)
const questions = [
  {
  statement: "2+2?",
  answer: "2+2 = 4"
  },
  {
  statement: "In which year did Christopher Columbus discover America?",
  answer: "1492"
  },
  {
  statement:
  "What occurs twice in a lifetime, but once in every year, twice in a week but never in a day?",
  answer: "The E letter"
  }
  ];

  function exercice1() {
    //get element
    const contentDiv = document.getElementById('content');
    
    questions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      
      //display the question
      const questionStatement = document.createElement('p');
      questionStatement.textContent = `Question ${index + 1}: ${question.statement}`;
      questionDiv.appendChild(questionStatement);
      
      //display button
      const answerButton = document.createElement('button');
      answerButton.textContent = 'Show answer';
      
      //when clicked show answer and hide button
      answerButton.addEventListener('click', () => {
        const answerParagraph = document.createElement('p');
        answerParagraph.textContent = question.answer;
        
        questionDiv.removeChild(answerButton);
        questionDiv.appendChild(answerParagraph);
      });
      
      questionDiv.appendChild(answerButton);
      contentDiv.appendChild(questionDiv);
    });
  }
  
  exercice1();