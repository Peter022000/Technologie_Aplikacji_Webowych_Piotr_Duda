import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {defaultSong, Song} from "../../models/song";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent {
  song : Song = { ...defaultSong };
  user : string = '';
  showFullText = false;

  constructor(private service: DataService, private authService: AuthService, private route: ActivatedRoute, public router: Router, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.route.queryParams.subscribe(params => {
      const id = params['songId'];
      this.service.getById(id).subscribe(response => {
        this.song = response as Song;

        if(this.authService.isLoggedIn() && this.song.userId === this.authService.getUserId()) {
          this.user = "Zamieściłeś ty";
        } else {
          this.service.getUserName(this.song.userId).subscribe(response => {
           this.user = "Zamieścił: " + response as string;
          });
        }
      });
    });
  }

  delete() {
    if(this.authService.isLoggedIn() && this.authService.getUserId() === this.song.userId) {
      this.service.deleteMusic(this.song.id as string).subscribe(response => {
        this.snackBar.open('Usunąłeś utwór ', 'OK', {
          duration: 3000,
          verticalPosition: 'top'
        });

      });
      this.router.navigate(['/']);

    }
  }

  toggleFullText() {
    this.showFullText = !this.showFullText;
  }

}
