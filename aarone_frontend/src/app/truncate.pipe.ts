import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, words: number): string {
    if (!value) return '';

    const wordArray = value.split(' ');
    if (wordArray.length <= words) return value;

    const truncatedText = wordArray.slice(0, words).join(' ');
    return truncatedText + '...';
  }
}
