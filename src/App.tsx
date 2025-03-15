import './App.css';
import SideBar from './components/sidebars/sidebar';
import TopBar from './components/sidebars/topBar';
import ObjectsScreen from './screens/objectsScreen';

function App() {
  return (
    <div className='h-screen overflow-hidden flex flex-col pt-2 px-4 bg-[#f8f8f4]'>
      <div className='h-[6%]'>
        <TopBar />
      </div>
      <div className='h-[94%] flex py-4'>
        <SideBar />
        <ObjectsScreen />
      </div>
    </div>
  );
}

export default App;
