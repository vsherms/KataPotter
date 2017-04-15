export default class Converter{
    constructor(){

    }

    singles(amount: number): string{
        switch(amount){
            case 0:
                return "";
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
        }
    }

    teens(amount: number): string{
        switch(amount){
            case 10:
                return "ten";
            case 11:
                return "eleven";
            case 12:
                return "twelve";
            case 13:
                return "thirteen";
            case 14:
                return "fourteen";
            case 15:
                return "fifteen";
            case 16:
                return "sixteen";
            case 17:
                return "seventeen";
            case 18:
                return "eighteen";
            case 19:
                return "nineteen";
        }
    }

    tens(amount: number): string{
        switch(amount){
            case 0: 
                return "";
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "fourty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
        }
    }

    convert(amount: number): string{
        // let words: string = "";
        // if(Math.floor(amount) == 1){
        //     return "one dollar";
        // }

        let splitAmount = Math.floor(amount).toString().split('').map(str => parseInt(str));
        // if(splitAmount.length > 4){
        //     if(splitAmount[splitAmount.length - 5] == 1){
        //     words += this.teens(splitAmount[splitAmount.length - 5] * 10 + splitAmount[splitAmount.length - 4]);
        // } else {
        //         words += this.tens(splitAmount[splitAmount.length - 5]);
        //     }
        // }
        // if(splitAmount.length > 3){
        //     if(!splitAmount[splitAmount.length -5 ]){
        //         words += this.singles(splitAmount[splitAmount.length -4]);
        //     }
        //     words += " thousand "; 
        // }
        // if(splitAmount.length > 2){
        //     if(splitAmount[splitAmount.length - 3] > 0){
        //         words += this.singles(splitAmount[splitAmount.length -3]) + " hundred and ";
        //     } else {
        //         words += "and";
        //     }
        //     if(splitAmount[splitAmount.length - 2] == 1){
        //     return words + this.teens(splitAmount[splitAmount.length-2]*10 + splitAmount[splitAmount.length-1]) + " dollars";
        // } else {
        //    words += this.tens(splitAmount[splitAmount.length -2]);
        //   }
        //    words += this.singles(splitAmount[splitAmount.length - 1]) + " dollars";
        //    return words;
        // }

        //  if(splitAmount[splitAmount.length - 2] == 1){
        //     return this.teens(amount) + " dollars";
        // } 

        // if(splitAmount.length > 1){
        // words += this.tens(splitAmount[splitAmount.length - 2]);
        // }
    
        // words += this.singles(splitAmount[splitAmount.length - 1]) + " dollars";
       

        return (splitAmount[splitAmount.length - 5] && splitAmount[splitAmount.length - 5] == 1 ? this.teens(splitAmount[splitAmount.length-5] * 10 + splitAmount[splitAmount.length-4]) + " " : 
               (splitAmount[splitAmount.length - 5] ? this.tens(splitAmount[splitAmount.length - 5]) + " " : "")) +
               (splitAmount[splitAmount.length - 4] && splitAmount[splitAmount.length - 5] !== 1 ? this.singles(splitAmount[splitAmount.length - 4]) + " " : "") + 
               (splitAmount.length > 3 ? "thousand " : "") +
               (splitAmount[splitAmount.length - 3] == 0 ? "and " : "") +
               (splitAmount[splitAmount.length - 3] ? this.singles(splitAmount[splitAmount.length - 3]) + " hundred and " : "") +
               (splitAmount[splitAmount.length - 2] && splitAmount[splitAmount.length - 2] == 1 ? this.teens(splitAmount[splitAmount.length-2] * 10 + splitAmount[splitAmount.length-1]) + " " : 
               (splitAmount[splitAmount.length - 2] ? this.tens(splitAmount[splitAmount.length - 2]) + " " : "")) +
               (splitAmount[splitAmount.length - 1] && splitAmount[splitAmount.length - 2] !== 1 ? this.singles(splitAmount[splitAmount.length - 1]) + " " : "") + 
               (amount > 1 ? "dollars" : "dollar");



               
    }
}