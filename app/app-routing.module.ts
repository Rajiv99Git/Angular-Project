import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BusBookingComponent } from './bus-booking/bus-booking/bus-booking.component';
import { BusSearchResultComponent } from './bus-search-result/bus-search-result.component';
import { PassangerRegistrationComponent } from './passanger-registration/passanger-registration.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchBusComponent } from './search-bus/search-bus/search-bus.component';
import{ BusRouteComponent } from './bus-route/bus-route.component';
import { LoginComponent } from './login/login.component';
import { AuthAdminService } from './auth-admin.service';

const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'search',component:BusSearchResultComponent},
  {path:'book/:id',component:BusBookingComponent},
  {path:'payment/:id',component:PaymentComponent},
  {path:'paymentstatus/:id',component:BookingPaymentComponent},
  {path:'passangerRegistrati1on',component:PassangerRegistrationComponent},
  {path:'busRoute',component:BusRouteComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'logout', component: SearchBusComponent},
  {path: 'basicauth', component: LoginComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
