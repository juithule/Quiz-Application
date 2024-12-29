import { Injectable } from '@angular/core';

const USER ='q_user';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {

  constructor() { }

 static saveUser(user:any): void{
  window.localStorage.removeItem(USER);
  window.localStorage.setItem(USER, JSON.stringify(user));
 }

 
 static getUser(): any | null {
  const userData = localStorage.getItem(USER); // Get data from localStorage
  if (!userData) {
    return null; // Return null if no data exists
  }

  try {
    return JSON.parse(userData); // Parse and return the data
  } catch (error) {
    console.error("Error parsing user data from localStorage:", error);
    return null; // Return null if parsing fails
  }
}


 static getUserId(): string{
 const user = this.getUser();
 if(user ==null){return '';}
 return user.id;
 }

 static getUserRole(): string{
  const user = this.getUser();
  if(user ==null){return '';}
  return user.role;
 }

 static isAdminLoggedIn(): boolean{
  const role:string = this.getUserRole();
  return role =='ADMIN';
 }

 static isUserLoggedIn(): boolean{
  const role:string = this.getUserRole();
  return role == 'USER';
 }

 static signOut(): void{
  window.localStorage.removeItem(USER);
 }
}
