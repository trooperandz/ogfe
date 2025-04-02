import { useGetSummaryReport } from 'networking/queryClient/hooks';

export default function DashboardPage() {
  const { isPendingSummaryReport, summaryReportData } = useGetSummaryReport();

  return isPendingSummaryReport ? (
    <p>Loading...</p>
  ) : summaryReportData ? (
    <div className="bg-slate-900 h-screen">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            {summaryReportData[0].map(title => {
              return (
                <th scope="col" className="px-6 py-3">
                  {title}
                </th>
              );
            })}
          </thead>
          <tbody>
            {summaryReportData.slice(1).map(row => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                  {row.map(item => {
                    return <td className="px-6 py-4">{item}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <p>Nothing here</p>
  );
}
