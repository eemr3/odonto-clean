import AppProvider from './contexts/Context';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className='h-screen'>
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </div>
  );
}

export default App;
