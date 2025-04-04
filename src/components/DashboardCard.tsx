import { Box, Card, Typography } from '@mui/material';

type Props = {
  title: string,
  num: number,
};

const DashboardCard: React.FC<Props> = ({ title, num }) => {
  return (
    <>
    <Card data-testid="dashboard-card" sx={{ p: 2, m:2 }}>
      <Typography variant="h3">{title}</Typography>
      <Typography>{num}</Typography>
    </Card>
    </>
  );
};

export default DashboardCard;
