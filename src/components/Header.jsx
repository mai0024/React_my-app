/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Main from './Main';
import About from './About';
import Hobby from './Hobby';
import Future from './Future';
import './Header.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginLeft: '60px',
    },
  },
}));

const Links = () => {

  const classes = useStyles();

  return (
    <div className='header'>
      <Typography className={classes.root}>
        <a href="#a" style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>Self PR</a>
        <a href="#b" style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>About</a>
        <a href="#c" style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>Hobby</a>
        <a href="#d" style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>Future</a>
        </Typography>
    </div>
  );
}

// const Links = () => {
//   const classes = useStyles();
//   const preventDefault = (event) => event.preventDefault();

//   return (
//     <div className="header">
//         <Typography className={classes.root}>
//             <Link className='nav' href="#a" onClick={preventDefault} style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>
//                 Self PR
//             </Link>
//             <Link className='nav' href="#b" onClick={preventDefault} style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}> 
//                 About
//             </Link>
//             <Link className='nav' href="#c" onClick={preventDefault} style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>
//                 Hobby
//             </Link>
//             <Link className='nav' href="#d" onClick={preventDefault} style={{textDecoration:'none',color:'#707070',fontWeight:'600',fontSize:'20px'}}>
//                 Future
//             </Link>
//         </Typography>

//     </div>
//   );
// }

export default Links;