import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { ConectionService } from '../../services/conection.service';

@Component({
  selector: 'app-player',
  standalone: true,
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
  imports: [
    CommonModule,
    MatIconModule,
    MatSliderModule
  ]
})
export class PlayerComponent {

  @Input() colorInit!: string;
  @Input() colorEnd!: string;
  @Input() idEntity: string = 'main';
  @Input() url!: string;
  nameSong:string = 'Uniandinos';

  listen: boolean = false;

  @ViewChild('audioPlayer') audioPlayer: ElementRef | undefined;

  volume: number = 90;

  constructor(@Inject(DOCUMENT) private document: Document, private conection: ConectionService) {

  }

  onVolumeChange(e:any) {
    this.volume = e.srcElement.value;
    console.log('Volumen actual:', this.volume);
    const container = this.audioPlayer?.nativeElement;
    container.volume = this.volume / 100;
  }

  ngOnInit() {
    this.loadTagsSong();
  }

  onPlay() {
    const container = this.audioPlayer?.nativeElement;
    container.play();
    container.volume = this.volume / 100;
    this.listen = true;
  }

  onPause() {
    const container = this.audioPlayer?.nativeElement;
    container.pause();
    container.volume = this.volume / 100;
    this.listen = false;
  }

  loadTagsSong() {
    this.conection.getMp3StreamTitle(this.url, 19200).subscribe(
      (res:any) => {
        console.log(res);
        this.nameSong = res[1]+ ' (' + res[2] + ')';
        const timer:any = setTimeout( () => {
          this.loadTagsSong();
        }, 30000);
      },
      (error) => {
        console.error(`Error: ${error.message}`);
      }
    );
  }
}
