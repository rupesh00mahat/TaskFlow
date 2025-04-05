import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

function createData(name:string, status: string, date: string) {
  return {name, status, date}
}

const Projects: React.FC = () => {

  const dummyData = [
    {name: 'Task 1', status: 'to-do', date: '2024-04-05'},
    {name: 'Task 2', status: 'to-do', date: '2024-04-05'},
    {name: 'Task 3', status: 'to-do', date: '2024-04-05'},
    {name: 'Task 4', status: 'to-do', date: '2024-04-05'},
    {name: 'Task 5', status: 'to-do', date: '2024-04-05'},
  ];

  const rows = dummyData.map(({name, status, date})=> createData(name, status, date));

 

    return <>
      <Typography variant="h2" gutterBottom>Projects</Typography>
      <Button variant="contained">Add Project</Button>
      <TableContainer component={Paper} sx={{mt:2}}>
        <Table sx={{minWidth: 650, m:2}} aria-label="simple-table">
          <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
              </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row)=> (
              <TableRow>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid container gap={2} sx={{mt:2}}>
      {rows.map(({name, status, date}, index)=> (
        <Grid key={index} size={4}>
          <ProjectCard title={name} description={status} createdAt={date}/>
        </Grid>
      ))}
      </Grid>
    </>;
  };
  
  export default Projects;
  