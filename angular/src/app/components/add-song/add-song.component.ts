import {Component, ViewChild} from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { NgForm } from '@angular/forms';
import {defaultSong, Song} from "../../models/song";
import {musicGenre} from "../../models/musicGenre";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.css']
})
export class AddSongComponent {
  @ViewChild('songForm') songForm!: NgForm;
  musicGenres: string[] = Object.values(musicGenre);

  public newSong : Song = {...defaultSong};

  constructor(private authService: AuthService, private dataService: DataService, public router: Router, private snackBar: MatSnackBar) {
    this.newSong.userId = this.authService.getUserId();
  }

  addSong() {
    if (this.authService.isLoggedIn() && this.songForm.valid) {
      this.dataService.addMusic(this.newSong).subscribe((result) => {
        this.snackBar.open('Dodałeś utwór', 'OK', {
          duration: 3000,
          verticalPosition: 'top'
        });
      });
      this.router.navigate(['/']);
    }
  }
}
