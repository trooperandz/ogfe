import axios from 'axios';

const baseUrl = 'http://127.0.0.1:5000/';

export type SummaryData = Array<string[]>;

// Example axios fetch
export const fetchReportSummary = async (): Promise<SummaryData> => {
  try {
    const response = await axios.get<SummaryData>(`${baseUrl}`);

    return response.data;
  } catch (err) {
    console.warn(err);

    throw err;
  }
};
