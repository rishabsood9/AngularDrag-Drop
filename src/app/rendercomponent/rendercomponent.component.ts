import { transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rendercomponent',
  templateUrl: './rendercomponent.component.html',
  styleUrls: ['./rendercomponent.component.css'],
})
export class RendercomponentComponent implements OnInit {
  constructor() {}
  elemet = [];
  ngOnInit(): void {}
  drop(event: any) {
    console.log(event);
  }
}
