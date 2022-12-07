import { React, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  styled,
  Button,
} from "@mui/material";

import { editBranch, getBranch } from "../server/api.js";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  branchName: "",
  branchCode: "",
  branchAddress: "",
};

export default function EditBranch() {
  const [branch, setBranch] = useState(defaultValue);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    loadBranchDetails();
  }, []);

  const loadBranchDetails = async () => {
    const response = await getBranch(id);
    setBranch(response.data);
  };

  const onValueChange = (e) => {
    setBranch({ ...branch, [e.target.name]: e.target.value });
  };

  const editBranchDetails = async () => {
    await editBranch(branch, id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Employee</Typography>
      <FormControl>
        <InputLabel> Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="branchName"
          value={branch.branchName}
        />
      </FormControl>
      <FormControl>
        <InputLabel>username</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="branchCode"
          value={branch.branchCode}
        />
      </FormControl>
      <FormControl>
        <InputLabel> Address</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="branchAddress"
          value={branch.branchAddress}
        />
      </FormControl>
      <FormControl>
        <Button variant="contained" id = "edit" onClick={() => editBranchDetails()}>
          Edit Employee
        </Button>
      </FormControl>
    </Container>
  );
}
