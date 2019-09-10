import { Component, Input,EventEmitter,Output } from '@angular/core';
@Component(
    {
        selector: 'AllUser-compo',
        template: `
        <div class="container">
        <div class="row">
        <ul>
        <li *ngFor="let iDetails of inputDetails">
        {{iDetails.id +' '+ iDetails.name+' '+iDetails.email}}
        </li>
        </ul>
        </div>
        <div class = "row">
          <input type = "text" placeholder="Enter your id" #id>
          <input type = "text" placeholder="Enter your name" #name>
          <input type = "text" placeholder="Enter your email-id" #email>
          <br><br>
          <button type="submit" class="btn btn-primary" (click)="Data(id.value,name.value,email.value)" (click)="Action()">Submit
          </button>
        </div>
        </div>
          `,
        styles: [``]
    }
)

export class AllUserComponent {
    //    @Input() public name:string;
    public UserId:string;
    public Username:string;
    public UserEmail:string;
    
    @Input() public inputDetails;
    @Output() public item = new EventEmitter();
    public outputDetails;
    uId: string;
    uName: string;
    uEmail: string;

    constructor() {
        
        function ToCarryDetails(){
            let oDetails=[
                
                   this.UserId,
                   this.Username,
                   this.UserEmail
                
            ]
            return oDetails;
        }
this.outputDetails=ToCarryDetails();

    };
    Data(uId,uName,uEmail)
    {
        this.UserId=this.uId;
        this.Username=this.uName;
        this.UserEmail=this.uEmail;
        
    };
    Action(){
        this.item.emit(this.outputDetails);

    }
}