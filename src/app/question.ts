export class Question {
  questionText: string | undefined;
  options:
    | [
        {
          text: string;
          correct: boolean;
        },
        {
          text: string;
        },
        {
          text: string;
        },
        {
          text: string;
        }
      ]
    | undefined;
  explanation: string | undefined;
}
