import { Component, OnInit } from '@angular/core';
import { Broker } from '../../model/broker.interface';
import { selectBrokerState } from '../../../shared/store/broker.selector';
import { StateOfBroker } from '../../../shared/store/broker.reducer';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-broker-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './broker-card.component.html',
  styleUrl: './broker-card.component.scss'
})
export class BrokerCardComponent implements OnInit {
  
  databrokers$ = this.store.select(selectBrokerState);
 

  constructor(private store: Store<StateOfBroker>) { }
  
  
  ngOnInit(): void {
    this.databrokers$.subscribe(data => {
      console.log("result", data)
    });
  }

}
