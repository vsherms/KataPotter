export default class Order{
    constructor(){

    }
    price(books): number{
        let cost: number = 0;
        let discountcounter: number = 0;
        let bookorder: number[] = [0,0,0,0,0];
        for(let i: number = 0; i < books.length; i++){
            bookorder[books[i]]++;
        }
        
        bookorder.forEach(book => {
            if(book > 0){
                discountcounter++;
            }
        })

        bookorder.forEach((book, index)  => {
            let discount: number = 1;
            if(discountcounter == 2){
            discount = 0.95;
            
            } else if(discountcounter == 3){
            discount = 0.9;
            } else if(discountcounter == 4){
            discount = 0.8;
            } else if(discountcounter == 5){
            discount = 0.75;
        }
            if(book > 0){
                cost+=(8 * discount);
                bookorder[index]--;
            }
        })
        
        let newOrder: number[] = []; 
        for(let i: number = 0; i < bookorder.length; i++){
            for(let j: number = bookorder[i]; j > 0; j--){
                newOrder.push(i);
            }
        }

        if(discountcounter == 5 && newOrder.length == 3){
            return ((cost/30-1)*30)+(2*25.6);
        }

        if(newOrder.length > 0){
            cost += this.price(newOrder);
        }
        
        return cost;
    }
}