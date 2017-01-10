import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
  moduleId: module.id,  
  selector: 'user',
  templateUrl: 'user.component.html',
  providers: [PostsService]
})
export class UserComponent  {
  name: string;
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts: Posts[];

constructor(private postsService: PostsService)   {
    this.name = 'Uddish';
    this.email = 'uddishverma22@gmail.com';
    this.address = {
        street : 'C Block', 
        city : 'Delhi',
        country: 'India'
        }
    this.hobbies = ['Football', 'Coding', 'Gaming'];   
    this.showHobbies = true; 

    this.postsService.getPosts().subscribe(posts => 
        this.posts = posts
    );
    }

toggleHobbies() {
    if(this.showHobbies == true)    {
        this.showHobbies = false;
    }
    else{
        this.showHobbies = true;
    }
}

addHobby(hobby) {
    this.hobbies.push(hobby);
}

deleteHobby(i)  {
    this.hobbies.splice(i, 1);    
}

}

interface address   {
    street: string;
    city: string;
    country: string;
}

interface Posts {
    id: number;
    title: string;
    body: string;
}
