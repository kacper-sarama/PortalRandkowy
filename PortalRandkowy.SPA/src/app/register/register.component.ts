import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
declare let alertify: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  @Output() cancelRegistration = new EventEmitter<boolean>();

  constructor(private authService: AuthService, private alertifyService: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model)
      .subscribe(() => {
        this.alertifyService.success('Rejestracja udana!');
      }, error => {
        this.alertifyService.error('Wystąpił błąd rejestracji');
      });
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }

}
