import { Card, Typography } from '@mui/material';
import { spacing } from '../constants/theme';

type Props = {
  title: string;
  description?: string;
  createdAt?: string;
};

const ProjectCard: React.FC<Props> = ({ title, description, createdAt }) => {
  return (
    <Card
    data-testid="project-card"
      sx={{
        background: '#f5f5f5',
        borderRadius: '16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        p: spacing.md,
        transition: '0.3s ease',
        "&:hover": {
            background: '#e0e0e0'
        }
      }}
    >
      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="caption" color="text.secondary">
        {createdAt}
      </Typography>
    </Card>
  );
};

export default ProjectCard;
