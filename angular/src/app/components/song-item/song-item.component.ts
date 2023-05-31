import {Component, Input} from '@angular/core';

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {
  @Input() song?: any;

  ngOnInit(): void {
  }

  navigateToSongDetails() {
    return JSON.stringify(this.song);
  }
}
