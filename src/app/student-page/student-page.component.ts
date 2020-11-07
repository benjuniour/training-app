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
  studentInSession: Student;
  studentEvents: ProgramEvent[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    //get the student participant in session
    this.studentInSession = this.sessionService.getCurrentUserInSession();

    //use that information to retrieve their details
    this.studentName = this.studentInSession.name;
    this.studentEmail = this.studentInSession.email;

    //use their session information to retrieve their events
    this.studentEvents = this.studentInSession.events;
  }

  /**
   * Updates a current participant's event participation
   * 
   * Current Problem: When the event completion for say the first 
   * event is changed, it changes that event status for every one since
   * they all share the same event event
   * 
   * Solution: Give each event, even though they have the same title,
   * give them an event ID so that the change would be contigent on the
   * event Id being the same
   * @param theEventTitle 
   */
  updateEventStatus(theEventId: string): void {   
    console.log(theEventId) 
    for (let event of this.studentEvents) {
      
        if (event.event_id === parseInt(theEventId)) {
          
            event.event_completion = "YES"
        }
    }
  }
}
