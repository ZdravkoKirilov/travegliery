type CommonFields = Readonly<{
  id: string;
  projectId: string;
  
  startDate: string;
  endDate: string;

  startTime: string;
  endTime: string;

  provider: string;

  image?: string;
  participants: string[];
}>

export type FlightBooking = CommonFields & Readonly<{
  type: 'flight';

  from: string;
  to: string;
}>

export type HotelBooking = CommonFields & Readonly<{
  type: 'hotel';

  address: string;
  city: string;

  phone?: string;
  email?: string;
}>

export type FerryBooking = CommonFields & Readonly<{
  type: 'ferry';

  from: string;
  to: string;
}>

export type TrainBooking = CommonFields & Readonly<{
  type: 'train';

  from: string;
  to: string;
}>

export type Booking = FlightBooking | HotelBooking | FerryBooking | TrainBooking;