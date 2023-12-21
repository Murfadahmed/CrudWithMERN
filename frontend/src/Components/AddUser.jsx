import styled from "@emotion/styled";
import {
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { addUser } from "../Services/Api";
const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;
const defultValue = {
  name: "",
  email: "",
  phone: "",
  skey: "",
  file: "",
};
function AddUser() {
  const [user, setUser] = useState(defultValue);
  const AddUserHandler = async () => {
    await addUser(user);  
    // console.log("user add ho gaya",user);
  };
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };
  return (
    <div>
      <Container>
        <Typography variant="h4">Add User</Typography>
        <FormControl>
          <InputLabel>Name</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="name" />
        </FormControl>
        <FormControl>
          <InputLabel>Email</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="email" />
        </FormControl>
        <FormControl>
          <InputLabel>Phone</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="phone" />
        </FormControl>
        <FormControl>
          <InputLabel>Secret key</InputLabel>
          <Input onChange={(e) => onValueChange(e)} name="skey" />
        </FormControl>
        <FormControl>
          <InputLabel>Picture</InputLabel>
          <Input type="file" onChange={(e) => onValueChange(e)} name="file" />
        </FormControl>
        <FormControl>
          <Button variant="contained" onClick={AddUserHandler}>
            Add User
          </Button>
        </FormControl>
      </Container>
    </div>
  );
}

export default AddUser;
