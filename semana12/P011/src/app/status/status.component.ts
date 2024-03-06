import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormServiceService } from '../service/form-service.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit{
  focus : boolean = false;
  focusSubscription : Subscription | undefined;
  name : string = '';
  nameSubscription : Subscription | undefined;
  change : boolean = false;

  constructor(private service : FormServiceService) {
    
  }

  ngOnInit(): void {
    this.focusSubscription = this.service.getNameOnFocus().subscribe(
      (value : boolean) => {
        this.focus = value;
      }
    );
    this.nameSubscription = this.service.getNameSubject().subscribe(
      (value : string) => {
        this.name = value;
      }
    );
    this.service.getNameOnChange().subscribe(
      (value : boolean) => {
        this.change = value;
      }
    );
  }

}
