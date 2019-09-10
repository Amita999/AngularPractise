import { Component, OnInit } from '@angular/core';
import {Users} from '../shared/model/user.template';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
public model = new Users(); 
  constructor() { }

  ngOnInit() {
  }
  Save(data){
    console.log(data);
    
  }

}
