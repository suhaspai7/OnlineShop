import React from 'react';
import { makeStyles, createStyles} from '@material-ui/core';
const useStyles = makeStyles(() =>
  createStyles({
    wrapper: {
      display: 'flex',
    },
    child: {
      flex: 1,
      height: '100vh',
    },
  }),
);

const SplitTemplate=({leftChild,rightChild})=>{
    const classes=useStyles();
    return(
      <>
        <main className={classes.wrapper}>
            <div className={classes.child}>{leftChild}</div>
            <div className={classes.child}>{rightChild}</div>
        </main>
      </>
    );
};

export default SplitTemplate;