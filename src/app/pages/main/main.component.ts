import { Component } from '@angular/core';
import { PlayerComponent } from "../../shared/components/player/player.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [PlayerComponent]
})
export class MainComponent {

}
