import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output()intervalfired = new EventEmitter<number>();
  interval;
  lastNumber = 0

  constructor() { }

  ngOnInit(): void {
  }

  onStartgame() {
    this.interval = setInterval(()=> {
      this.intervalfired.emit(this.lastNumber+1);
      this.lastNumber++;
    },1000);
  }

  onPausegame () {
    clearInterval(this.interval)
  }

}
