import React from 'react';
import { Button } from './button';
import FilterList from '@mui/icons-material/FilterList';
import ChevronRight from '@mui/icons-material/ChevronRight';
import MoreHoriz from '@mui/icons-material/MoreHoriz';

export const Buttons = () => {

  const onClick = () => { 
    console.log('Button clicked')
  }

  return (
    <div className="vertical">
    <Button variant='contained' onClick={onClick}>
      <span>Label</span>
    </Button>
    <br />
    <br />
    <Button variant='contained' onClick={onClick}>
    <FilterList />
    <span>Label</span>
    </Button>
    <br />
    <br />
    <Button variant='contained' onClick={onClick}>
    <span>Label</span>
      <ChevronRight />
    </Button>
    <br />
    <br />
    <Button variant='contained' onClick={onClick}>
    <MoreHoriz />
    </Button>
  </div>
  );
}

export const BasicButton = () => {
  return <Button variant='contained' onClick={() => console.log("Basic button clicked")}>
  <span>hello world!</span>
  </Button>
}
