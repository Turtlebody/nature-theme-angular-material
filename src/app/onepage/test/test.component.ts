import { Component } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { HoverAnim } from './hover-animation';
import { DivAnim } from './div-animation';
@Component({
    selector: 'test-view',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss'],

    animations: [
        HoverAnim.hoverAnim,
        DivAnim.divAnim
    ]
})

export class TestComponent {


    constructor() { }

    state: string = 'small';

    animateMe($event, state) {
        this.state = state;//(this.state === 'small' ? 'large' : 'small');
    }


    divstate: string = "smaller";
   animate() {
      this.divstate= this.divstate == 'larger' ? 'smaller' : 'larger';
   }
}