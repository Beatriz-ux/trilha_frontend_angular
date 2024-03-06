import { Injectable } from '@angular/core';
import { Form, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {
  private nameSubject : Subject<string> = new Subject<string>();
  private nameOnFocus : Subject<boolean> = new Subject<boolean>();
  private nameOnChange : Subject<boolean> = new Subject<boolean>();
  private formSubject : Subject<boolean> = new Subject<boolean>();


  constructor() { }

  getNameSubject(){
    return this.nameSubject;
  }
  getNameOnFocus(){
    return this.nameOnFocus;
  }
  getNameOnChange(){
    return this.nameOnChange;
  }
  
  onSubmit(form : FormGroup){
    return form.valid;
  }

  onNameChange(event : any){
    this.nameSubject.next(event.target.value);
    this.nameOnChange.next(true);
  }

  onNameFocus(){
    this.nameOnFocus.next(true);
  }

  onNameBlur(){
    this.nameOnFocus.next(false);
  }

  onNameInput(event : any){
    this.nameSubject.next(event.target.value);
  }

  getFormSubject(){
    return this.formSubject;
  }

  onFormChange(form : FormGroup){
    this.formSubject.next(form.valid);
  }

}
