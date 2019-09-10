import { Component } from '@angular/core';
import { CourseExClass } from './classCourse';
@Component({
    selector: 'app_course',
    template: `
    <h2>{{myName}}</h2>
    <ul 
    [style.color]="toHighlight? 'red':'blue'">
    <li *ngFor = "let course of courseName">
    {{course}}
    </li> 
    </ul>


    <ul 
    [ngStyle]="{
        color : toHighlight ? 'pink':'yellow',
        fontSize : toHighlight ? '25px':'40px'
    }"
    (click)= "Action()"
    >
    <li *ngFor = "let course1 of courseObj">
    {{course1}}
    </li> 
    </ul>

    <div 
    
    [ngClass]="{
        content: toHighlight,
        content1: !toHighlight
    }"
    > HEllO</div>
    <span class="fa fa-5x"
    [class.fa-heart-o]="!activeHeart"
    [class.fa-heartbeat]="activeHeart"
    (click)=HeartLike()
    >
    </span>
    `,
    styles: [`
    .content {
        width:200px;
        height:50px;
        background-color:red;
    }
    .content1 {
        width:100px;
        height:100px;
        background-color:blue;
    }
    
    `],

})

export class CourseComponent {
    public myName: string = "This displays my Name";
    public courseName: Array<string> = ['Javascript', 'Html', 'Css', 'Bootstrap'];
    public courseObj: Array<string>;
    public toHighlight: boolean = true;
    public activeHeart:boolean=false;

    constructor(private courseVar: CourseExClass) {
        this.courseObj = courseVar.getCourse();
        //this is tight copuling for class use dependancy injection
        // let courseObj = new CourseExClass();
        // this.courseObj = courseObj.getCourse();

    };

    Action() {
        this.toHighlight = !this.toHighlight;
    }
    HeartLike(){
        this.activeHeart=!this.activeHeart;

    }
}