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
import { MiniContext } from '../context/MiniContext';
import { EditedTask, Task } from '../types/common';

type Props = {
    open: boolean;
    handleClose: () => void;
    id: string | number,
    defaultTitle: string,
    defaultDescription: string | undefined,
    defaultStatus: string,
};

const EditTaskDialog: React.FC<Props> = ({ open, handleClose, id, defaultTitle, defaultDescription, defaultStatus }) => {
    const [title, setTitle] = useState(defaultTitle);
    const [errorTitle, setErrorTitle] = useState(false);
    const [description, setDescription] = useState(defaultDescription);
    const [status, setStatus] = useState(defaultStatus);
    const { dispatch } = useContext(MiniContext);


    const addTask = () => {
        dispatch({ type: 'EDIT_TASK', payload: { taskId: id, title, description, status } as EditedTask })
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
                <Grid container sx={{ mb: 2 }}>
                    <Grid size={6}>
                        <Button
                            onClick={addTask}
                            sx={{ p: 2 }} variant="contained" fullWidth>
                            Update
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

export default EditTaskDialog;
