import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AuthGuard} from "./services/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {AddSongComponent} from "./components/add-song/add-song.component";
import {YourMusicComponent} from "./components/your-music/your-music.component";
import {MusicOfOthersComponent} from "./components/music-of-others/music-of-others.component";
import {SongDetailsComponent} from "./components/song-details/song-details.component";
import {UpdateSongComponent} from "./components/update-song/update-song.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'addSong',
    component: AddSongComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'yourMusic',
    component: YourMusicComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'songDetails',
    component: SongDetailsComponent
  },
  {
    path: 'songUpdate',
    component: UpdateSongComponent
  },
  {
    path: 'musicOfOther',
    component: MusicOfOthersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
