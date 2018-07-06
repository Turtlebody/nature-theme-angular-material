import { Component } from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition,
    AnimationTriggerMetadata
} from '@angular/animations';

export const HoverAnim : {
    readonly hoverAnim : AnimationTriggerMetadata;
}={
    hoverAnim: trigger('myAwesomeAnimation', [
        state('small', style({
            transform: 'scale(1)',
        })),
        state('large', style({
            transform: 'scale(1.2)',
        })),
        transition('small => large', animate('100ms ease-in')),
    ])


};
    