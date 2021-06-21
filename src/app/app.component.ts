import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FlashService } from './flash.service';
import { IFlash } from './flash.model';

function getRandNumbers() {
  return Math.floor(Math.random() * 100000);
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Flashcards-game';
  editing = false;
  editingId: number | undefined;
  flash = {
    question: '',
    answer: '',
    show: '',
    id: '',
  }
  flashs: IFlash[] = [
    {
      question: 'Question 1',
      answer: 'Answer 1',
      show: false,
      id: getRandNumbers(),
    },
    {
      question: 'Question 2',
      answer: 'Answer 2',
      show: false,
      id: getRandNumbers(),
    },
    {
      question: 'Question 3',
      answer: 'Answer 3',
      show: false,
      id: getRandNumbers(),
    },
    {
      question: 'Question 4',
      answer: 'Answer 4',
      show: false,
      id: getRandNumbers(),
    },
    {
      question: 'Question 5',
      answer: 'Answer 5',
      show: false,
      id: getRandNumbers(),
    },
  ];

  trackByFlashId(index: any, flash: { id: any; }) {
    return flash.id;
  }

  handleToggleCard(id: number) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.show = !flash.show;
  }

  handleDelete(id: number) {
    const flashId = this.flashs.indexOf(flash => flash.id === id);
    this.flashs.splice(flashId, 1);
  }

  handleEdit(id: number) {
    this.editing = true;
    this.editingId = id;
  }

  handleRememberedChange({id, flag}) {
    const flash = this.flashs.find(flash => flash.id === id);
    flash.remembered = flag;
  }
}
