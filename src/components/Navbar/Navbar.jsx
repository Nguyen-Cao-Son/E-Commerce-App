import React from 'react'
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography  } from '@material-ui/core'
import logo from '../../assets/commerce.png'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from  './styles'

const Navbar = () => {
    const classes =useStyles();
  return (
    <React.Fragment>
        <AppBar position='fixed' className={classes.appBar} color ='inherit'>
         <Toolbar>
            <Typography>
                <img src={logo} alt='Commerce.js' height={"25px"} className={classes.image} />
                Commerce.js
            </Typography>
            <div className={classes.grow} > </div>
            <div className={classes.button}>
               <IconButton aria-label='show cart items' color='inherit'>
                <Badge badgeContent={0} color='secondary'>
                    <ShoppingCart/>
                </Badge>
               </IconButton>

            </div>
         </Toolbar>
        </AppBar >
    </React.Fragment>
  )
}

export default Navbar