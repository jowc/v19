import { ErrorHandler, Injectable, NgZone } from '@angular/core';

@Injectable()
export class CustomErrorHandlerService implements ErrorHandler {

  constructor(private readonly ngZone: NgZone) { }

  handleError(error: any): void {
    this.ngZone.run(() => {
      console.warn('Error:', error);
    })
      console.error('Error:', error);
  }
}
