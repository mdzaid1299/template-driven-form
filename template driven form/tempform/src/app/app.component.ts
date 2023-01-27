import { Component } from '@angular/core';
import { User } from './user';
import { NgForm } from  '@angular/forms' ;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempform';
  topics = ["c" , "c++", "java" ];
// binding html 
submitted = false;
  user: any;
userModel = new User ("ting", "t@ing.pu", "7245627255" , "c" , "morning")
save(){
  alert("submitted")
}
onSubmit(userForm:NgForm){
  this.submitted = true;
}
}
