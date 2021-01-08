import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SearchBusComponent } from './search-bus/search-bus/search-bus.component';
import { BusSearchResultComponent } from './bus-search-result/bus-search-result.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { BusBookingComponent } from './bus-booking/bus-booking/bus-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BookingPaymentComponent } from './booking-payment/booking-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassangerRegistrationComponent } from './passanger-registration/passanger-registration.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { BusRouteComponent } from './bus-route/bus-route.component';
import { LoginComponent } from './login/login.component';
import { HttpInterceptorService } from './http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient } from '@angular/common/http';
const routes: Routes = [
  {path:'',component:SearchBusComponent},
  {path:'search',component:BusSearchResultComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBusComponent,
    
    BusSearchResultComponent,
    
    BusBookingComponent,
    
    PaymentComponent,
    
    BookingPaymentComponent,
    
    PassangerRegistrationComponent,
    
    BusRouteComponent,
    
    LoginComponent,
    
    LogoutComponent,
    
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptorService,
    multi: true
  },HttpClient, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
