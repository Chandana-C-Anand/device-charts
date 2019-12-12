import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 400,
    height: '50%',
  },
});

export default function CustomizedTables(props) {
    const classes = useStyles();
  return (
        <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Device Name</StyledTableCell>
            <StyledTableCell align="center">Device EUI</StyledTableCell>
            <StyledTableCell align="center">Received at</StyledTableCell>
            <StyledTableCell align="center">Data&nbsp;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {props.rows.map(row => (
            <StyledTableRow key={row.dev_eui}>
              <StyledTableCell component="th" scope="row">  {row.device_name}           </StyledTableCell>
              <StyledTableCell align="center">               {row.dev_eui}               </StyledTableCell>
              <StyledTableCell align="center">               {row.received_at}           </StyledTableCell>
              <StyledTableCell align="left">               {JSON.stringify(row.data)}  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}