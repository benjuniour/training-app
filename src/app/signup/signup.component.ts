import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {ProgManager, Student, User} from './interfaces'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  email: string;
  password:string;
  sessionUser: User;

  constructor( private router:Router, private aSesionService: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      if (this.email.includes("@gmail.com")) {
        let aParticipant : Student = {email: this.email, password: this.password, userType:"Student"};
        this.sessionUser = {user: aParticipant};
      
      } else {
        let aManager : ProgManager = {email: this.email, password: this.password, userType:"Program Manager"};
        this.sessionUser = {user: aManager};
      }

      this.aSesionService.setCurrentUserInSession(this.sessionUser);
      this.router.navigate(['/dashboard'])
  }

}
