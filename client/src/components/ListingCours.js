import React, { Component } from 'react';

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

class CoursButton extends Component{
    render(){
        return <MenuItem onClick={this.props.handleClose}>{this.props.nom}</MenuItem>
    }
}

class CoursButtonList extends Component{
  render(){
    return(
      <div>
    {
      this.props.data.map(item =>(
        <CoursButton nom={item.nom} handleClose={this.props.handleClose}/>
      ))
    }
    </div>)
  }
}



function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Mes cours
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >

        <CoursButtonList data={props?.data ?? [{"nom":"nom_vide_chargement"}]} handleClose={handleClose}/>

      </Menu>
    </div>
  );
}

class ListingCours extends Component{
  state = { 
    loading : true,
    data : null
  } 

  async componentDidMount() {
      const url = "http://localhost:5000/cours";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({loading : false, data : data});
  }

  render(){
    return(
      <BasicMenu data={this.state.data}/>
    )
    
  }
}
 
export default ListingCours;