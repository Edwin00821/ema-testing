import {
  LayoutAdmin,
  FilterTable,
  SearchLabelsAdmin,
  SearchResultsAdmin,
  ResultCardsAdmin,
} from './components';

const AdminHome = () => {
  return (
    <LayoutAdmin title='Dashboard' description='EMA Dashboard'>
      <FilterTable />
      <SearchLabelsAdmin />
      <SearchResultsAdmin />
      <ResultCardsAdmin />
    </LayoutAdmin>
  );
};

export default AdminHome;
