import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  imports: [
    MatIconModule,
    MatSliderModule
  ]
})
export class PlayerComponent {

  @Input() colorInit!: string;
  @Input() colorEnd!: string;
  @Input() idEntity: string = 'main';

  volume: number = 50;

  onVolumeChange() {
    // Aquí puedes realizar acciones adicionales cuando cambia el volumen
    console.log('Volumen actual:', this.volume);
  }
}
