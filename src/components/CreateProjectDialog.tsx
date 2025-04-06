import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { shadows, spacing } from '../constants/theme';
import React, { useState } from 'react';
import { Project } from '../types/common';
import {v4 as uuidv4} from "uuid";

type Props = {
  open: boolean;
  handleClose: () => void;
  setData: React.Dispatch<React.SetStateAction<Project[]>>;
};

const CreateProjectDialog: React.FC<Props> = ({ open, handleClose, setData }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [description, setDescription] = useState('');

  const handleCreateData = () => {
    if(title.trim() === ''){
        setError(true);
    }else{
        setData(prevState=>[...prevState, {id: uuidv4(),title, description: 'to-do', createdAt: new Date().toString()}])
    }
  };

  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={open}
      onClose={handleClose}
      sx={{ p: 2, boxShadow: shadows.card }}
    >
      <Container>
        <DialogTitle textAlign={'center'} variant="h6">
          Create New Project
        </DialogTitle>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Title (required)</Typography>
          <TextField
          label="Title"
          name='Title'
          data-testid="title-input"
            value={title}
            error={error}
            helperText={error ? 'Title is requied' : ''}
            onChange={(e) => {
                setError(false);
              setTitle(e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Description (optional)</Typography>
          <TextField label="description" name='description' value={description} data-testid="description-input" onChange={(e)=>{setDescription(e.target.value)}} fullWidth variant="outlined" />
        </Box>
        <Grid sx={{ mb: spacing.md }} container spacing={2}>
          <Grid size={6}>
            <Button sx={{p:2}} onClick={handleCreateData} fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </Grid>
          <Grid size={6}>
            <Button data-testid="submit-btn" sx={{p:2}} onClick={handleClose} fullWidth variant="text" color="secondary">
              Close
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default CreateProjectDialog;
