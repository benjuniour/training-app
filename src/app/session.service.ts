import { Injectable } from '@angular/core';

//---------------Interfaces---------------------------
export interface ProgramEvent {
  event_title: string;
  event_completion: string;
  event_id: number;
  location: string;
  leader: string;
}

export interface ProgManager {
  email: string,
  password: string,
  userType?: string,
}

export interface Student {
  name? : string,
  email: string,
  password: string,
  userType?: string;
  events? : ProgramEvent[];
}


//-------------Hardcoded Data-------------------

let participant1: Student = {
    name: "Bernard Boadu",
    email: "bernardboadu@gmail.com",
    password: "password1",
    events: [
      {
        event_title: "Fun Event",
        event_id: 1,
        event_completion: "No",
        location: "Space 1",
        leader: "Leader 1",
      }
      , {
        event_title: "Fun Event II",
        event_id: 11,
        event_completion: "No",
        location: "Space 1",
        leader: "Leader 1",
      }]
}

let participant2: Student = {
  name: "Alfred Marfo",
  email: "alfredmarfo@gmail.com",
  password: "password2",
  events: [
    {
      event_title: "Fun Event",
      event_id: 2,
      event_completion: "No",
      location: "Space 1",
      leader: "Leader 1",
    }, 
    
    {
      event_title: "Fun Event II",
      event_id: 21,
      event_completion: "No",
      location: "Space 1",
      leader: "Leader 1",
    }]
}

// let participant3: Student = {
//   name: "Carmen Menson",
//   email: "carmenmenson@gmail.com",
//   password: "password3",
//   events: [event1, event2]
// }

let mainProgManager: ProgManager = {
  email: "masterprogman@app.com",
  password: "master"
}


//-----------------------------------------------------------

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  aUserInSession: Student|ProgManager;
  enrolledParticpants: Student[];
  listOfProgManagers: ProgManager[];


  constructor() { 
    this.enrolledParticpants = [participant1, participant2];
    this.listOfProgManagers = [mainProgManager];
  }

  //allows the signup screen to set the type of user in session to be used by the dashboard
  setCurrentUserInSession(aTypeOfUser: Student|ProgManager): void {
    this.aUserInSession = aTypeOfUser;
  }

  //Would be use to know the type of user
  getCurrentUserInSession () : ProgManager | Student{
    return this.aUserInSession;
  }

  //would be used by the prog mananger to retrieve and add new participants
  getEnrolledParticipants() : Student[] {
    return this.enrolledParticpants;
  }

  //adds a new participant
  addNewEnrolledParticipant(aNewParticipant: Student): void {
    this.enrolledParticpants.push(aNewParticipant)
  }

  //checks if a participant is in our database
  isParticipantEnrolled(aParticipant: Student): boolean {
    for (let participant of this.enrolledParticpants) {
      if (participant.email === aParticipant.email 
            && aParticipant.password === participant.password) {
              this.aUserInSession = participant  //when valid, set the participant in session
        return true;
      }
    }
    return false;
  }

  //checks if a manager is in our database
  isManagerValid(aManager: ProgManager): boolean { 
    for (let manager of this.listOfProgManagers) {
      if (manager.email === aManager.email && manager.password === aManager.password) {
        this.aUserInSession = aManager //when valid, set the manger in session
        return true
      }
    }
    return false;
  }

  // //update event status
  // updateEventStatus(anEvent: ProgramEvent) : void {
  //   for(let event of this.aUserInSession.events)
  // }

  //gets the list of prog managers
  getProgManagers(): ProgManager[] {
    return this.listOfProgManagers;
  }


}


