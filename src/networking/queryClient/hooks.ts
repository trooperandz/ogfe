import { useQuery } from '@tanstack/react-query';

import { fetchWeather } from './api';

export const useGetWeather = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather,
  });

  return {
    isPendingWeather: isPending,
    weatherData: data,
    weatherError: error,
  } as const;
};
