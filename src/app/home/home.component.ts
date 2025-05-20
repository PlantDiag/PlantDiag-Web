import { Component } from '@angular/core';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { PanelModule } from 'primeng/panel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartModule } from 'primeng/chart';
import {WebcamModule} from 'ngx-webcam';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-home',
  imports: [NavBarComponent, PanelModule, CommonModule, FormsModule, ChartModule, WebcamModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
culturas = [
  { label: 'Milho', value: 'milho' },
  { label: 'Soja', value: 'soja' },
  { label: 'Arroz', value: 'arroz' },
];

visible = false

culturaSelecionada?: string;
dataInicio?: Date;
dataFim?: Date;

dadosGrafico = {
  labels: ['Saudável', 'Larva da Soja', 'Vaquinha da Soja'],
  datasets: [ 
    {
      label: 'Status das Plantas',
      backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
      data: [50, 20, 30]
    }
  ]
};
}
