import {
  SideBarDashboard,
  SearchAdmin,
  SearchLabelsAdmin,
  SearchResultsAdmin,
  ResultCardsAdmin,
} from './components';

const AdminChat = () => {
  return (
    <div className='grid-col-1 grid h-screen lg:grid-cols-6'>
      <SideBarDashboard />
      <div className='col-span-5 h-screen bg-gray-100 p-4 md:p-8 lg:p-12'>
        <SearchAdmin />
        <SearchLabelsAdmin />
        <SearchResultsAdmin />
        <ResultCardsAdmin />
      </div>
    </div>
  );
};

export default AdminChat;
