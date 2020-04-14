import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  @Output() cancelRegistration = new EventEmitter<boolean>();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model)
      .subscribe(() => {
        console.log('Rejestracja udana!');
      }, error => {
        console.log(error);
      });
  }

  cancel() {
    console.log("Anulowano");
    this.cancelRegistration.emit(false);
  }

}
