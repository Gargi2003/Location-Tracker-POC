import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-location',
  template: '<p>Location updates are being sent in the background.</p>',
})
export class LocationComponent implements OnInit {
  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.startPolling();
  }
}
