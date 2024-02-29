import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  dataSubject = new Subject<any>();

  constructor() { }

  fetchData(arquivo: string) {
    fetch(`assets/dados/${arquivo}.json`)
      .then(response => response.json())
      .then(data => {
        this.dataSubject.next(data);
      });
  }

  getData() {
    return this.dataSubject.asObservable();
  }
}
