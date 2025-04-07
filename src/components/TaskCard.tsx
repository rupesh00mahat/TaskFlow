import { Card, Chip, Typography } from '@mui/material';
import { shadows, spacing } from '../constants/theme';

type Props = {
  status: string;
  title: string;
  description: string | undefined;
  dueDate: string;
};

export const taskChipColor = { 'todo': 'gray', 'in-progress': 'blue', 'done': 'green' };

const TaskCard: React.FC<Props> = ({ status, title, description, dueDate }) => {
  const chipColor = taskChipColor[status as keyof typeof taskChipColor];
  console.log('chipcolor', chipColor)
  return (
    <Card
      sx={{
        bgcolor: '#f5f5f5',
        '&hover': { bgcolor: '#eeeeee', transform: 'scale(1.02)' },
        boxShadow: shadows.card,
        borderRadius: '12px',
        padding: spacing.md,
      }}
      data-testid="task-card"
    >
      <Chip label={status} sx={{bgcolor: chipColor}}  />
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="caption" color="text.secondary">
        {dueDate}
      </Typography>
    </Card>
  );
};

export default TaskCard;
