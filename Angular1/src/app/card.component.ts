 import { Component } from '@angular/core';
@Component({
    selector: 'card',
    template: `
<div class = "container">
<div class="card">
    
    <div class="card-header">
        <h4 class="card-title">Hi this is an Assignment</h4>
        
    </div>
    <img class="card-img-bottom" src="{{imgPath}}" alt="">
    <div class = "card-footer">
        <span align="center" class = "fa fa-5x" 
        (click)="Heartlike()"
         [class.fa-heart-o] ="!heartActive"
         [class.fa-heart] ="heartActive"></span>
    </div>
</div>
</div>


`,
    styles: [`
.container {
    width:250px;
    height:400px;
}

.card-header {
    color:blue;

}

span{
    text-align:center;
}

.fa-heart
{
   color:red;
}

`]
})

export class CardClass {
    public imgPath: string = "../assets/img/photo-1482304512605-d38212893111.jpg";
    public heartActive: boolean = false;
    constructor() {

    };

    Heartlike() {
        this.heartActive = !this.heartActive;
    }
}