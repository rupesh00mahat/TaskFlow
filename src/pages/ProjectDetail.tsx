import { Button, Container, Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import TaskCard from '../components/TaskCard';
import CreateTaskDialog from '../components/CreateTaskDialog';
import { useContext, useMemo, useState } from 'react';
import { MiniContext } from '../context/MiniContext';
import EmptyItems from '../components/EmptyItems';

const ProjectDetail: React.FC = () => {
  const { projectId } = useParams();
  const [open, setOpen] = useState(false);
  const { state } = useContext(MiniContext);

  const handleClose = () => {
    setOpen(false);
  };

  const taskList = state && useMemo(()=>{
    return  state.tasks.filter((task) => task.projectId == projectId)
  },[state.tasks])

  return (
    <Container sx={{mt:2}}>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
      >
        Create Task
      </Button>
      <CreateTaskDialog projectId={projectId} open={open} handleClose={handleClose} />
      {taskList.length == 0 ?
        <EmptyItems placeholder='Task' />
        : <><Typography sx={{ mt: 2 }} variant="h3">
          Task List
        </Typography>
          <Grid container gap={2} sx={{ mt: 2 }}>
            {taskList.map(({ title, id, status, description, dueDate }) => (
              <Grid key={id} size={3}>
                <TaskCard id={id} title={title} status={status} description={description} dueDate={dueDate} />
              </Grid>
            ))}
          </Grid></>}
    </Container>
  );
};

export default ProjectDetail;
