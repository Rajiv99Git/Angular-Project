import { BusDetails } from "./bus-details";
import { DriverDetails } from "./driver-details";

export class BusRoute {

    busId : number | undefined;
	driverId : number | undefined ; 
	busRoute : string | undefined;
	startTime : string | undefined;
	endTime : string | undefined;
	duration : string | undefined;
	availableSeats : string | undefined;
	distance : string | undefined;
	source : string | undefined;
	destination : string | undefined;
}
