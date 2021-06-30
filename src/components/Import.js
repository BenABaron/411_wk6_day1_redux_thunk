import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container, Menu, MenuItem } from '@material-ui/core'
import { MoreVert } from '@material-ui/icons'

const Import = (props) => {
    // fill out this component

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    const test = (index) => {
        console.log(index)
        props.removeMake(index)
    }

    return (
        <Container>
            <p>Import Component</p>
            <Button variant='contained' color='primary' onClick={() => props.fetchMakes()}>Click Me!</Button>
            <h2>COUNT: {props.makes.length}</h2>
            <Table>
                <TableHead>
                    <TableRow>    
                        <TableCell>ID</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make, index) => {
                        // console.log(index)
                        return (
                            <TableRow key={index}>
                                <TableCell>{make.MakeId}</TableCell>
                                <TableCell>{make.MakeName}</TableCell>
                                <TableCell>
                                    <Button aria-controls={`${index}-simple-menu`} aria-haspopup='true' onClick={handleClick}>
                                        <MoreVert></MoreVert>
                                    </Button>
                                    <Menu
                                        id={`${index}-simple-menu`}
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        key={index}
                                    >
                                        <MenuItem onClick={() => test(index)}>DELETE</MenuItem>
                                    </Menu>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import

// export default function SimpleMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);
  
//     const handleClick = (event) => {
//       setAnchorEl(event.currentTarget);
//     };
  
//     const handleClose = () => {
//       setAnchorEl(null);
//     };
  
//     return (
//       <div>
//         <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//           Open Menu
//         </Button>
//         <Menu
//           id="simple-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <MenuItem onClick={handleClose}>Profile</MenuItem>
//           <MenuItem onClick={handleClose}>My account</MenuItem>
//           <MenuItem onClick={handleClose}>Logout</MenuItem>
//         </Menu>
//       </div>
//     );
//   }