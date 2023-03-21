import React, { useState } from 'react';
import axios from 'axios';

function ReportButton() {
  const [reportData, setReportData] = useState(null);

  async function handleClick() {
    const response = await axios.get('/api/generate-report');
    setReportData(response.data);
  }

  return (
    <>
      <button onClick={handleClick}>
        Generate Report
      </button>
      {reportData && (
        <pre>{JSON.stringify(reportData, null, 2)}</pre>
      )}
    </>
  );
}

export default ReportButton;
