import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Input() valuesFromHome: any;
  @Output() cancelRegistration = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  register() {
    console.log(this.model);
  }

  cancel() {
    console.log("Anulowano");
    this.cancelRegistration.emit(false);
  }

}
