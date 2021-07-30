import { BookingTypePipe } from './booking-type.pipe';

describe('BookingTypePipe', () => {
  it('create an instance', () => {
    const pipe = new BookingTypePipe();
    expect(pipe).toBeTruthy();
  });
});
