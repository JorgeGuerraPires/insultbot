import { Component, Input } from '@angular/core';
import { input } from '@tensorflow/tfjs';

@Component({
  selector: 'app-speedo-meter',
  templateUrl: './speedo-meter.component.html',
  styleUrls: ['./speedo-meter.component.scss']
})
export class SpeedoMeterComponent {

  @Input() speedScore: number = 0; //min : 0; max: 100

  readingSpeed!: number;
  niddleSpeed!: number;


  constructor() { }

  updateSpeed() {
    this.readingSpeed = Math.round(this.speedScore * 180 / 100) - 45;
    this.niddleSpeed = Math.round(this.speedScore * 180 / 100) - 90;
  }

  getSpeed(speed: any) {
    this.speedScore = speed;
    this.updateSpeed();
  }




}
