import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";
import {Song} from "../../models/song";

@Component({
  selector: 'your-music',
  templateUrl: './your-music.component.html',
  styleUrls: ['./your-music.component.css']
})
export class YourMusicComponent {
  public items$: Song[] = [];

  constructor(private service: DataService, private authService: AuthService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAllByUser(this.authService.getUserId()).subscribe(response => {
      console.log(response);
      this.items$ = response as Song[];
    });
  }
}
