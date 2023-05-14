import { BrowserRouter, Routes, Route } from 'react-router-dom';
// MIS COMPONENTES
import { AuthLayout } from './layout/AuthLayout';
import { RutaProtegida } from './layout/RutaProtegida';
import { Login } from './pages/Login';
import { Registrar } from './pages/Registrar';
import { AdministrarTareas } from './pages/AdministrarTareas';
// PROVIDER
import { AuthProvider } from './context/AuthProvider';
import { TareasProvider } from './context/TareasProvider';
import { EditarPerfil } from './pages/EditarPerfil';

// INICIO
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TareasProvider>
          <Routes>
            <Route path='/' element={<AuthLayout />}>
              <Route index element={<Login />} />
              <Route path='registrar' element={<Registrar />} />
            </Route>
            <Route path='/admin' element={<RutaProtegida />}>
              <Route index element={<AdministrarTareas />} />
              <Route path='perfil' element={<EditarPerfil />} />
            </Route>
          </Routes>
        </TareasProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
