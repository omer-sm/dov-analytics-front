import { useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '../config';
import type { Statistic } from './useGetAnalytics';

export interface Overview {
  today: number;
  total: number;
  latestActions: Statistic[];
}

export const useGetOverview = () =>
  useQuery<Overview>({
    queryKey: ['overview'],
    staleTime: 1000 * 60 * 60,
    retry: 2,
    queryFn: () =>
      fetch(`${BACKEND_URL}/statistics/overview`).then((result) => result.json()),
  });
