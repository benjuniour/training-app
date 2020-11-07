import { Component, OnInit } from '@angular/core';
import { ProgManager, ProgramEvent, SessionService, Student } from '../session.service';

@Component({
  selector: 'app-prog-page',
  templateUrl: './prog-page.component.html',
  styleUrls: ['./prog-page.component.css']
})
export class ProgPageComponent implements OnInit {

  progManangerName: string;
  progManagerEmail: string;
  progInSession: ProgManager;
  listOfParticipants: Student[];

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    //get the prog manager in session
    this.progInSession = this.sessionService.getCurrentUserInSession();

    //use that information to retrieve their details
    this.progManangerName = this.progInSession.name;
    this.progManagerEmail = this.progInSession.email;
    
    //use this to retrieve all the participants
    this.listOfParticipants = this.sessionService.getEnrolledParticipants()
  }

  computeOverallProgress(studEvents: ProgramEvent[]): string {
      let eventCompletionCount: number = 0;
      for (let participantEvent of studEvents) {
          if (participantEvent.event_completion === "YES") {
              eventCompletionCount +=1;
          }
      }
      //computes the total percentage completion
      return ((eventCompletionCount/studEvents.length) * 100).toString()
    }

}
