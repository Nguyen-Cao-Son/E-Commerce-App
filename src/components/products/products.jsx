import React from "react";
import  {Grid}  from "@material-ui/core"; 
import Product from "./product/Product.jsx"
import useStyle from "./styles"


const Products = ({products}) =>{
  const classes = useStyle()

 return(
    <main className={classes.content}>
     <div className={classes.toolbar} />
    <Grid container justifyContent="center" spacing={8}>
      {products.map( (product)=> (
    //    <div>product.id</div>   
    //    <div>product.name</div>   
    //    <div>product.description</div>   
      <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
         <Product product={product} />
        
       </Grid>

      )
      ) }

    </Grid>

    </main>
 )


}
export default Products