import { ThrowStmt } from '@angular/compiler';
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
  listOfEvents: ProgramEvent[];
  shouldViewMoreDetails: boolean = false;

  newEventTitle: string;
  newEventLocation: string;
  newEventLeader: string;
  newEventID: string;
  participantToAssign:string;

  newEventDetails: ProgramEvent

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    //get the prog manager in session
    this.progInSession = this.sessionService.getCurrentUserInSession();

    //use that information to retrieve their details
    this.progManangerName = this.progInSession.name;
    this.progManagerEmail = this.progInSession.email;
    
    //use this to retrieve all the participants and events
    this.listOfParticipants = this.sessionService.getEnrolledParticipants()
    this.listOfEvents = this.sessionService.getAllTrainingEvents();

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

    //shows or hides more detail
    showOrHideMoreEventDetails(): void {
      this.shouldViewMoreDetails = !this.shouldViewMoreDetails;
    }

    //adds a new event
    addNewEvent() {
      this.newEventDetails = {
        event_title: this.newEventTitle,
        event_completion: "NO",
        event_id: parseInt(this.newEventID),
        location: this.newEventLocation,
        leader: this.newEventLeader,
      }
      this.sessionService.addNewEventToDatabase(this.newEventDetails);
      this.assignEventToParticipant();
      this.resetFields()
    }

    assignEventToParticipant() {
       //get which participant to assign to
       let studentToAssign:Student = this.sessionService.getParticipantByName(this.participantToAssign);
       if (studentToAssign !== undefined) {
          studentToAssign.events.push(this.newEventDetails);
       }  
    }

    resetFields() {
      this.newEventTitle = "";
      this.newEventID = "";
      this.newEventLocation = "";
      this.newEventLeader = "";
    }
}
