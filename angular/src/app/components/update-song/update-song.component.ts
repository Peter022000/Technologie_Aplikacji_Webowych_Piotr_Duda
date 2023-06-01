import {Component, ViewChild} from '@angular/core';
import {defaultSong, Song} from "../../models/song";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {musicGenre} from "../../models/musicGenre";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})
export class UpdateSongComponent {
  @ViewChild('songForm') songForm!: NgForm;
  musicGenres: string[] = Object.values(musicGenre);
  song : Song = { ...defaultSong };

  constructor(private service: DataService, private authService: AuthService, private route: ActivatedRoute, public router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.route.queryParams.subscribe(params => {
      const id = params['songId'];
      this.service.getById(id).subscribe(response => {
        this.song = response as Song;
        if(!this.authService.isLoggedIn() || this.authService.getUserId() !== this.song.userId) {
          this.router.navigate(['/']);
        }
      });
    });
  }


  updateSong() {
    if (this.authService.isLoggedIn() && this.songForm.valid) {
      this.service.updateMusic(this.song).subscribe((result) => {
        this.snackBar.open('Zmodyfikowałeś utwór ', 'OK', {
          duration: 3000,
          verticalPosition: 'top'
        });
      });
      this.router.navigate(['/']);
    }
  }
}
