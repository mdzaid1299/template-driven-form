import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tempform';
  topics = ["c" , "c++", "java" ];
// binding html 
userModel = new User ("ting", "t@ing.pu", "7245627255" , "c" , "morning")
save(){
  alert("submitted")
}
}
