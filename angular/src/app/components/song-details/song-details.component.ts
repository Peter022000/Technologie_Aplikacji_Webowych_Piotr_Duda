import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {defaultSong, Song} from "../../models/song";
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent {
  song : Song = { ...defaultSong };

  constructor(private service: DataService, private authService: AuthService, private route: ActivatedRoute, public router: Router) {}

  ngOnInit() {
    this.getById();
  }

  getById() {
    this.route.queryParams.subscribe(params => {
      const id = params['songId'];
      this.service.getById(id).subscribe(response => {
        this.song = response as Song;
      });
    });
  }

  delete() {
    this.service.deleteMusic(this.song.id as string).subscribe(response => {
      console.log(response);
    });
    this.router.navigate(['/']);
  }
}
