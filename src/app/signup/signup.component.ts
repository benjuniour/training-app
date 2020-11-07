import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgManager, SessionService, Student } from '../session.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  email: string;
  password:string;
  sessionUser: Student | ProgManager; 
  isSignInErr: boolean = false;
  sigInErrorMessage: string;

  constructor( private router:Router, private aSesionService: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    //makes sure that an email and password is entered first
    if (this.email === "" 
            || this.email === undefined 
            || this.password === "" 
            || this.password === undefined) {
      this.isSignInErr = true;
      this.sigInErrorMessage = "Enter an email or password to proceed"
    
    } else {
        //user is a participant
        if (this.email.includes("@gmail.com")) {
            let aParticipant : Student = {email: this.email, password: this.password, userType:"Student"};
            
            //user is an enrolled participant
            if (this.aSesionService.isParticipantEnrolled(aParticipant)) {
                this.router.navigate(['/students'])
            } else {
                this.isSignInErr = true;
                this.sigInErrorMessage = "Invalid Student Email"
            }

        //user is a program manager
        } else {
              let aManager : ProgManager = {email: this.email, password: this.password, userType:"Program Manager"};
              console.log("Came here, created a a manager")
              //manager is a valid manager
              if (this.aSesionService.isManagerValid(aManager)) {
                // this.router.navigate(['/students']) change to prog manager

              } else {
                console.log("Came here, valid entry but not program manger")
                this.isSignInErr = true;
                this.sigInErrorMessage = "Invalid Program Manger email or password"
              }
              
        }
    }

  }

}
