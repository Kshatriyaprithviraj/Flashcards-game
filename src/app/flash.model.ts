export type IFlash = {
  question: String,
  answer: String,
  show: boolean,
  id: number,
  remembered?: 'correct' | 'incorrect'
};
