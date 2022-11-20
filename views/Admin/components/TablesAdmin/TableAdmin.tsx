import { useEffect, useMemo, useState } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { DataGrid, gridClasses, GridColDef } from '@mui/x-data-grid';
// import { useValue } from '../../../context/ContextProvider';
// import { getUsers } from '../../../actions/user';
// import moment from 'moment';
// importaciones de "querys"
import axios from 'axios';
import { grey } from '@mui/material/colors';
import TableActions from './TableActions';
import { GeneroService } from 'services/ema/V1/Genero';

const pruebaUsers = [
  'img1',
  'Aaron',
  'aaron@gmailcom',
  'admin',
  'activo al 100%',
  '1',
  'borrar',
];

const TableAdmin = ({ setSelectedLink, link }) => {
  // const {
  //   state: { users },
  //   dispatch,
  // } = useValue();

  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);

  const [data, setData] = useState([]);

  const getData = async () => {
    await axios.get('https://www.balldontlie.io/api/v1/teams').then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // const dataGenero = await GeneroService.getAll();

  // useEffect(() => {
  //   setSelectedLink(link);
  //   if (users.length === 0) getUsers(dispatch);
  // }, []);

  const columns = [
    {
      field: 'id',
      headerName: 'ID',
      width: 60,
      sortable: false,
      filterable: false,
    },
    {
      field: 'abbreviation',
      headerName: 'Abreviacion',
      width: 200,
      sortable: false,
      filterable: false,
    },
    {
      field: 'city',
      headerName: 'Ciudad',
      width: 200,
      sortable: false,
      filterable: false,
    },
    {
      field: 'conference',
      headerName: 'Conferencia',
      width: 200,
      sortable: false,
      filterable: false,
    },
  ];

  const rows = data.map((row) => ({
    id: row.id,
    abbreviation: row.abbreviation,
    city: row.city,
    conference: row.conference,
  }));

  // const columns = useMemo(
  //   () => [
  //     {
  //       field: 'photoURL',
  //       headerName: 'Avatar',
  //       width: 60,
  //       // renderCell: (params) => <Avatar src={params.row.photoURL} />,
  //       sortable: false,
  //       filterable: false,
  //     },
  //     { field: 'name', headerName: 'Name', width: 170 },
  //     { field: 'email', headerName: 'Email', width: 200 },
  //     {
  //       field: 'role',
  //       headerName: 'Role',
  //       width: 100,
  //       type: 'singleSelect',
  //       valueOptions: ['basic', 'editor', 'admin'],
  //       editable: true,
  //     },
  //     {
  //       field: 'active',
  //       headerName: 'Active',
  //       width: 100,
  //       type: 'boolean',
  //       editable: true,
  //     },
  //     // {
  //     //   field: 'createdAt',
  //     //   headerName: 'Created At',
  //     //   width: 200,
  //     //   renderCell: (params) =>
  //     //     moment(params.row.createdAt).format('YYYY-MM-DD HH:MM:SS'),
  //     // },
  //     { field: '_id', headerName: 'Id', width: 220 },
  //     {
  //       field: 'actions',
  //       headerName: 'Actions',
  //       type: 'actions',
  //       // renderCell: (params) => (
  //       //   <TableActions {...{ params, rowId, setRowId }} />
  //       // ),
  //     },
  //   ],
  // [rowId]
  // );

  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      <Typography
        variant='h3'
        component='h3'
        sx={{ textAlign: 'center', mt: 3, mb: 3 }}
      >
        Manage Users
      </Typography>
      <DataGrid
        columns={columns}
        rows={rows}
        // getRowId={(row) => row._id}
        rowsPerPageOptions={[5, 10, 20]}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        // sx={{
        //   [`& .${gridClasses.row}`]: {
        //     bgcolor: (theme) =>
        //       theme.palette.mode === 'light' ? grey[200] : grey[900],
        //   },
        // }}
        onCellEditCommit={(params) => setRowId(params.id)}
      />
    </Box>
  );
};

export default TableAdmin;
