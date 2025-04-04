import { Box, Typography } from '@mui/material';
import DashboardCard from '../components/DashboardCard';

const Dashboard: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h2" gutterBottom>
        Dashboard
      </Typography>

      <DashboardCard title="Total Tasks" num={10} />
      <DashboardCard title="Completed Tasks" num={10} />
      <DashboardCard title="Overdue Tasks" num={10} />
    </Box>
  );
};

export default Dashboard;
