import { Pipe, PipeTransform } from '@angular/core';
import {withIdentifier} from 'codelyzer/util/astQuery';

@Pipe({
  name: 'hashtag'
})
export class HashtagPipe implements PipeTransform {

  transform(value: string): string {
    const words = value.split(' ');
    words.forEach(word => {
      if (word.startsWith('#')) {
        value = value.replace(word, '<span class="hashtag">' + word + '</span>');
      }
    });
    return value;
  }

}
