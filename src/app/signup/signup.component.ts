import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../session.service';
import {ProgManager, Student} from './interfaces'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  email: string;
  password:string;

  constructor( private router:Router, private aSesionService: SessionService) { }

  ngOnInit(): void {
  }

  onSubmit() {
      let aManager : ProgManager = {email: "test@email", password: "testpassword"}
      this.aSesionService.setProgramManager(aManager);
      this.router.navigate(['/dashboard'])
  }

}
