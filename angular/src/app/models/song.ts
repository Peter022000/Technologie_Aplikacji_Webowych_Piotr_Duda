import {musicGenre} from "./musicGenre";

export interface Song {
  id?: string,
  userId: string;
  title: string;
  image: string;
  author: string;
  genre?: musicGenre | '';
  year: number;
  length: number;
  album: string;
  text: string;
}

export const defaultSong: Song = {
  userId: '',
  title: '',
  image: '',
  author: '',
  genre: '',
  year: NaN,
  length: NaN,
  album: '',
  text: '',
};
