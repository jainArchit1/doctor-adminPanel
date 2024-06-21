const QuizeQuestion = () => {
  type QuizeQuestion = {
    question: string;
    options: string[];
    correctOption: number;
  };
  const QuizeQuestions: QuizeQuestion[] = [
    {
      question: "What is the capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      correctOption: 0,
    },
  ];

    type quizeChecker = (QuizQuestion: QuizeQuestion, userAnswer: number) => boolean{
       const AnswerChecker:quizeChecker 
  };

  return <div></div>;
};

export default QuizeQuestion;
