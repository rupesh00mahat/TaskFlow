import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

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
      <Button>Add Project</Button>
      <TableContainer component={Paper}>
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
    </>;
  };
  
  export default Projects;
  