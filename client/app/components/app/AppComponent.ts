import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {HomeComponent} from '../home/HomeComponent'
import {AboutComponent} from '../about/AboutComponent'
import {HeroListComponent}     from '../heroes/HeroListComponent';
import {HeroDetailComponent}   from '../heroes/HeroDetailComponent';
import {HeroService}           from '../heroes/HeroService';
import {TestComponent}           from '../test/TestComponent';

@RouteConfig([
    {path: '/', component: HomeComponent, as: 'Home'},
    {path: '/about', component: AboutComponent, as: 'About'},
    {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
    {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
    {path: '/testpage', name: 'TestPage', component: TestComponent},
])

@Component({
    selector: 'my-app',
    template: `
    <h1 class="title">Component Router</h1>
    <nav>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['TestPage']">Test Page</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    providers:  [HeroService],
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    constructor(){
        console.log("We are up and running!");
    }

}