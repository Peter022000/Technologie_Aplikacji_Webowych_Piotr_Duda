import {Component, Input} from '@angular/core';
import {defaultSong, Song} from "../../models/song";
import {Router} from "@angular/router";

@Component({
  selector: 'song-item',
  templateUrl: './song-item.component.html',
  styleUrls: ['./song-item.component.css']
})
export class SongItemComponent {
  @Input() song: Song = {...defaultSong};
}
