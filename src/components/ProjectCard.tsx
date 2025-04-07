import { Card, CardActions, Chip, Typography } from '@mui/material';
import { spacing } from '../constants/theme';
import { Link } from 'react-router-dom';
import { Project } from '../types/common';



const ProjectCard: React.FC<Project> = ({ title, description, createdAt, id, status }) => {
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
        <Chip label={status} color="primary"/>

      <Typography variant="h6">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="caption" color="text.secondary">
        {createdAt}
      </Typography>
      <CardActions>
        <Link to={`/projects/${id}`}>View Detail</Link>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
