import { BusDetails } from "./bus-details";
import { BusRoute } from "./bus-route";
import { PassangerDetails } from "./passanger-details";
import { Payment } from "./payment";

export class Booking {
    busId! : BusDetails;
	routeId! : BusRoute ;
	paymentStatus : string | undefined; // Pending or Done
	payment : Payment | undefined;
	passangerDetails : PassangerDetails | undefined;
	totalFare : number | undefined;
	bookingDateTime : string | undefined;
	dateOfJourney : string | undefined;
	seatNo : number | undefined;
}
