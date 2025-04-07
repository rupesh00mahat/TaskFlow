import {
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import ProjectCard from '../components/ProjectCard';
import { useContext, useEffect, useState } from 'react';
import CreateProjectDialog from '../components/CreateProjectDialog';
import { Add } from '@mui/icons-material';
import { Project } from '../types/common';
import { MiniContext } from '../context/MiniContext';

function createData(name: string, status: string | undefined, date: string) {
  return { name, status, date };
}

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Project[]>([]);

  const {state} = useContext(MiniContext);
  const {projects} = state;

useEffect(()=>{
  setData(projects);
},[projects])

  const handleClose = () => {
    setOpen(false);
  };

  const rows = data.map(({ title, description, createdAt }) => createData(title, description, createdAt));

  return (
    <>
      <Typography variant="h2" gutterBottom>
        Projects
      </Typography>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="contained"
      >
        <Add />
        <Typography>Create A Project</Typography>
      </Button>
      <CreateProjectDialog open={open} handleClose={handleClose} setData={setData} />
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table sx={{ minWidth: 650, m: 2 }} aria-label="simple-table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container gap={2} sx={{ mt: 2 }}>
        {data.map(({ title, status, createdAt, id, description }) => (
          <Grid key={id} size={4}>
            <ProjectCard id={id} title={title} status={status} description={description} createdAt={createdAt} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
