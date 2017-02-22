import { Pipe, PipeTransform } from '@angular/core';

/*
 * use as {{'1235345333' | appPhone}} to format to (123)123-1231
 * if use in input with ngModel, have to do this:
 * <input type="text" [ngModel]="phone | appPhone" (ngModelChange)="phone = $event">
 * */

@Pipe({
  name: 'appPhone'
})

export class PhonePipe implements PipeTransform {
  transform(phoneNumber: string): string {
    // if pass in empty, match will throw err
    if (!phoneNumber) {
      return '';
    }
    let digit = phoneNumber.match(/\d+/g);
    // if digit is empty, join will throw err
    if (!digit) {
      return phoneNumber;
    }
    phoneNumber = digit.join('');
    if (phoneNumber.length < 3) {
      return '(' + phoneNumber.slice(0, 3);
    }
    if (phoneNumber.length < 6) {
      return '(' + phoneNumber.slice(0, 3) + ') ' + phoneNumber.slice(3, 6);
    }
    return '(' + phoneNumber.slice(0, 3) + ') ' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6);
  }
}
