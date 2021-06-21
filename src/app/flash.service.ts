import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IFlash } from './flash.model';

function getRandomNumber() {
  return Math.floor(Math.random() * 100000);
}

@Injectable({
  providedIn: 'root'
})
export class FlashService {

  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
      show: false,
      id: getRandomNumber(),
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
      show: false,
      id: getRandomNumber(),
    },
  ];

  flashs$ = new BehaviorSubject<IFlash[]>(this.flashs);

  constructor() {}

  // add a flashcard
  addFlash(flash: {question: string, answer: string}) {
    this.flashs = [
      ...this.flashs, {
        ...flash,
        show: false,
        id: getRandomNumber(),
      }
    ];
    this.flashs$.next(this.flashs);
  }

  // toggle a flashcard
  toggleFlash(id: number) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        show: !this.flashs[index].show
      },
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  // delete a flashcard, be it anytime in reference to the other methods
  deleteFlash(id: number) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  //rememeber a change bought into such as boolean(answer).
  rememberedChange(id: number, flag: 'correct' | 'incorrect') {
    const index = this.flashs.findIndex(flash => flash.id === id)
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        remembered: flag
      },
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  // update the flashcards.
  updateFlash(id: any, flash: {question: string, answer: string}) {
    const index = this.flashs.findIndex(f => f.id === id);
    this.flashs = [
      ...this.flashs.slice(0, index),
      {
        ...this.flashs[index],
        ...flash
      },
      ...this.flashs.slice(index + 1)
    ];
    this.flashs$.next(this.flashs);
  }

  // get flashcard
  getFlash(id: number) {
    const index = this.flashs.findIndex(flash => flash.id === id);
    return this.flashs[index];
  }
}
