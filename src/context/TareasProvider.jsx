import { useState, useEffect, createContext } from 'react';
// MIS COMPONENTES
import clienteAxios from '../config/axios';
const TareasContext = createContext();
const TareasProvider = ({ children }) => {
  // STATE
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});
  // EFFECT
  useEffect(() => {
    const obtenerTareas = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) return;
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.get('/tareas', config);
        setTareas(data.tareas);
      } catch (error) {
        console.log('ERROR:', error);
      }
    };
    obtenerTareas();
  }, []);

  // FUNCIONES
  const guardarTarea = async (tarea) => {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    if (tarea.id) {
      try {
        const { data } = await clienteAxios.put(
          `/tareas/${tarea.id}`,
          tarea,
          config
        );
        const tareasActualizado = tareas.map((tareaState) =>
          tareaState._id === data.tareaUpdate._id
            ? data.tareaUpdate
            : tareaState
        );
        setTareas(tareasActualizado);
      } catch (error) {
        console.log(`ERROR: ${error.response.data.msg}`);
      }
    } else {
      try {
        const { data } = await clienteAxios.post('/tareas', tarea, config);
        const { createdAt, updatedAt, __v, ...tareaAlmacenado } =
          data.tareaSave;
        setTareas([tareaAlmacenado, ...tareas]);
      } catch (error) {
        console.log(`ERROR: ${error.response.data.msg}`);
      }
    }
  };
  const setEdicion = (tarea) => {
    setTarea(tarea);
  };
  const eliminarTarea = async (id) => {
    const confirmar = confirm('¿Confirmas que deseas eliminar ?');
    if (confirmar) {
      try {
        const token = localStorage.getItem('token');
        const config = {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };
        const { data } = await clienteAxios.delete(
          `/tareas/${id}`,
          config
        );
        const tareasActualizado = tareas.filter(
          (tareaState) => tareaState._id !== id
        );
        setTareas(tareasActualizado);
      } catch (error) {
        console.log(`ERROR: ${error.response.data.msg}`);
      }
    }
  };
  // RENDER
  return (
    <>
      <TareasContext.Provider
        value={{
          tareas,
          tarea,
          guardarTarea,
          setEdicion,
          eliminarTarea,
        }}>
        {children}
      </TareasContext.Provider>
    </>
  );
};
export { TareasProvider };
export default TareasContext;
