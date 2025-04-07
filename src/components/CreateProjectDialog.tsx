import {
  Box,
  Button,
  Container,
  Dialog,
  DialogTitle,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { shadows, spacing } from '../constants/theme';
import React, { useContext, useState } from 'react';
import { Project } from '../types/common';
import { v4 as uuidv4 } from 'uuid';
import { MiniContext } from '../context/MiniContext';

type Props = {
  open: boolean;
  handleClose: () => void;
  setData: React.Dispatch<React.SetStateAction<Project[]>>;
};

const CreateProjectDialog: React.FC<Props> = ({ open, handleClose, setData }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState(false);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('active');

  const { dispatch } = useContext(MiniContext);

  const handleCreateData = () => {
    if (title.trim() === '') {
      setError(true);
    } else {
      dispatch({
        type: 'ADD_PROJECT',
        payload: {
          id: uuidv4(),
          title,
          description: 'to-do',
          createdAt: new Date().toString(),
          status: 'to-do',
        },
      });
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
            name="Title"
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
          <TextField
            multiline
            label="description"
            name="description"
            value={description}
            data-testid="description-input"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            fullWidth
            variant="outlined"
          />
        </Box>
        <Select
          fullWidth
          id="task-status"
          value={status}
          label="Status"
          sx={{ mb: spacing.md }}
          data-testid="select-status"
          onChange={(e) => {
            setStatus(e.target.value as string);
          }}
        >
          <MenuItem value="active">Active</MenuItem>
          <MenuItem value="in-progress">In Progress</MenuItem>
          <MenuItem value="completed">Completed</MenuItem>
        </Select>
        <Grid sx={{ mb: spacing.md }} container spacing={2}>
          <Grid size={6}>
            <Button
              sx={{ p: 2 }}
              onClick={handleCreateData}
              fullWidth
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
            
              data-testid="submit-btn"
              sx={{ p: 2 }}
              onClick={handleClose}
              fullWidth
              variant="text"
              color="secondary"
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default CreateProjectDialog;
