import { Component } from '@angular/core';
@Component({
    selector: 'male-female',
    template: `
    <div class="container">
       <div class="row" >
         <div class = "col-md" >
           <button type = "button" class = "btn btn-danger btn-md" (click)="gender=Male"
           [disabled]="gender==Male"
           >Male</button>
           
           <button type = "button" class = "btn btn-info btn-md" (click)="gender=Female"
           [disabled]="gender==Female"
           >Female</button>
           
       </div> 
       
       
      </div>
      <div *ngIf = "gender">
      <img src = "{{gender.pic}}"/>
           <h3>{{gender.name}}</h3>
</div>
      </div>
    

    
    `,
    styles: [``]

})

export class MaleFemaleComponent {
    public gender: any;
    public Male = {
        name: 'Amith',
        pic: '../assets/img/male.jpg'
    };
    public Female = {
        name: 'Amita',
        pic: '../assets/img/female.jpg'
    };
    constructor() { };
}