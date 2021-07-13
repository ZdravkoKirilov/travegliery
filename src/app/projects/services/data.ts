import { Booking, Participant } from '@root/shared';

export const bookings: Record<string, Booking> = {
  '1': {
    id: '1',
    type: 'flight',
    start: '29-09-2021: 11:30',
    end: '29-09-2021: 13:25',
    provider: 'Austrian airlines',
    participants: ['1', '2'],
    from: 'London - Heathrow',
    to: 'Paris De Gaul',
  },
  '2': {
    id: '2',
    type: 'hotel',
    start: '30-09-2021: 14:00',
    end: '31-09-2021: 12:00',
    provider: 'Sofia grand hotel',
    participants: ['1', '2', '6'],
    city: 'Sofia',
    address: 'Tsar Osvoboditel 13',
  },
  '3': {
    id: '3',
    type: 'ferry',
    start: '01-10-2021: 14:00',
    end: '01-10-2021: 16:00',
    provider: 'Sharky fella',
    participants: ['5', '7'],
    from: 'Istanbul port 1',
    to: 'Istanbul port 2',
  },
  '4': {
    id: '4',
    type: 'train',
    start: '03-10-2021: 09:00',
    end: '03-10-2021: 19:00',
    provider: 'Old Tomm',
    participants: ['3', '4'],
    from: 'Moscow',
    to: 'St Petersburg',
  },
};

export const participants: Record<string, Participant> = {
  '1': {
    id: '1',
    firstName: 'John',
    lastName: 'Simmons',
    email: 'johns@gmail.com',
  },
  '2': {
    id: '2',
    firstName: 'Jean',
    lastName: 'Tennesy',
    email: 'jeant@hotmail.com',
    phone: '441235995',
  },
  '3': {
    id: '3',
    firstName: 'Eric',
    lastName: 'Gartner',
    email: 'ericg@hotmail.com',
    phone: '4412295677',
  },
  '4': {
    id: '4',
    firstName: 'Vanessa',
    lastName: 'Hughes',
    email: 'vanhughes@gmail.com',
  },
  '5': {
    id: '5',
    firstName: 'Patrick',
    lastName: 'Rothfuss',
    email: 'nottodaypat@yahoo.com',
  },
  '6': {
    id: '6',
    firstName: 'Patricia',
    lastName: 'Gates',
    email: 'patgates55@yahoo.com',
  },
  '7': {
    id: '7',
    firstName: 'Ivan',
    lastName: 'Orlov',
    email: 'luckychicken@gmail.com',
  },
};
