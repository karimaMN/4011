import React from 'react'
import {valuesOfProduct } from '../api/values'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import {currencyFormat} from '../api/values'


 const ProductTable = ({products = [],showtotalvalue = true, showStackValue = false}) => {

    const stackValue = value => {
        if(showStackValue){
            return value
        }
        return value > 0 ? 'in Stock' : 'Out of stock'
    }
    const tableRows = products.map(product => {
        return (
            
            <TableRow key={product.name}>
                <TableCell>
                    {product.name}
                </TableCell>
                <TableCell>
                {currencyFormat(product.price)}
                </TableCell>
                
                <TableCell>
                   {showStackValue ? product.inStock : stackValue(product.inStock)}
                </TableCell>

                { showtotalvalue && ( <TableCell>
                   {currencyFormat(valuesOfProduct(product.price, product.inStock))}
                </TableCell>) 
                }

                

                
            </TableRow>
            
            )
    })
    return (
        <TableContainer component={Paper} style ={{width: '500px'}}>
            <Table>
            <TableHead>
              <TableRow>
               <TableCell>Product Name</TableCell>
               <TableCell >Price</TableCell>
               <TableCell >In stack</TableCell>
               {showtotalvalue ? <TableCell >Values in Store</TableCell> : null}

          </TableRow>
        </TableHead>

        <TableBody>
              {tableRows}
             </TableBody>
           </Table>  
 
          
       </TableContainer>


    )
}

export default ProductTable