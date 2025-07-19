import { Card, CardContent } from '@mui/material';

interface StatisticCardProps {
  title: string;
  value: string | number;
}

export default function StatisticCard({ title, value }: StatisticCardProps) {
  return (
    <Card>  
      <CardContent>
        <h3>{title}</h3>
        <h2>{value}</h2>
      </CardContent>
    </Card>
  );
}
