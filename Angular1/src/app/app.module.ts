import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemplateformComponent } from './templateform/templateform.component';
import {FormsModule} from '@angular/forms';
import {CourseComponent} from './courses.component';
import {CourseExClass} from './classCourse';
import {ProductClass} from './product.component';
import {ProductList} from './productEx';
import {CardClass} from './card.component';
import {MaleFemaleComponent} from './male_female.component';
import {UserComponent} from './user.componenet';
import {AllUserComponent} from './AllUser.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateformComponent,
    CourseComponent,
    ProductClass,
    CardClass,
    MaleFemaleComponent,
    UserComponent,
    AllUserComponent
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CourseExClass,ProductList],
  bootstrap: [AppComponent]
})
export class AppModule { }
