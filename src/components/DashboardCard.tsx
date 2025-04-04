import { Box, Card, CardContent, Typography } from '@mui/material';

type Props = {
  title: string,
  num: number,
};

const DashboardCard: React.FC<Props> = ({ title, num }) => {
  return (
    <>
    <Card data-testid="dashboard-card" sx={{ m:2 }}>
      <CardContent>
      <Typography variant="h4">{title}</Typography>
      <Typography>{num}</Typography>
      </CardContent>
    </Card>
    </>
  );
};

export default DashboardCard;
