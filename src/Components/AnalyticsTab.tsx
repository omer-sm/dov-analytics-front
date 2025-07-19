import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useGetAnalytics } from '../Api/useGetAnalytics';
import { BarChart } from '@mui/x-charts';

interface AnalyticsTabProps {
  statistic: string;
  title: string;
}

export default function AnalyticsTab({ statistic, title }: AnalyticsTabProps) {
  const { data, isSuccess, isLoading } = useGetAnalytics(statistic);

  if (isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
        }}
      >
        <Typography variant="h5">טוען נתונים...</Typography>
      </div>
    );
  }

  if (!isSuccess || !data) {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60vh',
        }}
      >
        <Typography variant="h5">קרתה שגיאה. אנא נסו שוב מאוחר יותר</Typography>
      </div>
    )
  }

  return (
    <Stack spacing={2} sx={{ p: 2 }}>
      <Typography variant="h4">{title}</Typography>
      <Divider />

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h4">סך הכל</Typography>
        <Typography variant="h2" fontWeight={500}>
          {data.all?.length ?? '-'}
        </Typography>
      </Paper>

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h4">היום</Typography>
        <Typography variant="h2" fontWeight={500}>
          {data.today ?? '-'}
        </Typography>
      </Paper>

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h5">לפי יום בשבוע</Typography>
        <BarChart
          height={300}
          width={390}
          xAxis={[{ data: ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'] }]}
          yAxis={[{ width: 50 }]}
          series={[{ data: data.perDayOfWeek ?? [] }]}
          margin={{ left: 0 }}
          layout="vertical"
          direction="ltr"
        />
      </Paper>

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h5">לפי שעה ביום</Typography>
        <BarChart
          height={800}
          width={390}
          yAxis={[{ width: 50, data: Array.from({ length: 24 }, (_, i) => `${i}:00`) }]}
          series={[{ data: data.perHour ?? [] }]}
          layout="horizontal"
          margin={{ left: 0 }}
          direction="ltr"
        />
      </Paper>

      {/* <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
        <Typography variant="h5">לפי תאריך</Typography>
        <LineChart
          height={300}
          width={390}
          xAxis={[{scaleType: 'time', dataKey: 'created_at', data: (data.all ?? [])}]}
          series={[{data: (data.all ?? []).map(({created_at}: {created_at: string}) => new Date(created_at).getTime())}]}
          margin={{left: 0}}
          direction='ltr'
        />
      </Paper> */}
    </Stack>
  );
}
