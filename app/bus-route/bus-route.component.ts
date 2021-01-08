import { Component, OnInit } from '@angular/core';
import { BusRoute } from '../models/bus-route';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BusDetails } from '../models/bus-details';
@Component({
  selector: 'app-bus-route',
  templateUrl: './bus-route.component.html',
  styleUrls: ['./bus-route.component.css']
})
export class BusRouteComponent implements OnInit {

  constructor() { }

  hide = true;
  routeDetails:BusRoute= new BusRoute();
  
  ngOnInit(): void {
  }

  formBusRoute = new FormGroup({
    busId: new FormControl('', Validators.required),
    driverId: new FormControl('', Validators.required),
    busRoute: new FormControl('', Validators.required),
    startTime: new FormControl('', Validators.required),
    endTime: new FormControl('', Validators.required),
    duration: new FormControl('', Validators.required),
    availableSeats: new FormControl('', Validators.required),
    distance: new FormControl('', Validators.required),
    source: new FormControl('', Validators.required),
    destination: new FormControl('', Validators.required)

   
   });

   doSubmitForm(){
    
  }
   

}
