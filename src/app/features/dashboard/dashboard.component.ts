import { Component } from '@angular/core';
import { SidebarComponent } from '../../core/components/sidebar/sidebar.component';
import { NavbarComponent } from '../../core/components/navbar/navbar.component';
import { ToolbarComponent } from '../../core/components/toolbar/toolbar.component';
import { BrokerCardComponent } from '../../core/components/broker-card/broker-card.component';
import { Store } from '@ngrx/store';
import { getBroker } from '../../shared/store/broker.action';
import { OffcanvasComponent } from '../../core/components/offcanvas/offcanvas.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
  SidebarComponent, 
  NavbarComponent, 
  ToolbarComponent,
  BrokerCardComponent,
  OffcanvasComponent
],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(getBroker());
  }

  offcanvasVisible = true;

  onHideOffcanvas() {
    this.offcanvasVisible = false;
  }
 }

