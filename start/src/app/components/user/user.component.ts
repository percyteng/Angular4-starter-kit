import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;
  posts:Post[];
  isEdit:boolean = false;

  constructor(private dataService:DataService) { 
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ng on init')
    this.name = 'Percy Teng';
    this.age=22;
    this.email='percytsy@gmail.com';
    this.address = {
      street: '548 Johnson st',
      city: 'Kingston',
      state: 'ON'
    }
    this.hobbies = ['write code', 'break dance', 'music'];
    this.hello = true;
    this.dataService.getPosts().subscribe((posts)=>{
      this.posts=posts;
    })
  }
  onClick(){
    this.hobbies.push('damnnnn');
  }
  addHobby(val){
   this.hobbies.unshift(val);
   return false;
  }
  deleteHobby(hobby){
    this.hobbies.forEach((element, i) => {
      if (element === hobby)
        this.hobbies.splice(i, 1)
    });
  }
  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}
interface Address{
  street: string,
  city: string,
  state: string
}
interface Post{
  id: number,
  title:string,
  body: string,
  userId: number
}