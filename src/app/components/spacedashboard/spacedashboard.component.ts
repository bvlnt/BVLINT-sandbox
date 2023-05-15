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

  private apiUrl =
    'https://api.nasa.gov/mars-photos/api/v1/rovers/Curiosity/latest_photos?api_key=uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k';

  imageUrl: string | undefined;
  earthDate: string | undefined;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAPOD();
    this.getLatestPhoto();
  }

  getAPOD() {
    const apiKey = 'uK5HH7WWn22qEfk2Q7NZTFqD49yk7alwesPM3T3k';
    this.http
      .get('https://api.nasa.gov/planetary/apod?api_key=${apiKey}')
      .subscribe((response) => {
        this.Apod = response as Apod;
        console.log(this.Apod);
      });
  }

  getLatestPhoto() {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      const navCamPhotos = data.latest_photos.filter(
        (photo: { camera: { name: string } }) => photo.camera.name === 'NAVCAM'
      );
      if (navCamPhotos.length > 0) {
        const latestNavCamPhoto = navCamPhotos[0];
        this.imageUrl = latestNavCamPhoto.img_src;
        this.earthDate = latestNavCamPhoto.earth_date;
      }
    });
  }
}
