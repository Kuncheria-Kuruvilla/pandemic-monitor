import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  percentageIncrease(total, delta) {
    return total - delta > 0 ? ((delta / (total - delta)) * 100).toFixed(2) : 0;
  }
}
