import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FriendService {
  names = [''];
  descriptions = [''];
  imgs = [''];

  constructor() { }

  addFriend(name:string, description:string, img:string){
    this.names.push(name);
    this.descriptions.push(description);
    this.imgs.push(img);
  }
}
