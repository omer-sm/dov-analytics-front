import { Divider, Paper, Stack, Typography } from '@mui/material';
import { useGetLastReport, type Report } from '../Api/useGetLastReport';
import { reportTranslations, reportValueTranslations } from '../translations';
import { useEffect } from 'react';

const formatDate = (date: Date) =>
  date.toLocaleDateString('he', {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: 'numeric',
    minute: '2-digit',
  });

const formatReportValue = (value: Report[keyof Report]): string =>
  typeof value === 'boolean'
    ? value
      ? 'כן'
      : 'לא'
    : value instanceof Date
    ? formatDate(value)
    : Object.keys(reportValueTranslations).includes(value)
    ? reportValueTranslations[value]
    : value;

export default function LastReportTab() {
  const { data, isSuccess, isLoading } = useGetLastReport();

  useEffect(() => {
    console.log(data);
  }, [data]);

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
      <Typography variant="h4">דוח אחרון</Typography>
      <Divider />

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Stack alignItems="start" width="100%">
          {Object.entries(data)
            .filter(([key]) => !!reportTranslations[key as keyof Report])
            .map(([key, value]) => {
              console.log(key);
              return (
                <Typography key={key}>
                  <span style={{ fontWeight: 'bold' }}>
                    {reportTranslations[key as keyof Report]}:
                  </span>{' '}
                  {formatReportValue(value)}
                </Typography>
              );
            })}
        </Stack>
      </Paper>
    </Stack>
  );
}
