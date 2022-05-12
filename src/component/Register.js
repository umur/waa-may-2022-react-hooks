import { Avatar, Button,Grid, Paper, TextField } from "@material-ui/core";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from "react";

const Register = () => {
    const paperStyle = { padding :20 , height : '70vh', width : 280, margin : '20px auto'}
    const avatarStyle = {backgroundColor : "#1bbd7e"}
    const btnStyle = {margin : "8px 0px"}
    return (
        <Grid>
            <Paper elevation ={10} style = {paperStyle}>
                <Grid  align="center">

                    <Avatar style={avatarStyle}>
                    <LockOutlinedIcon/>
                    </Avatar>
                    <h2> Sign Up </h2>

                </Grid>
                <TextField label="First Name" placeholder="Enter first Name" fullWidth></TextField>
                <TextField label="Last Name" placeholder="Enter Last Name" fullWidth></TextField>
                <TextField label="User Name" placeholder="Enter user Name" fullWidth></TextField>
                <TextField label="Email" placeholder="Enter Email" fullWidth></TextField>
                <TextField type="password" label="Password" placeholder="Enter Password" fullWidth></TextField>
                <TextField type="password" label="Confirm Password" placeholder="Confirm Password" fullWidth></TextField>
                
                <Button type = "submit" color="primary" variant = "contained" style={btnStyle} fullWidth>Sign up</Button>
            
            </Paper>
        </Grid>
    );
}
export default Register