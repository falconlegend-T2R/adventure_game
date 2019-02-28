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
  story:any={
    '0':{
      "text":"<p>You wake up in a dark place.Everything feels fuzzy...</p><p>Before you are able to take a step, a young man walks up to you. He seems distressed.</p><p>Can you hear me?</p>",
      "btn1_text":'Yes',
      "btn2_text":'Where am I?',
      "btn3_text":'...',
      "image":"assets/img/aladin_worried.gif",
      "btn1":"0.a",
      "btn2":"0.a",
      "btn3":"0.b"
  },
  '0.a':{
    "text":"<p>'You can talk! Hurray!'The boy jumped in excitement then quickly composed himself. </p><p>'I apologize....your the first person to talk back in days!'</p>",
    "btn1_text":'Continue',
    "btn2_text":'Continue',
    "btn3_text":'Continue',
    "image":"assets/img/aladin_happy.gif",
    "btn1":1,
    "btn2":1,
    "btn3":1
  },
  '0.b':{
    "text":"<p>His happiness was short lived. His tone turned serious</p><p>'I am not sure where I am either, or how I got here'</p><p>'I woke up not long ago.'</p>",
    "btn1_text":'Continue',
    "btn2_text":'Continue',
    "btn3_text":'Continue',
    "image":"assets/img/aladin_worried.gif",
    "btn1":1,
    "btn2":1,
    "btn3":1
  }
};
  
  constructor() { }

  ngOnInit() {
  }

}
