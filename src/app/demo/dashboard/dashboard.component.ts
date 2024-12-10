import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { Card } from 'primeng/card';
import { Panel } from 'primeng/panel';

@Component({
  selector: 'demo-dashboard',
  standalone: true,
  imports: [ButtonModule, Card, Panel],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
