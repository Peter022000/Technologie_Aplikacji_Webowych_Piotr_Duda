import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Song} from "../../models/song";

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.css']
})
export class SongDetailsComponent {
  song : Song = {
    userId: '',
    image: '',
    text: '',
    title: '',
    author: '',
    type: '',
    year: NaN,
    length: NaN,
    album: '',
  };


  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.song = JSON.parse(params['song']);
      console.log(this.song);
    });
  }
}
