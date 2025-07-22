import {
  Divider,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useGetOverview } from '../Api/useGetOverview';
import { statisticTranslations } from '../translations';

export default function OverviewTab() {
  const { data, isSuccess, isLoading } = useGetOverview();

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
      <Typography variant="h4">מבט על</Typography>
      <Divider />

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h4">פעולות (כל הזמנים)</Typography>
        <Typography variant="h2" fontWeight={500}>
          {data.total ?? '-'}
        </Typography>
      </Paper>

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h4">פעולות (היום)</Typography>
        <Typography variant="h2" fontWeight={500}>
          {data.today ?? '-'}
        </Typography>
      </Paper>

      <Paper
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}
      >
        <Typography variant="h5" mb={0.5}>פעולות אחרונות</Typography>

        <TableContainer component={Paper} >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{textAlign: 'right'}}>פעולה</TableCell>
                <TableCell sx={{textAlign: 'right'}}>תאריך</TableCell>
                <TableCell sx={{textAlign: 'right'}}>שעה</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.latestActions.map((action, index) => (
                <TableRow key={index}>
                  <TableCell sx={{textAlign: 'right'}}>{statisticTranslations[action.statistic] ?? action.statistic}</TableCell>
                  <TableCell sx={{textAlign: 'right'}}>
                    {new Date(action.created_at).toLocaleDateString('he-IL')}
                  </TableCell>
                  <TableCell sx={{textAlign: 'right'}}>
                    {new Date(action.created_at).toLocaleTimeString('he-IL', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Stack>
  );
}
