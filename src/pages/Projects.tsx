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
import { useState } from 'react';
import CreateProjectDialog from '../components/CreateProjectDialog';
import { Add } from '@mui/icons-material';
import { Project } from '../types/common';

function createData(name: string, status: string | undefined, date: string) {
  return { name, status, date };
}


const dummyData = [
  { id: 0, title: 'Task 1', description: 'to-do', createdAt: '2024-04-05' },
  { id: 1, title: 'Task 2', description: 'to-do', createdAt: '2024-04-05' },
  { id: 2, title: 'Task 3', description: 'to-do', createdAt: '2024-04-05' },
];

const Projects: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<Project[]>(dummyData);

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
        {rows.map(({ name, status, date }, index) => (
          <Grid key={index} size={4}>
            <ProjectCard title={name} description={status} createdAt={date} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;
