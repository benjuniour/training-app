import { Component, OnInit } from '@angular/core';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  toDisplay: string;

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.toDisplay = this.sessionService.getProgramManagerEmail()
  }

}
