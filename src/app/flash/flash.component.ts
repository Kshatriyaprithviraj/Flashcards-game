import { Component, OnInit, Input } from '@angular/core';
import {IFlash} from './../flash/flash.model';

@Component({
  selector: 'app-flash',
  templateUrl: './flash.component.html',
  styleUrls: ['./flash.component.css']
})
export class FlashComponent implements OnInit {

  @Input() flash: IFlash = {
    id: 1,
    question: 'React to Angular',
    answer: 'No React-ion',
    show: 'false'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
