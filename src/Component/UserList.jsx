import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Divider, Typography } from '@mui/material';

const columns = [
 { id: 'name', label: 'UserName', minWidth: 170 },
  { id: 'code', label: 'ID', minWidth: 100 },
  {
    id: 'population',
    label: 'Contact Number',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'D.O.B',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'XYZ', 9000000000, 12/12/12),
  createData('China', 'XYZ', 9000000000, 12/12/12),
  createData('Italy', 'XYZ', 9000000000, 12/12/12),
  createData('United States', 'XYZ', 9000000000, 12/12/12),
  createData('Canada', 'XYZ', 9000000000, 12/12/12),
  createData('Australia', 'XYZ', 9000000000, 12/12/12),
  createData('Germany', 'XYZ', 9000000000, 12/12/12),
  createData('Ireland', 'XYZ', 9000000000, 12/12/12),
  createData('Mexico', 'XYZ', 9000000000, 12/12/12),
  createData('Japan', 'XYZ', 9000000000, 12/12/12),
  createData('France', 'XYZ', 9000000000, 12/12/12),
  createData('United Kingdom', 'XYZ', 9000000000, 12/12/12),
  createData('Russia', 'XYZ', 9000000000, 12/12/12),
  createData('Nigeria', 'XYZ', 9000000000, 12/12/12),
  createData('Brazil', 'XYZ', 9000000000, 12/12/12),
];

export default function UserList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <Typography gutterBottom variant='h5' component="div" sx={{padding:"20px"}}>
       User List
    </Typography>
    <Divider />
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}