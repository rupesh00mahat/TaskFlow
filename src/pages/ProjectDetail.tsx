import { Button, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import CreateTaskDialog from '../components/CreateTaskDialog';
import { useContext, useState } from 'react';
import { MiniContext } from '../context/MiniContext';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const [open, setOpen] = useState(false);
  const { state } = useContext(MiniContext);

  const handleClose = () => {
    setOpen(false);
  };

  const taskList = state && state.tasks.filter((task)=> task.projectId == projectId)

  return (
    <Container>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
      >
        Create Task
      </Button>
      <CreateTaskDialog projectId={projectId} open={open} handleClose={handleClose} />
      <Typography sx={{ mt: 2 }} variant="h3">
        Task List
      </Typography>
      <Grid container gap={2} sx={{ mt: 2 }}>
        {taskList.map(({ title, id, status, description, dueDate }) => (
          <Grid key={id} size={3}>
            <TaskCard  title={title} status={status} description={description} dueDate={dueDate} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProjectDetail;
