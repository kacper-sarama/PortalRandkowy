import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { AlertifyService } from 'src/app/_services/alertify.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  allUsers: User[];

  constructor(private userService: UserService, private alertifyService: AlertifyService) { }

  loadUsers() {
    this.userService.getUsers()
      .subscribe((users: User[]) => {
        this.allUsers = users;
      }, error => {
        this.alertifyService.error(error);
      });
  }

  ngOnInit() {
    this.loadUsers();
  }

}
