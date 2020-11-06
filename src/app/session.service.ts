import { Injectable } from '@angular/core';
import { ProgManager, Student } from './signup/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  aProgramManger: ProgManager;

  constructor() { 
  }

  setProgramManager(aprogManager: ProgManager) {
    this.aProgramManger = aprogManager
  }

  getProgramManagerEmail() {
    return this.aProgramManger.email;
  }
}
