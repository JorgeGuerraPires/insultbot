import { Component, OnInit } from '@angular/core';

//TensorFlow.js: pre-trained model
import * as toxicity from '@tensorflow-models/toxicity';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';


  ngOnInit() {

    this.moderate();

  }


  moderate() {
    //Tolerance
    const threshold = 0.9;

    //calling a method from our third-party library
    toxicity.load(threshold, []).then(model => {

      //now we use our model, parametrized
      model.classify("You suck").then(predictions => {
        //Printing out the final result
        console.log(predictions);
        // console.log(predictions[0].results[0].match);
      })

    })
  }//end of moderate()



}
