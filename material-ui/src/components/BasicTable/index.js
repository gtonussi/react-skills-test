import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useMediaQuery } from "@mui/material";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function LGBasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Dessert (100g serving)</strong></TableCell>
            <TableCell align="right"><strong>Calories</strong></TableCell>
            <TableCell align="right"><strong>Fat&nbsp;(g)</strong></TableCell>
            <TableCell align="right"><strong>Fat Calories&nbsp;(g)</strong></TableCell>
            <TableCell align="right"><strong>Carbs&nbsp;(g)</strong></TableCell>
            <TableCell align="right"><strong>Protein&nbsp;(g)</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
  );
}

function SMBasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        {rows.map((row, index) => (
          <React.Fragment key={row.name}>
            <TableRow
              sx={{
                bgcolor: index % 2 && "action.hover",
              }}
            >
              <TableCell component="th" scope="row">
                <strong>Dessert (100g serving)</strong>
              </TableCell>
              <TableCell align="right"><strong>{row.name}</strong></TableCell>
            </TableRow>
            <TableRow
              sx={{
                bgcolor: index % 2 && "action.hover",
              }}
            >
              <TableCell component="th" scope="row">
                Calories
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
            </TableRow>

            <TableRow
              sx={{
                bgcolor: index % 2 && "action.hover",
              }}
            >
              <TableCell component="th" scope="row">
                Fat&nbsp;(g)
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
            </TableRow>

            <TableRow
              sx={{
                bgcolor: index % 2 && "action.hover",
              }}
            >
              <TableCell component="th" scope="row">
                Carbs&nbsp;(g)
              </TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
            </TableRow>

            <TableRow
              sx={{
                bgcolor: index % 2 && "action.hover",
              }}
            >
              <TableCell component="th" scope="row">
                Protein&nbsp;(g)
              </TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          </React.Fragment>
        ))}
      </Table>
    </TableContainer>
  );
}

export default function BasicTable() {
  return(
    <>
      {useMediaQuery("(min-width:700px)") ? <LGBasicTable /> : <SMBasicTable />}
    </>
  )
}