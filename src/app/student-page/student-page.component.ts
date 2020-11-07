import { Component, OnInit } from '@angular/core';
import { ProgramEvent, SessionService, Student } from '../session.service';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {

  studentName: string;
  studentEmail: string;
  studentEvents: ProgramEvent[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    //get the student participant in session
    let studentInSession: Student = this.sessionService.getCurrentUserInSession();

    //use that information to retrieve their details
    this.studentName = studentInSession.name;
    this.studentEmail = studentInSession.email;

    //use their session information to retrieve their events
    this.studentEvents = studentInSession.events;
  }

}
