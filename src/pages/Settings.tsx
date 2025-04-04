import { FormControl, InputLabel, TextField, Typography } from "@mui/material";

const Settings: React.FC = () => {
    return <>
      <Typography variant="h2" gutterBottom>Settings</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <TextField id="outlined-basic" label="filled" variant="filled"/>
      </FormControl>
    </>;
  };
  
  export default Settings;
  