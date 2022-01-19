export const valuesOfProduct = (price, inStock) => price * inStock


//we use export here because we will have mutiple functions

export const valueOfStore = products => {
   /* let value = 0 

    for (let x = 0; x < products.length; x++){
        const product = products[x]
        value += valuesOfProduct(product.price, product.inStock)
    }
    return value */

      return products.reduce((value,product) => value + valuesOfProduct(product.price, product.inStock), 0)
    }


export const currencyFormat = value => `$${value.toFixed(2)}`