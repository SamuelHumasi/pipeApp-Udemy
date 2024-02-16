import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'togleCase'
})

export class TogleCase implements PipeTransform {
    
    transform(value: string, exceptions: string[]): string {
        if (!value){return value}
        const words = value.split(' ')
        const capitalizableWords = words.map(word => {
            const lowerCaseWord = word.toLowerCase();
            if (exceptions.includes(lowerCaseWord)) {
                return lowerCaseWord
            }else{
                return lowerCaseWord.toUpperCase()
            }
        })
    return capitalizableWords.join(' ')  
    }
}