import React, { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';

// table title, table head
const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 150,
  },
  {
    field: 'clockin',
    headerName: 'Clock In',
    type: 'dateTime',
    width: 150,
  },
  {
    field: 'clockout',
    headerName: 'Clock Out',
    type: 'dateTime',
    width: 150,
  },
  {
    field: 'totalbreak',
    headerName: 'Total Break',
    type: 'dateTime',
    width: 150,
  },
  {
    field: 'total',
    headerName: 'Total',
    type: 'dateTime',
    width: 150,
  },
];

// dummy data rows, to be replaced when data is fetched from database
const rows = [
  { id: 1, date: '07/09/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 2, date: '06/09/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 3, date: '03/09/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 4, date: '02/09/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 5, date: '01/09/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 6, date: '31/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 7, date: '30/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 8, date: '27/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 9, date: '26/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 10, date: '25/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
  { id: 11, date: '24/08/2021', clockin: '09:00:00', clockout: '18:00:00', totalbreak: '01:00:00', total: '08:00:00' },
];

export default function DataTable() {
  const [pageSize, setPageSize] = useState(5);
  const [pageHeight, setPageHeight] = useState(400);

  return (
      <React.Fragment>
        <h2>Attendence History</h2>
        <div style={{ height: pageHeight, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => {
                setPageSize(newPageSize)
                if (newPageSize === 5) {
                setPageHeight(400);
                }
                else if (newPageSize === 10) {
                setPageHeight(650);
                }
                // un-comment if 20 is put in rowsPerPageOptions below
                // else if (newPageSize == 20) {
                //   setPageHeight(1150);
                // }
            }}            
            rowsPerPageOptions={[5, 10]}
            pagination
        />
        </div>
    </React.Fragment>
  );
}