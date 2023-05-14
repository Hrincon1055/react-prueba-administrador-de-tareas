import React, { useState, useEffect } from 'react';
// MIS COMPONENTES
import useTareas from '../hooks/useTareas';
import { Alerta } from './Alerta';
// INICIO
export const Formulario = () => {
  // HOOKS
  const { guardarTarea, tarea } = useTareas();

  // STATE
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [alerta, setAlerta] = useState({});
  const [id, setId] = useState(null);
  // CONSTANTES
  const { msg } = alerta;
  // EFFECT
  useEffect(() => {
    if (tarea?.nombre) {
      setNombre(tarea.nombre);
      setDescripcion(tarea.descripcion);
      setId(tarea._id);
    }
    return () => {
      setNombre('');
      setDescripcion('');
      setId(null);
    };
  }, [tarea]);

  // FUNCIONES
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, descripcion].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios.',
        error: true,
      });
      return;
    }
    guardarTarea({ nombre, descripcion, id });
    setAlerta({
      msg: 'Guardado Correctamente',
      error: false,
    });
    setNombre('');
    setDescripcion('');
    setId(null);
  };
  // RENDER
  return (
    <>
      <h2 className='font-black text-3xl text-center'>
        Administrador de tareas.
      </h2>
      <p className='text-xl mt-5 mb-10 text-center'>
        Añade tus tareas y{' '}
        <span className='text-indigo-600 font-bold'>Administralas</span>
      </p>

      <form
        className='bg-white py-10 px-5 mb-10 lg:mb-5 shadow-md rounded'
        onSubmit={handleSubmit}>
        <div className='mb-5'>
          <label
            htmlFor='nombre'
            className='text-gray-700 uppercase font-bold'>
            Nombre
          </label>
          <input
            type='text'
            id='nombre'
            placeholder='Nombre'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label
            htmlFor='sintomas'
            className='text-gray-700 uppercase font-bold'>
            Descripcion
          </label>
          <textarea
            id='sintomas'
            placeholder='Describe los Síntomas'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded'
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <input
          type='submit'
          value={id ? 'Guardar Cambios' : 'Agregar Tarea'}
          className='bg-indigo-700 w-full py-3 px-10 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md:w-auto'
        />
      </form>
      {msg && <Alerta alerta={alerta} />}
    </>
  );
};
