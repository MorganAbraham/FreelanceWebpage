import { Component } from '@angular/core';
import {
    trigger,
    state,
    style,
    animate,
    transition,
    query,
    keyframes,
    stagger
} from '@angular/animations';
import { PACKAGE_ROOT_URL } from '@angular/core/src/application_tokens';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [

        trigger('listAnimation', [
            transition('* => *', [

                query('.p-name-title', style({ opacity: 0 }), { optional: true }),
                query('.p-name-title', stagger('300ms', [
                    animate('1s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1 })
                    ]))]), { optional: true }),
                query(':enter', stagger('300ms', [
                    animate('1s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
                    ]))]), { optional: true }),

                query(':leave', stagger('300ms', [
                    animate('1s ease-in', keyframes([
                        style({ opacity: 1, transform: 'translateY(0px)', offset: 0 }),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
                        style({ opacity: 0, transform: 'translateY(-75px)', offset: 1 }),
                    ]))]), { optional: true })
            ])
        ]),

        trigger('explainerAnim', [
            transition('* => *', [
                query('.col', style({ opacity: 0, transform: 'translateX(-40px)' })),
                query('.col', stagger('500ms', [
                    animate('800ms 1.2s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
                ]))
            ])
        ])

    ]

})
export class HomeComponent{
    descriptions : String[] = [];
    constructor() {
        this.descriptions = ['Morgan Abraham', 'Software Engineer']; 
    }
}
