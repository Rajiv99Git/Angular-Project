import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking';
import { BusDetails } from 'src/app/models/bus-details';
import { BusRoute } from 'src/app/models/bus-route';
import { PassangerDetails } from 'src/app/models/passanger-details';
import { Payment } from 'src/app/models/payment';
import { BusBookingService } from 'src/app/services/bus-booking.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-bus-booking',
  templateUrl: './bus-booking.component.html',
  styleUrls: ['./bus-booking.component.css']
})
export class BusBookingComponent implements OnInit {

  booking:Booking = new Booking();
  booking1 = new Observable<Booking[]>();
  itemList:any;
   
  id!: number;
  passangerId = 1;
  constructor(private route: ActivatedRoute,private router: Router,
    private busBookingService: BusBookingService,
    private sharedService: SharedService) { }


  ngOnInit(): void {

    this.booking.paymentStatus="Pending";
    this.booking.seatNo=10;
    // this.booking.busId = new BusDetails();
    // this.booking.routeId = new BusRoute();
    // this.booking.totalFare = 0;
    // //this.booking.payment = new Payment();
    // this.booking.passangerDetails = new PassangerDetails();
     this.booking.dateOfJourney = this.sharedService.getToFromDate().depart_date;
    // this.booking.bookingDateTime = "";

    this.id = this.route.snapshot.params['id'];
    this.busBookingService.busBooking(this.id,this.passangerId,this.booking)
    .subscribe((itemList: Booking[])=>{
      this.itemList = itemList;
      console.log("item List : "+this.itemList);
    });
    
console.log(" MEssage : "+JSON.stringify(this.booking1));
    //console.log("Booking Details: "+JSON.stringify(this.busBooking) );
  }

  onClick(id: number){
    this.router.navigate(['payment', id]); 
  }

}
