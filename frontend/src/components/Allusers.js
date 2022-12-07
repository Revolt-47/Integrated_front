import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBranches, deleteBranch } from "../server/api";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Head = styled(TableRow)`
  background: #555555;
  & > th {
    color: #fff;
    font-size: 20px;
  }
`;

export default function AllBanks() {
  const [branches, setBranches] = useState([]);

  useEffect(() => {
    getAllBranches();
  }, []);

  const getAllBranches = async () => {
    let response = await getBranches();
    setBranches(response.data);
  };

  const deleteBranchById = async (id) => {
    await deleteBranch(id);
    getAllBranches();
  };

  return (
    <StyledTable>
      <TableHead>
        <Head>
          <TableCell>ID</TableCell>
          <TableCell>Emp Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Address</TableCell>
          <TableCell>email</TableCell>
          <TableCell></TableCell>
        </Head>
      </TableHead>

      <TableBody>
        {branches.map((branch) => (
          <TableRow key={branch._id}>
            <TableCell>{branch._id}</TableCell>
            <TableCell>{branch.branchName}</TableCell>
            <TableCell>{branch.branchCode}</TableCell>
            <TableCell>{branch.branchAddress}</TableCell>
             <TableCell>{branch.email}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                style={{ marginRight: 10 }}
                component={Link}
                to={`/edit/${branch._id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained" id = "del"
                color="secondary"
                onClick={() => deleteBranchById(branch._id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </StyledTable>
  );
}
