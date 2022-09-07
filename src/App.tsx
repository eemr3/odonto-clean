import AuthProvider from './contexts/AuthContext';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <div className="h-screen">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
