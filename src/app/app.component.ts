import { Component, OnInit } from '@angular/core';

//TensorFlow.js: pre-trained model
import * as toxicity from '@tensorflow-models/toxicity';


import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  moderationText = new FormControl('');

  moderation = "I am thinking, just a moment 🤖🤖";



  ngOnInit() {

    // this.moderate();

  }


  moderate() {

    // console.log(this.moderationText.value);

    //Tolerance
    const threshold = 0.01;

    //calling a method from our third-party library
    toxicity.load(threshold, []).then(model => {

      //now we use our model, parametrized
      model.classify(`${this.moderationText.value}`).then(predictions => {

        const aux = predictions.filter((elem: any) => elem.results[0].match);

        // console.log(aux);

        //Gathering the insults
        let aux_text = "";
        aux.forEach((elem) => { aux_text = aux_text + ", " + elem.label });
        // console.log(aux_text);
        this.moderation = aux_text !== "" ? aux_text : "I was unable to make the judgement, sorry.😅 To me, you are 😇";




      })

    })
  }//end of moderate()



}
