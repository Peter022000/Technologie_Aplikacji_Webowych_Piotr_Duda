import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'expandText'
})
export class ExpandTextPipe implements PipeTransform {

  transform(text: string, maxLength: number): string {
    if (text.length <= maxLength) {
      return text;
    }

    const shortenedText = text.substring(0, maxLength);
    const ellipsis = '...';
    return shortenedText + ellipsis;
  }

}
