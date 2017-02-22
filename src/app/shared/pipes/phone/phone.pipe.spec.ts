/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { PhonePipe } from './phone.pipe';

describe('PhonePipe', () => {
  let pipe = new PhonePipe();

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('transforms 12 to a (12', () => {
    expect(pipe.transform('12')).toBe('(12');
  });

  it('transforms 123 to (123)', () => {
    expect(pipe.transform('123')).toBe('(123) ');
  });

  it('transforms 12345 to (123)45', () => {
    expect(pipe.transform('12345')).toBe('(123) 45');
  });

  it('transforms 123456 to (123)456-', () => {
    expect(pipe.transform('123456')).toBe('(123) 456-');
  });

  it('transforms 1234567 to (123)456-7', () => {
    expect(pipe.transform('1234567')).toBe('(123) 456-7');
  });

  it('transforms 1234567890 to (123)456-7890', () => {
    expect(pipe.transform('1234567890')).toBe('(123) 456-7890');
  });

  it('transforms (123) (456)-7890 to (123)456-7890', () => {
    expect(pipe.transform('(123) (456)-7890')).toBe('(123) 456-7890');
  });

  it('transforms undefined to empty', () => {
    expect(pipe.transform(undefined)).toBe('');
  });
});
