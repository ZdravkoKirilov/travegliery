import { addDays, subDays } from 'date-fns';

import { Booking, Participant } from '@root/shared';

const today = new Date();

export const bookings: Record<string, Booking> = {
  '1': {
    id: '1',
    projectId: '1',
    type: 'flight',
    startDate: subDays(today, 5).toUTCString(),
    startTime: '11:30',
    endDate: subDays(today, 5).toUTCString(),
    endTime: '13:30',
    provider: 'Austrian airlines',
    participants: ['1', '2', '8'],
    from: 'London - Heathrow',
    to: 'Paris De Gaul',
    image: 'assets/booking-images/flight1.jpg',
  },
  '2': {
    id: '2',
    projectId: '1',
    type: 'hotel',
    startDate: subDays(today, 5).toUTCString(),
    startTime: '14:00',
    endDate: subDays(today, 4).toUTCString(),
    endTime: '12:00',
    provider: 'Sofia grand hotel',
    participants: ['1', '2', '6'],
    city: 'Sofia',
    address: 'Tsar Osvoboditel 13',
    image: 'assets/booking-images/hotel1.jpg',
  },
  '3': {
    id: '3',
    projectId: '2',
    type: 'ferry',
    startDate: subDays(today, 3).toUTCString(),
    startTime: ' 14:00',
    endDate: subDays(today, 3).toUTCString(),
    endTime: '16:00',
    provider: 'Sharky fella',
    participants: ['5', '7'],
    from: 'Istanbul port 1',
    to: 'Istanbul port 2',
    image: 'assets/booking-images/ferry1.jpg',
  },
  '4': {
    id: '4',
    projectId: '3',
    type: 'train',
    startDate: today.toUTCString(),
    startTime: '09:00',
    endDate: today.toUTCString(),
    endTime: '19:00',
    provider: 'Old Tomm',
    participants: ['3', '4'],
    from: 'Moscow',
    to: 'St Petersburg',
    image: 'assets/booking-images/train1.jpg',
  },
  '5': {
    id: '5',
    projectId: '1',
    type: 'flight',
    startDate: today.toUTCString(),
    startTime: '11:30',
    endDate: today.toUTCString(),
    endTime: '13:25',
    provider: 'Qatar airlines',
    participants: ['1', '2'],
    from: 'London - Heathrow',
    to: 'Paris De Gaul',
    image: 'assets/booking-images/flight2.jpg',
  },
  '6': {
    id: '6',
    projectId: '1',
    type: 'flight',
    startDate: addDays(today, 1).toUTCString(),
    startTime: '09:30',
    endDate: addDays(today, 1).toUTCString(),
    endTime: '14:45',
    provider: 'Qatar airlines',
    participants: ['1', '2'],
    from: 'Vienna airport',
    to: 'Qatar',
    image: 'assets/booking-images/flight3.jpg',
  },
  '7': {
    id: '7',
    projectId: '1',
    type: 'train',
    startDate: addDays(today, 1).toUTCString(),
    startTime: '09:30',
    endDate: addDays(today, 2).toUTCString(),
    endTime: '11:00',
    provider: 'Qatar train services',
    participants: ['1', '2'],
    from: 'Qatar central station',
    to: 'Bangalore',
    image: 'assets/booking-images/train1.jpg',
  },
  '8': {
    id: '8',
    projectId: '1',
    type: 'ferry',
    startDate: addDays(today, 3).toUTCString(),
    startTime: ' 09:30',
    endDate: addDays(today, 3).toUTCString(),
    endTime: '22:00',
    provider: 'Indian ferry services',
    participants: ['1', '2', '3', '4'],
    from: 'Bangalore port',
    to: 'New Zealand',
    image: 'assets/booking-images/ferry2.jpg',
  },
};

export const participants: Record<string, Participant> = {
  '1': {
    id: '1',
    projectId: '1',
    firstName: 'John',
    lastName: 'Simmons',
    email: 'johns@gmail.com',
  },
  '2': {
    id: '2',
    projectId: '1',
    firstName: 'Jean',
    lastName: 'Tennesy',
    email: 'jeant@hotmail.com',
    phone: '441235995',
  },
  '3': {
    id: '3',
    projectId: '3',
    firstName: 'Eric',
    lastName: 'Gartner',
    email: 'ericg@hotmail.com',
    phone: '4412295677',
  },
  '4': {
    id: '4',
    projectId: '3',
    firstName: 'Vanessa',
    lastName: 'Hughes',
    email: 'vanhughes@gmail.com',
  },
  '5': {
    id: '5',
    projectId: '2',
    firstName: 'Patrick',
    lastName: 'Rothfuss',
    email: 'nottodaypat@yahoo.com',
  },
  '6': {
    id: '6',
    projectId: '2',
    firstName: 'Patricia',
    lastName: 'Gates',
    email: 'patgates55@yahoo.com',
  },
  '7': {
    id: '7',
    projectId: '3',
    firstName: 'Ivan',
    lastName: 'Orlov',
    email: 'luckychicken@gmail.com',
  },
  '8': {
    id: '8',
    projectId: '1',
    firstName: 'Anna',
    lastName: 'Heartfilia',
    email: 'annah@hotmail.com',
    phone: '4412295677',
  },
};
