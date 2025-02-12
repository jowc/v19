import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: string[]): unknown {
    let text = ""
    // check if string has space and group string
    let words = value.split(" ")

    // Capitalize first letters and add to scoped variable
    if(words.length > 1){
      for(let i = 0; i < words.length; i++){
        // check if last word
        if(i == words.length - 1){
          text += words[i].charAt(0).toUpperCase() + words[i].slice(1)
        } else {
          text += words[i].charAt(0).toUpperCase() + words[i].slice(1) + " "
        }
      }

      return text
    }

    text = value.charAt(0).toUpperCase() + value.slice(1)

    return `${text}. Chose color ${args[0]}`;
  }

}
