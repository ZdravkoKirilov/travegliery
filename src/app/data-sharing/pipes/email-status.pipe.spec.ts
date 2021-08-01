import { EmailStatusPipe } from './email-status.pipe';

describe('EmailStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new EmailStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
