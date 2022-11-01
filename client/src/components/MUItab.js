import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import Rating from '@mui/material/Rating';



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData(<a href="/phone/1">Apple Iphone 11</a>, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="3" readOnly />),
    createData(<a href="/phone/2">Fairphone 4</a>, <Rating name="read-only" value="5" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="3" readOnly />),
    createData(<a href="/phone/3">téléphone 3</a>, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="4" readOnly />),
    createData(<a href="/phone/4">téléphone 4</a>, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />),
    createData(<a href="/phone/5">téléphone 5</a>, <Rating name="read-only" value="1" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="1" readOnly />),
    createData(<a href="/phone/5">téléphone 6</a>, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />),
    createData(<a href="/phone/5">téléphone 7</a>, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="3" readOnly />),
    createData(<a href="/phone/5">téléphone 8</a>, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="5" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="3" readOnly />),
    createData(<a href="/phone/5">téléphone 9</a>, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="3" readOnly />),
    createData(<a href="/phone/5">téléphone 10</a>, <Rating name="read-only" value="4" readOnly />, <Rating name="read-only" value="3" readOnly />, <Rating name="read-only" value="2" readOnly />, <Rating name="read-only" value="3" readOnly />),

  ];



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="general" {...a11yProps(0)} />
          <Tab label="par réparabilité" {...a11yProps(1)} />
          <Tab label="par polution" {...a11yProps(2)} />
          <Tab label="par éthique de travail" {...a11yProps(2)} />
          <Tab label="par durée de vie" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <br></br>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><b>Smartphone</b></TableCell>
                            <TableCell align="right"><b>Réparabilité</b></TableCell>
                            <TableCell align="right"><b>Pollution</b></TableCell>
                            <TableCell align="right"><b>Éthique de travail</b></TableCell>
                            <TableCell align="right"><b>Durée de vie</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <br></br>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><b>Smartphone</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <br></br>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell><b>Smartphone</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                            <TableCell align="right"><b>info1</b></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map((row) => (
                            <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </TableContainer>
      </TabPanel>
    </Box>
  );
}