import { Button, Card, CardActionArea, Chip, Typography } from '@mui/material';
import { shadows, spacing } from '../constants/theme';
import { useState } from 'react';
import EditTaskDialog from './EditTaskDialog';

type Props = {
  status: string;
  title: string;
  description: string | undefined;
  dueDate: string;
  id: string | number
};

export const taskChipColor = { 'todo': 'gray', 'in-progress': 'blue', 'done': 'green' };

const TaskCard: React.FC<Props> = ({ status, title, description, dueDate, id }) => {
  const chipColor = taskChipColor[status as keyof typeof taskChipColor];

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <>
      <Card
        sx={{
          bgcolor: '#f5f5f5',
          '&:hover': { bgcolor: '#eeeeee', transform: 'scale(1.02)' },
          boxShadow: shadows.card,
          borderRadius: '12px',
          padding: spacing.md,
          transition: '0.5s all ease-in-out'
        }}
        data-testid="task-card"
      >
        <Chip data-testid="taskcard-status" label={status} sx={{ bgcolor: chipColor }} />
        <Typography data-testid="taskcard-title" variant="h6">{title}</Typography>
        <Typography data-testid="taskcard-description" variant="body2">{description}</Typography>
        <Typography variant="caption" color="text.secondary">
          {dueDate}
        </Typography>
        <div>
          <Button onClick={() => { setOpen(true) }} fullWidth variant='contained' sx={{ mt: 2, p: 2 }}>Edit</Button>
        </div>

      </Card>
      <EditTaskDialog open={open} handleClose={handleClose} defaultTitle={title} defaultDescription={description} defaultStatus={status} id={id} />
    </>
  );
};

export default TaskCard;
