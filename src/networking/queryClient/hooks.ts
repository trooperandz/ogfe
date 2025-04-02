import { useQuery } from '@tanstack/react-query';

import { fetchReportSummary } from './api';

export const useGetSummaryReport = () => {
  const { isPending, data, error } = useQuery({
    queryKey: ['summary_report'],
    queryFn: fetchReportSummary,
  });

  return {
    isPendingSummaryReport: isPending,
    summaryReportData: data,
    summaryReportError: error,
  } as const;
};
