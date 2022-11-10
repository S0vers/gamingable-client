import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routes/Routes';
import 'react-photo-view/dist/react-photo-view.css';
function App() {
  return (
    <div className='max-w-screen-xl mx-auto bg-white'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
