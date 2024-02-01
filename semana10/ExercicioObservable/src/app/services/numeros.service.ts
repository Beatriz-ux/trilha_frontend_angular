import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor() { }
  getNumeros(): Observable<any> {
    const obsevable = new Observable((subscriber)=>{
      for (let i = 1; i <= 100; i++) {
        subscriber.next(i);
      }
    });
    return obsevable;
  }
}
