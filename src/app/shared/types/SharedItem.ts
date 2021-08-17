import { Booking } from './Booking';
import { Participant } from './Participant';

type CommonFields = {
  id: string;
  projectId: string;
  createdAt: number;
};

export type PriceReport = CommonFields & {
  type: 'price-report';
  bookingIds: Array<Booking['id']>;
};

export type BookingReport = CommonFields & {
  type: 'booking';
  bookingId: Booking['id'];
};

export type ItineraryReport = CommonFields & {
  type: 'itinerary';
  participantId: Participant['id'];
};

export type SharedItem = PriceReport | BookingReport | ItineraryReport;
