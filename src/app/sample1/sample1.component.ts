import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample1',
  templateUrl: './sample1.component.html',
  styleUrls: ['./sample1.component.css']
})
export class Sample1Component implements OnInit {
  elemet=['S1','S2','S3']
  constructor() { }

  ngOnInit(): void {
  }

}
