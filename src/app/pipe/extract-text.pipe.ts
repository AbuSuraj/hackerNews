import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'extractText'
})
export class ExtractTextPipe implements PipeTransform {
  transform(htmlString: string): string {
    
    const dummyElement = document.createElement('div');
    dummyElement.innerHTML = htmlString;
     
    return dummyElement.textContent || '';
  }
}
