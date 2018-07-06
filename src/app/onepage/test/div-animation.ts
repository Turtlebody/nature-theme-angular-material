import { Component } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationTriggerMetadata
} from '@angular/animations';

export const DivAnim : {
    readonly divAnim : AnimationTriggerMetadata;
}={
    divAnim:  trigger('myanimation',[
        state('smaller',style({
           transform : 'translateY(100px)'
        })),
        state('larger',style({
           transform : 'translateY(0px)'
        })),
        transition('smaller <=> larger',animate('300ms ease-in'))
     ])


};
    