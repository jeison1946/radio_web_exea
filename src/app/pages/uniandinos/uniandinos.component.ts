import { Component, Inject } from '@angular/core';
import { PlayerComponent } from "../../shared/components/player/player.component";
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-uniandinos',
  standalone: true,
  imports: [PlayerComponent],
  templateUrl: './uniandinos.component.html',
  styleUrl: './uniandinos.component.scss',
})
export class UniandinosComponent {

  constructor(@Inject(DOCUMENT) private document: Document) {
    const title = document.querySelector('#titlePage');
    if(title) {
      title.textContent = 'Uniandinos | Streaming Exea';
    }
  }
}
