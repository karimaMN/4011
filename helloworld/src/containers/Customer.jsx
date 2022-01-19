import React from 'react'
import ProductTable from '../components/ProductTable'
import products from '../api/products'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'

const Customer = () =>{
    return (
            <div>
                <Paper style= {{ background: 'blue', width: '500px', padding:'5px'}}> 
                  <Typography  component="h5">
                     Customer page!
                   </Typography>
            </Paper>
          <ProductTable products = {products} showtotalvalue={false} showStackValue={false} />
          </div>
    )
}
export default Customer 