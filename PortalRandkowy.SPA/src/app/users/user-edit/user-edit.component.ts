import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryImage } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  @ViewChild('editForm') editFormViewChild: NgForm;
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService
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
    console.log(this.user);
    this.alertifyService.success('Profil pomyślnie zaktualizowany');
    this.editFormViewChild.reset(this.user);
  }
}