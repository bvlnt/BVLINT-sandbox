import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Apod } from '../../interfaces/spacedashboard.interface';

@Component({
  selector: 'app-spacedashboard',
  templateUrl: './spacedashboard.component.html',
  styleUrls: ['./spacedashboard.component.scss'],
})
export class SpacedashboardComponent implements OnInit {
  Apod: Apod | undefined;

  imageUrlNavcam: string | undefined;
  imageUrlChemcam: string | undefined;
  earthDate: string | undefined;
  sol: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAPOD();
    this.getLatestNavcamPhoto();
    this.getLatestChemcamPhoto();
  }

  getAPOD() {
    this.http
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k'
      )
      .subscribe((response) => {
        this.Apod = response as Apod;
        console.log(this.Apod);
      });
  }

  getLatestNavcamPhoto() {
    this.http
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k'
      )
      .subscribe((data: any) => {
        const navCamPhotos = data.latest_photos.filter(
          (photo: { camera: { name: string } }) =>
            photo.camera.name === 'NAVCAM'
        );
        if (navCamPhotos.length > 0) {
          const latestNavCamPhoto = navCamPhotos[0];
          this.imageUrlNavcam = latestNavCamPhoto.img_src;
          this.earthDate = latestNavCamPhoto.earth_date;
          this.sol = latestNavCamPhoto.sol;
        }
      });
  }

  getLatestChemcamPhoto() {
    this.http
      .get(
        'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k'
      )
      .subscribe((data: any) => {
        const navCamPhotos = data.latest_photos.filter(
          (photo: { camera: { name: string } }) =>
            photo.camera.name === 'CHEMCAM'
        );
        if (navCamPhotos.length > 0) {
          const latestNavCamPhoto = navCamPhotos[0];
          this.imageUrlChemcam = latestNavCamPhoto.img_src;
          this.earthDate = latestNavCamPhoto.earth_date;
          this.sol = latestNavCamPhoto.sol;
        }
      });
  }
}
