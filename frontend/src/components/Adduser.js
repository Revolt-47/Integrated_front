import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { addBranch } from "../server/api.js";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  EmpName: "",
  username: "",
  Address: "",
  email: "",
};

export default function AddBank() {
  const [branch, setBranch] = useState(defaultValue);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setBranch({ ...branch, [e.target.name]: e.target.value });
  };

  const addBranchDetails = async () => {
    await addBranch(branch);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add Employee</Typography>
      <FormControl>
        <InputLabel> EmpName</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="branchName" />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="branchCode" />
      </FormControl>
      <FormControl>
        <InputLabel>Address</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="branchAddress" />
      </FormControl>
      <FormControl>
        <InputLabel>email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email" />
      </FormControl>
      <FormControl>
        <Button variant="contained" id="add" onClick={() => addBranchDetails()}>
          Add Emp
        </Button>
      </FormControl>
    </Container>
  );
}
