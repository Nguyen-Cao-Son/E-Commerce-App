import React from "react";
import  Grid  from "@material-ui/core"; 

const products = [
{ id:1,name:'shoe',description:'shoe running',price:'$5'},
{ id:2,name:'Iphone',description:'Iphone 8 plus ',price:'$18'}

]

const Products = () =>{

 return(
    <main>
    <Grid container justify="center" spacing={4}>
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