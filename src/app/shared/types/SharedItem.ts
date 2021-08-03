import { Booking } from './Booking';

export type SharedItem = {
  id: string;
  projectId: string;
  type: 'price-report' | 'single-booking' | 'itinerary';

  createdAt: number;
  bookingIds: Array<Booking['id']>;
  emails: Array<string>;
};
