import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.editFormViewChild.dirty) {
      $event.returnValue = true;
    }
  }

  @ViewChild('editForm') editFormViewChild: NgForm;

  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private userService: UserService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.user = data.user;
    });

    // this.galleryOptions = [
    //   {
    //     width: '500px',
    //     height: '500px',
    //     thumbnailsColumns: 4,
    //     imagePercent: 100,
    //     preview: false,
    //     imageAnimation: NgxGalleryAnimation.Slide

    //   }
    // ];

    // this.galleryImages = this.getImages();
  }

  getImages() {
    const imagesUrls = [];

    for (let i = 0; i < this.user.photos.length; i++) {
      imagesUrls.push({
        small: this.user.photos[i].url,
        medium: this.user.photos[i].url,
        big: this.user.photos[i].url,
        description: this.user.photos[i].description
      });
    }
    return imagesUrls;
  }

  updateUser() {
    this.userService.updateUser(this.authService.decodedToken.nameid, this.user)
      .subscribe(next => {
        this.alertifyService.success('Profil pomyślnie zaktualizowany');
        this.editFormViewChild.reset(this.user);
      }, error => {
        this.alertifyService.error(error);
      });
  }
}
