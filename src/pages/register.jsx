import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const Register=()=>{
    return(
        <>
        <div>Register</div>
        <Box>
            <TextField
             label="username"
             sx={
                {input:{color:"white"},
            }
            }
             />
        </Box>
        </>
        
    )
}
export default Register;