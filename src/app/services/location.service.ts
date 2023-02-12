import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private apiUrl = 'https://7dfefacf-3c55-44fc-91e0-8c18e4e05bf4.mock.pstmn.io'; // replace with your API URL
  private subscription?: Subscription;

  constructor(private http: HttpClient) { }

  startPolling(): void {
    this.subscription = interval(10000).subscribe(() => {
      navigator.geolocation.getCurrentPosition(position => {
        const data = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        console.log(data)
        this.sendData(data);
      });
    });
  }

  stopPolling(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private sendData(data: any): void {
    this.http.post(this.apiUrl, data).subscribe(
      res => console.log(res),
      err => console.error(err)
    );
  }
}
