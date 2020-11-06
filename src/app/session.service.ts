import { Injectable } from '@angular/core';
import { ProgManager, Student, User } from './signup/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  aUserInSession: User;

  constructor() { 
  }

  setCurrentUserInSession(aTypeOfUser: User) {
    this.aUserInSession = aTypeOfUser;
  }

  getCurrentUserInSession () {
    return `Welcome to the dashboard. You are a ${this.aUserInSession.user.userType}
    with email ${this.aUserInSession.user.email}`;
  }
}
