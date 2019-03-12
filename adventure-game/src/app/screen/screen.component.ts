import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
  encapsulation: ViewEncapsulation.None,
})

//Encapsulation is set to None to allow my styles to affect the INNER HTML element
// By default its set to Emulated.
export class CombatMoudle {
  public hp:number = 10;
  
  constructor(public bossHp:number, public bossAc:number){}
  
  public attack(){
    var roll:number = Math.floor(Math.random() * 20) + 1;

    if(roll > this.bossAc){

    }
  }

}

export class ScreenComponent implements OnInit {
  private current_page:string = '0';
  public screen_class:string = "container screen";


  public getCurrentScene(){
    if(this.current_page == '3'){
      this.screen_class = "container screen shake-hard shake-constant";
    }else{
      this.screen_class = "container screen";
    }
    return this.current_page
  }

  public getCurrentBtn(buttonNumber:string){
    var currentPage:string = this.getCurrentScene();
    if(buttonNumber== '1'){
      return this.story[this.current_page].btn1_text
    }
    else if(buttonNumber== '2'){
      return this.story[this.current_page].btn2_text
    }
    else if(buttonNumber== '3'){
      return this.story[this.current_page].btn3_text
    }
  }
  
  public changeScene(scene:string){
    if(scene == 'btn1'){
      this.current_page = this.story[this.current_page].btn1;
    }
    else if(scene == 'btn2'){
      this.current_page = this.story[this.current_page].btn2;

    } else if(scene == 'btn3'){
      this.current_page = this.story[this.current_page].btn3;
    }
    
  }
  story:any={
    '0':{
      "text":"<p>You wake up in a dark place.Everything feels fuzzy...</p><p>Before you are able to take a step, a young man walks up to you. He seems distressed.</p><p>Can you hear me?</p>",
      "btn1_text":'Yes',
      "btn2_text":'Where am I?',
      "btn3_text":'...',
      "image":"assets/img/aladin_worried.gif",
      "btn1":"1",
      "btn2":"1",
      "btn3":"0.a"
  },
  '0.a':{
    "text":"<p>'Still sleeping huh?'.'Here goes nothing...'</p><p>The boy smacks you over the head.Suprisingly the impact hurts quite a bit.You cry a little.</p><p>Your now awake</p>",
    "btn1_text":'Ouch',
    "btn2_text":'Ouchie',
    "btn3_text":'Ack!!',
    "image":"assets/img/aladin_punch.gif",
    "btn1":"1",
    "btn2":"1",
    "btn3":"1"
},
  '1':{
    "text":"<p>'You can talk! Hurray!'The boy jumped in excitement then quickly composed himself. </p><p>'I apologize....your the first person to talk back in days!'</p>",
    "btn1_text":'Continue',
    "btn2_text":'',
    "btn3_text":'',
    "image":"assets/img/aladin_happy.gif",
    "btn1":"2",
    "btn2":"2",
    "btn3":"2"
  },
  '2':{
    "text":"<p>His happiness was short lived. His tone turned serious</p><p>'I am not sure where I am either, or how I got here'</p><p>'I woke up not long ago.'</p>",
    "btn1_text":'Whats your name?',
    "btn2_text":'How long have you been here?',
    "btn3_text":'Time to escape',
    "image":"assets/img/aladin_worried.gif",
    "btn1":"2.a",
    "btn2":"2.b",
    "btn3":"2.c"
  },
  '2.a':{
    "text":"<p>My name is Aladin, I'm a mage as far as I remember.</p><p>'Although I can't seem to remember any spells...'</p><p>Some mage I turned out to be huh?, hehehe</p>",
    "btn1_text":'Your a Mage?',
    "btn2_text":'Can you teleport us out?',
    "btn3_text":'',
    "image":"assets/img/aladin_happy.gif",
    "btn1":"2.c",
    "btn2":"2.b"
  },
  '2.b':{
    "text":"<p>'About four hours or so I'd say. I wandered the cave in search for an exit'</p><p>'I spent a few minutes debating to approach you'</p><p>'You didnt turn out to be a monster and thats a relief!'</p>",
    "btn1_text":'Whats your name?',
    "btn2_text":'How long have you been here?',
    "btn3_text":'Time to escape',
    "image":"assets/img/aladin_worried.gif",
    "btn1":"2.a",
    "btn2":"2.b",
    "btn3":"3"
  },
  '2.c':{
    "text":"<p>'I think so. I can remember that much'</p><p>'Although I can only remember some card tricks...'</p><p>'Im sure it'll come back to me, for our sakes hahaha!</p>",
    "btn1_text":'Thats not funny',
    "btn2_text":'Can you teleport us out?',
    "btn3_text":'Time to escape',
    "image":"assets/img/aladin_happy.gif",
    "btn1":"2.e",
    "btn2":"2.d",
    "btn3":"3"
  }, 
  '2.d':{
    "text":"<p>'Not at all'</p><p>'But I can do this'</p><p>He placed his hands together and with a swift motion it looked like his thumb was severed.He closed his eyes and smiled proudly.</p><p>You've already seen this trick before</p>",
    "btn1_text":'Time to escape',
    "btn2_text":'',
    "btn3_text":'',
    "image":"assets/img/aladin_happy.gif",
    "btn1":"3",
    "btn2":"3",
    "btn3":"3"
  },  
  '2.e':{
    "text":"<p>'Its really not'</p><p>'We might die.'</p>",
    "btn1_text":'Time to escape',
    "btn2_text":'Can you teleport us out?',
    "btn3_text":'',
    "image":"assets/img/aladin_super_worried.gif",
    "btn1":"3",
    "btn2":"2.d",
    "btn3":"3"
  },
  '3':{
    "text":"<p>'Lets do this best buddy! Aladin is with you all the way!'</p><h1>Charge!</h1>",
    "btn1_text":'Continue',
    "btn2_text":'',
    "btn3_text":'',
    "image":"assets/img/aladin_happy.gif",
    "btn1":"3.a",
    "btn2":"3.a",
    "btn3":"3.a"
},
'3.a':{
  "text":"<h1>'WAAAAIT!!'</h1><p>Aladin janks you back, scaring the lights out of you!</p>",
  "btn1_text":'What!?',
  "btn2_text":'Ahhhh!',
  "btn3_text":'ALADIN!!',
  "image":"assets/img/aladin_super_worried.gif",
  "btn1":"3.b",
  "btn2":"3.b",
  "btn3":"3.b"
},
'3.b':{
  "text":"<p>I forgot to mention, the cave is full of monsters!</p><p>I sneaked past a few on my way here.</p>",
  "btn1_text":'Thanks for the heads up',
  "btn2_text":'You just remembered that?!',
  "btn3_text":'How could you forget THAT?',
  "image":"assets/img/aladin_worried.gif",
  "btn1":"4",
  "btn2":"3.c",
  "btn3":"3.c"
},
'3.c':{
  "text":"<p>Lack of vitamin D will do that to you.</p><p>You know how it is! heheheh",
  "btn1_text":'Thanks for the heads up',
  "btn2_text":'I really dont...',
  "btn3_text":'Thats not how it works...',
  "image":"assets/img/aladin_happy.gif",
  "btn1":"4",
  "btn2":"3.d",
  "btn3":"3.d"
},
'3.d':{
  "text":"<p>Your no fun!</p>",
  "btn1_text":'Lets move on!',
  "btn2_text":'',
  "btn3_text":'',
  "image":"assets/img/aladin_pout.gif",
  "btn1":"4",
  "btn2":"4",
  "btn3":"4"
},
'4':{
  "text":"<p>You begin your journey down the mysterious cave. You walk for what seems like an eternity</p><p>The cave opens up a bit with glowing mushrooms illuminating the path.Minutes turn into hours</p><p>You hear what sounds like a stream and together with Aladin you head towards the sound.</p><p>The sound reminds you both just how terribly thirsty you are.</p>",
  "btn1_text":'Continue',
  "btn2_text":'',
  "btn3_text":'',
  "image":"",
  "btn1":"4.a",
  "btn2":"4.a",
  "btn3":"4.a"
},
'4.a':{
  "text":"<p>The caves opens up more and before you what looks like a giant lake. The water is crystaline and a glow from underwater mushrooms makes it illuminate the cave</p><p>You and Aladin both turn to eachother and smile</p><p>Its not an exit but you cant help but feel relif at the sight.</p>",
  "btn1_text":'Continue',
  "btn2_text":'',
  "btn3_text":'',
  "image":"",
  "btn1":"4.b",
  "btn2":"4.b",
  "btn3":"4.b"

},
'4.b':{
  "text":"<p>'Hold it!'</p><p>Aladin says , as he stops abrutley. He turns his head sideways.</p><p>'Do you hear something?'</p><p>Now that he mentions it...you do hear something.Something else, from above</p>",
  "btn1_text":'Continue',
  "btn2_text":'',
  "btn3_text":'',
  "image":"assets/img/aladin_worried.gif",
  "btn1":"4.c",
  "btn2":"4.c",
  "btn3":"4.c"

},
'4.c':{
  "text":"<p>'From above a large creature descends. Standing at over 12 feet tall the two headed giant roars at you with one heead</p><p>The other head seems less excitable and lets out something closer to a 'nieh...'</p><p>The third scream comes from right next to you. Aladin's scream was somehow loader.",
  "btn1_text":'Ahhh!',
  "btn2_text":'Smack Aladin',
  "btn3_text":'Roar back',
  "image":"assets/img/twin_ogre_base.gif",
  "btn1":"5",
  "btn2":"4.d",
  "btn3":"5.b"

},
'4.d':{
  "text":"<p>'Ouch what was that for!?'</p>",
  "btn1_text":"I smack people when I'm scared",
  "btn2_text":'You scared me!',
  "btn3_text":'',
  "image":"assets/img/aladin_pout.gif",
  "btn1":"4.e",
  "btn2":"4.f",
  "btn3":"4.f"

},
'4.e':{
  "text":"<p>'You could of smackeed the giant instead! Im sure I lost some hp'</p>",
  "btn1_text":"Sorry",
  "btn2_text":'I regret nothing!',
  "btn3_text":'',
  "image":"assets/img/aladin_pout.gif",
  "btn1":"5",
  "btn2":"5",
  "btn3":"5"

},
'4.f':{
  "text":"<p>'Im sorry I didn't mean to do that'</p><p>Maybe I was a heavy metal singer!</p><p>That would explain these cords of mine!</p>",
  "btn1_text":"Sorry",
  "btn2_text":'I regret nothing!',
  "btn3_text":'',
  "image":"assets/img/aladin_happy.gif",
  "btn1":"5",
  "btn2":"5",
  "btn3":"5"
  },
  '5':{
    "text":"<span class='eye1'><p>'I've seen about enough here!</p><p>Who dares venture into our domain!</p><p>Eye shall see to it that you both perish! Mwhahaha</p></span><p>The face to the right turns to you both and says in a monotone voice</p><span class='eye2'><p>Eye...what he said</p></span>",
    "btn1_text":"Eye Caramba!",
    "btn2_text":'En garde you foul beast!',
    "btn3_text":'Aladin your up!',
    "image":"assets/img/twin_ogre_base.gif",
    "btn1":"5.a",
    "btn2":"5",
    "btn3":"5"
    },
    '5.a':{
      "text":"<p>The head looks at you for a straight minute. He then beams and lets out a large laught</p><span class='eye1'><p>'AYE CARAMBA! HAHAHA! Thats genius!!Did you hear that!?'</p></span><p>The face to the right sighs</p><span class='eye2'><p>Eye...very clever...</p></span><p>After a minute or so the left most brother calms down and turns back to you</p><span class='eye1'><p>'Eye apologize friend but we must eat you!'</p></span>",
      "btn1_text":"Perhaps I can be of some help?",
      "btn2_text":'En garde you foul beast!',
      "btn3_text":'Aladin your up!',
      "image":"assets/img/twin_ogre_base.gif",
      "btn1":"5.b",
      "btn2":"5",
      "btn3":"5"
      },
      '5.b':{
        "text":"<span class='eye2'><p>'What could you possibly offer...eye....?'</p></span><p>The left brother sighs and turns to the right</p><span class='eye1'><p>That irritates me, your not even trying anymore brother!</p></span><p>The two begin arguing almost forgetting you are there</p>",
        "btn1_text":'Sneak Attack!',
        "btn2_text":'Perhaps some counciling?',
        "btn3_text":'',
        "image":"assets/img/twin_ogre_base.gif",
        "btn1":"5.b",
        "btn2":"5.c",
        "btn3":"5"
        },
        '5.c':{
          "text":"<p>Both giants turn their attention to you. Wide eyed.</p>",
          "btn1_text":'Sneak Attack!',
          "btn2_text":'Perhaps some counciling?',
          "btn3_text":'',
          "image":"assets/img/twin_ogre_base.gif",
          "btn1":"5.b",
          "btn2":"5.c",
          "btn3":"5"
          },
      '6':{
        "text":"<p>The head looks at you for a straight minute. He then beams and lets out a large laught</p><span class='eye1'><p>'AYE CARAMBA! HAHAHA! Thats genius!!Did you hear that!?'</p></span><p>The face to the right sighs</p><span class='eye2'><p>Eye...very clever...</p></span><p>After a minute or so the left most brother calms down and turns back to you</p><span class='eye1'><p>'Eye apologize friend but we must eat you!'</p></span>",
        "btn1_text":"Eye cant belive that worked!",
        "btn2_text":'En garde you foul beast!',
        "btn3_text":'Aladin your up!',
        "image":"assets/img/twin_ogre_base.gif",
        "btn1":"5.b",
        "btn2":"5",
        "btn3":"5"
        },
    '6.a':{
      "text":"<p>The left head continous with thunderous laughter</p><span class='eye1'><p>'Eye love it! We cant possibly eat you now! I cant possibly LASH out at you after that!'</p></span><p>The face to the right looks up to the cave's endless darkness</p><span class='eye2'><p>Please kill me...</p></span><p>The giant seems pleased. He ask what you are doing here.</p>",
      "btn1_text":"Explain your situation",
      "btn2_text":'',
      "btn3_text":'',
      "image":"assets/img/twin_ogre_base.gif",
      "btn1":"5.c",
      "btn2":"5",
      "btn3":"5"
      },
      '6.b':{
        "text":"<span class='eye1'><p>'Eye see! We can help you cross this river. But beware up ahead is haunted</p></span><span class='eye2'><p>You can't miss it...</p></span><p>The left head beams and turns to his brother</p><span class='eye1'><p>'You did it brother!! I'm so proud of you!</p></span><p>The right brother didnt seem to realise his pun. He sighs</p>",
        "btn1_text":"Explain your situation",
        "btn2_text":'',
        "btn3_text":'',
        "image":"assets/img/twin_ogre_base.gif",
        "btn1":"5.c",
        "btn2":"5",
        "btn3":"5"
        }
};
  
  constructor() { }

  ngOnInit() {
  }

}
