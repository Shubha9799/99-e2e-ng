import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getUserProfile(): any {
    throw new Error('Method not implemented.');
  }
  getUserListFromApi() {
    throw new Error('Method not implemented.');
  }

  constructor(private myhttp:HttpClient) { }
  getUserList(){
    return this.myhttp.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8');
  }

  //To connect to backend 
  getProfiles() {

    return this.myhttp.get('http://localhost:4200/api/users') //obs
       
 
   }

   submitContactDetails(data: any) {

    return this.myhttp.post('http://localhost:4200/api/users/contact', data);
   }
 
}
