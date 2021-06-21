import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { FlashService } from './flash.service';
import { tap } from 'rxjs/operators';
import { IFlash } from './flash.model'; // to remove later

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

  @ViewChild('flashform', {static: false}) flashForm: NgForm;
  editing = false;
  editingId: any;
  flash = {
    question: '',
    answer: '',
  }
  flashs$;
  flashs: any;

  constructor(private flashService: FlashService) {
    this.flashs$ = this.flashService.flashs$;
  }

  trackByFlashId(index: any, flash: { id: any; }) {
    return flash.id;
  }

  handleClear() {
    this.flash = {
      question: '',
      answer: '',
    };
    this.flashForm.reset();
  }

  handleCancel() {
    this.editing = false;
    this.editingId = undefined;
    this.handleClear()
  }

  handleSubmit(): void {
    this.flashService.addFlash(this.flash);
    this.handleClear();
  }

  handleToggleCard(id: number) {
    this.flashService.toggleFlash(id);
  }

  handleDelete(id: number) {
    this.flashService.deleteFlash(id);
  }

  handleEdit(id: number) {
    this.flash = this.flashService.getFlash(id);
    this.editing = true;
    this.editingId = id;
  }

  handleUpdate() {
    this.flashService.updateFlash(this.editingId, this.flash);
    this.handleCancel();
  }

  handleRememberedChange({ id, flag }) {
    this.flashService.rememberedChange(id, flag);
  }
}
