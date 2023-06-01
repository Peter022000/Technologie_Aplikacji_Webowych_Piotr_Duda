import {musicGenre} from "./musicGenre";

export interface Song {
  id?: string,
  userId: string;
  title: string;
  image: string;
  author: string;
  genre: musicGenre | '';
  year: number;
  length: number;
  album: string;
  text: string;
  [key: string]: any; // Indeksowanie typu
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
