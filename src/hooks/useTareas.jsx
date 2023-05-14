import { useContext } from 'react';
// MIS COMPONENTES
import TareasContext from '../context/TareasProvider';
// INICIO
const useTareas = () => {
  return useContext(TareasContext);
};

export default useTareas;
