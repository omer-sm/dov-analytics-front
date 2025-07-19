import { useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '../config';

export interface Statistic {
  id: number;
  statistic: string;
  created_at: string;
}

export interface Analytics {
  all: Statistic[];
  today: number;
  perDayOfWeek: number[];
  perHour: number[];
}

export const useGetAnalytics = (statistic: string) =>
  useQuery({
    queryKey: ['analytics', statistic],
    staleTime: 1000 * 60 * 60,
    retry: 2,
    queryFn: () =>
      fetch(`${BACKEND_URL}/statistics/${statistic}`).then((result) => result.json()),
  });
