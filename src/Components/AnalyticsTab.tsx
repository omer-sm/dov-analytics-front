import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useGetAnalytics } from '../Api/useGetAnalytics';
import { BarChart, LineChart } from '@mui/x-charts';
import { useMemo } from 'react';

interface AnalyticsTabProps {
  statistic: string;
  title: string;
}

export default function AnalyticsTab({ statistic, title }: AnalyticsTabProps) {
  const { data, isSuccess, isLoading } = useGetAnalytics(statistic);

  const perDate = useMemo(
    () =>
      (data?.all ?? []).reduce(
        (acc: Record<string, number>, { created_at }: { created_at: string }) => {
          const date = new Date(created_at.split(' ')[0]).toISOString();
          acc[date] = (acc[date] || 0) + 1;

          return acc;
        },
        {}
      ),
    [data]
  );

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
    );
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

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h5">לפי תאריך</Typography>
        <div style={{ width: '370px', overflowX: 'auto', display: 'flex' }}>
          <LineChart
            height={300}
            width={perDate ? Object.keys(perDate).length * 50 : 0}
            xAxis={[
              {
                scaleType: 'time',
                data: Object.keys(perDate).map((date) => new Date(date)),
                valueFormatter: (date) => date.toLocaleDateString('he-IL', {
                  day: '2-digit',
                  month: '2-digit',
                  year: '2-digit',
                }),
              },
            ]}
            yAxis={[{disableLine: true, disableTicks: true, width: 0}]}
            series={[{ data: Object.values(perDate) }]}
            margin={{ left: 22, right: 22 }}
            direction="ltr"
            style={{pointerEvents: 'none'}}
            slotProps={{line: {style: {pointerEvents: 'all'}}}}
          />
        </div>
      </Paper>
    </Stack>
  );
}
