import {Component} from '@angular/core';
@Component(
    {
        selector:'user-compo',
        template:`
        <div class = "container">
        <div class= "row">
        <h2>The Array of object of triggered event is displayed here</h2>
        <ul>
        <li *ngFor ="let inDetails of incomingDetailsOnEvent">
        {{inDetails.UserId+' '+inDetails.Username+' '+inDetails.UserEmail}}
        </li>
        </ul>
        </div>
        <div class ="row">
        <h3>The array of object as well as input goes here </h3>
        <AllUser-compo [inputDetails] ="details" (item) = "AddDetails($event)"></AllUser-compo>


        </div>
        </div>
        
        
        `,
        styles:[``]
    }
)

export class UserComponent{

    // public username:string="Amita";
    public details:any;
    public incomingDetailsOnEvent:any;
  
    
    constructor(){
       function UserDetails(){
        let userUserDetails = [
            {
                id:1,
                name :'Amita',
                email:'A@gmail.com'
            },
            {
                id:2,
                name :'Neha',
                email:'n@gmail.com'
            },
            {
                id:3,
                name :'Seemaa',
                email:'s@gmail.com'
            },
            {
                id:4,
                name :'NAina',
                email:'na@gmail.com'
            },
            {
                id:5,
                name :'Prajwal',
                email:'p@gmail.com'
            },
            {
                id:6,
                name :'Govind',
                email:'g@gmail.com'
            },
            {
                id:7,
                name :'Bikhaji',
                email:'b@gmail.com'
            },
            {
                id:8,
                name :'Pingu',
                email:'p@gmail.com'
            },
            {
                id:9,
                name :'kittu',
                email:'k@gmail.com'
            },
            {
                id:10,
                name :'mania',
                email:'m@gmail.com'
            }
        ]
      return userUserDetails;  
           
       }
    this.details = UserDetails();

    };
    AddDetails(data){
        this.incomingDetailsOnEvent=data;
    };
}