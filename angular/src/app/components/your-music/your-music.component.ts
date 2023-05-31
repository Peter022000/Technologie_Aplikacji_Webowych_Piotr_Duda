import { Component } from '@angular/core';
import {DataService} from "../../services/data.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'your-music',
  templateUrl: './your-music.component.html',
  styleUrls: ['./your-music.component.css']
})
export class YourMusicComponent {
  public items$: any;
//  public items$: Song[]; // items$ jest listą obiektów typu Song

  constructor(private service: DataService, private authService: AuthService) {
  }
  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.service.getAllByUser(this.authService.getUserId()).subscribe(response => {
      console.log(response);
      this.items$ = response;
    });
  }
}
