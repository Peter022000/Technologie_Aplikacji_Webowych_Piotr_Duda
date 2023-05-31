import {Component, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import {Song} from "../../models/song";

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent {
  @ViewChild('songForm') songForm!: NgForm;
  musicTypes: string[] = [
    'Rock',
    'Pop',
    'Hip Hop',
    'Jazz',
    'Blues',
    'Country',
    'Electronic',
    'Reggae',
    'R&B',
    'Classical',
    'Folk',
    'Metal',
    'Indie',
    'Punk',
    'Funk',
    'Soul',
    'Disco',
    'Gospel',
    'Latin',
    'Alternative',
    'World',
    'Experimental',
    'Ambient',
    'Dance',
    'Techno',
    'House',
    'Dubstep',
    'Trap'
  ];
  newSong : Song = {
    userId: this.authService.getUserId(),
    image: '',
    text: '',
    title: '',
    author: '',
    type: '',
    year: NaN,
    length: NaN,
    album: '',
  };

  constructor(private authService: AuthService, private dataService: DataService, public router: Router) {
  }

  addSong() {
    if (this.authService.isLoggedIn() && this.songForm.valid) {
      this.dataService.addMusic(this.newSong).subscribe((result) => {
        return result;
      });
      this.router.navigate(['/']);
    }
  }
}
