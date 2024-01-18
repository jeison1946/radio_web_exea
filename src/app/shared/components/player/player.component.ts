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
    const audio = <HTMLAudioElement>this.document.getElementById("player");
    this.conection.getMp3StreamTitle('http://stream.exeamedia.com:8080/balsamo', 19200);
    //console.log(metada);
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
}
