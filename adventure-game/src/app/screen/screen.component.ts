import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
  encapsulation: ViewEncapsulation.None,
})

//Encapsulation is set to None to allow my styles to affect the INNER HTML element
// By default its set to Emulated.

export class ScreenComponent implements OnInit {
  story:any=[{
    "page_number":0,
    "text":"<h1>Hello world</h1>\n<p>This is page 1</p>",
    "button1":1,
    "button2":1,
    "button3":3
  }];
  
  constructor() { }

  ngOnInit() {
  }

}
