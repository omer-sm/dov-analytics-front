import { useQuery } from '@tanstack/react-query';
import { BACKEND_URL } from '../config';

export const useGetStatistics = () =>
  useQuery({
    queryKey: ['statistics'],
    staleTime: 1000 * 60 * 5,
    retry: 3,
    queryFn: () => fetch(`${BACKEND_URL}/store-items`).then((result) => result.json()),
  });
