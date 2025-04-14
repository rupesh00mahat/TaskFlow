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
import { useContext, useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { MiniContext } from '../context/MiniContext';
import { v4 } from 'uuid';
import { Task } from '../types/common';

type Props = {
  open: boolean;
  handleClose: () => void;
  projectId: string | undefined,
};

const CreateTaskDialog: React.FC<Props> = ({ open, handleClose, projectId }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setTitleError] = useState(false);
  const [date, setDate] = useState(dayjs('2025-04-07'));
  const [errorDate, setDateError] = useState(false);
  const [status, setStatus] = useState('');
  const {dispatch} = useContext(MiniContext);

  console.log('projectId', projectId);

  const addTask = () => {
    dispatch({type: 'ADD_TASK', payload: {projectId: projectId as string,id: v4(),title, description, dueDate:date.toString(), status} as Task})
    setTitle('');
    setDescription('');
    setStatus('');
  }

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
          Create New Task
        </DialogTitle>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Title (requied)</Typography>
          <TextField
            fullWidth
            error={errorTitle}
            helperText={errorTitle && 'Title is required'}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            label="Title"
            name="Title"
            value={title}
          />
        </Box>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Description (optional)</Typography>
          <TextField
            fullWidth
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            label="Description"
            name="Description"
            value={description}
          />
        </Box>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Date Picker (required)</Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                value={date}
                onChange={(newValue) => {
                  setDate(dayjs(newValue));
                }}
                label="Basic date picker"
              />
          </LocalizationProvider>
        </Box>
        <Box sx={{ mb: spacing.md }}>
          <Typography fontWeight={'600'}>Status (optional)</Typography>
          <Select
            value={status}
            fullWidth
            label="Status"
            sx={{ mb: spacing.md }}
            data-testid="select-status"
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <MenuItem value="to-do">To Do</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
          </Select>
        </Box>
        <Grid container sx={{mb:2}}>
          <Grid size={6}>
            <Button
            onClick={addTask}
            sx={{ p: 2 }} variant="contained" fullWidth>
              Create
            </Button>
          </Grid>
          <Grid size={6}>
            <Button onCanPlay={handleClose} sx={{ p: 2 }} fullWidth>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Dialog>
  );
};

export default CreateTaskDialog;
