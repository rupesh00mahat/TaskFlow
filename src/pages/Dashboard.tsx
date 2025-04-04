import { Box, Container, Grid, Typography } from '@mui/material';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC = () => {
  return (
    <>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>

      <Grid container alignItems={'stretch'}>
        <Grid size={{xs:4}}>
          <DashboardCard title="Total Tasks" num={10} />
        </Grid>
        <Grid size={{xs:4}}>
          <DashboardCard title="Completed Tasks" num={10} />
        </Grid>
        <Grid size={{xs:4}}>
          <DashboardCard title="Overdue Tasks" num={10} />
        </Grid>
        
      </Grid>
    </>
  );
};

export default Dashboard;
