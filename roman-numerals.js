//Kata: https://www.codewars.com/kata/51b66044bce5799a7f000003

//Create a RomanNumerals class that can convert a roman numeral to and from an integer value. It should follow the API demonstrated in the examples below. Multiple roman numeral values will be tested for each helper method.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Input range : 1 <= n < 4000

// In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

//M -> 1000
//D -> 500 
//C -> 100 
//L -> 50
//X -> 10
//V -> 5 
//I -> 1

//So, for numbers 1-4, 10-40, 100-400 
//1-4: I, II, III, IV
//10-40:   X, ..., XX, ..., XXX, ..., XL
//100-400: C, ..., CC, ..., CCC, ..., CD

//And for numbers 5-9, 50-90, 500-900
//5-9: V, VI, VII, VIII, IX 
//50-90: L, LX, LXX, LXXX, XC
//500- 900: D, DC, DCC, DCCC, CM 


class RomanNumerals{

    toRoman(numA){
        let str = '';
        if(numA / 1000 > 0){
            for(let i= 0; i < Math.floor(numA/1000) ; i++){
                str += 'M';
            }
           numA = numA % 1000;
        }
        if(numA / 100 > 0){
            let c = Math.floor(numA/100);
            if(c < 4) {
                for(let i=0; i < Math.floor(numA/100) ; i++){
                    str += 'C'
                }
            } else if (c === 4){
                str+= 'CD';
            } else if (c > 4 && c < 9){
               str+= 'D'
               for(let i =0; i < (c - 5); i++){
                   str+= 'C';
               }
            } else {
                str+= 'CM'
            }
            numA = numA % 100;
        }
        if(numA/10 > 0){
            let d = Math.floor(numA/10);
            if(d < 4){
                for(let i=0; i < Math.floor(numA/10) ; i++){
                    str += 'X'
                }
            } else if (d === 4){
                str+= 'XL';
            } else if (d > 4 && d < 9){
               str+= 'L'
               for(let i =0; i < (d - 5); i++){
                   str+= 'X';
               }
            } else {
                str+= 'XC'
            }
            numA = numA % 10;
        } 
        if(numA > 0){
            if ( numA < 4){
                for(let i = 0 ; i < numA ; i++){
                    str+= 'I'
                }
            } else if ( numA === 4){
                str+= 'IV'
            } else if (numA > 4 && numA < 9){
                str+= 'V'
                for(let i =0; i< numA - 5; i++){
                    str+= 'I'
                }
            } else {
                str+= 'IX'
            }
        }

        return str;
    }

    fromRoman(numR){
        let numA = 0;
        let legend = {'M': 1000, 'CM': 900, 'D': 500, 'CD': 400, 'C': 100, 'XC': 90, 'L': 50, 'XL': 40, 'X': 10, 'IX': 9, 'V': 5, 'IV': 4, 'I': 1, '': 0}
        numR.split('').forEach((char,index, array) => {
              if(legend[char] < legend[array[index+1]]){
                  numA+= legend[char + array[index+1]];
              } else if (index > 0 && legend[char] > legend[array[index-1]]){
                //this is purely to avoid counting certain numbers twice 
                numA+= 0;
              } else {
                  numA += legend[char]
              }
        })
        return numA
    }

}

let ins = new RomanNumerals().toRoman(4); 
console.log(ins)
let string = new RomanNumerals().toRoman(21);
let ins0 = new RomanNumerals().fromRoman(string);
console.log(ins0)
