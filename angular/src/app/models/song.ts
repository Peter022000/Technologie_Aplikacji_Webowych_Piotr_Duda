export interface Song {
  id?: string,
  userId: string;
  title: string;
  image: string;
  author: string;
  type: string;
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
  type: '',
  year: 0,
  length: 0,
  album: '',
  text: '',
};
