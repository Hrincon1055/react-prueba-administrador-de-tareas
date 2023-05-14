import React from 'react';
import { Link } from 'react-router-dom';
// MIS COMPONENTES
import useAuth from '../hooks/useAuth';
// INICIO
export const Header = () => {
  // HOOKS
  const { cerrarSesion } = useAuth();
  // RENDER
  return (
    <header className='py-10 bg-indigo-600'>
      <div className='container mx-auto flex flex-col lg:flex-row justify-between items-center'>
        <h1 className='fort-bold text-2xl text-indigo-200 text-center'>
          Administrador de Tareas
        </h1>
        <nav className='flex flex-col items-center lg:flex-row gap-4 mt-5 lg:mt-0'>
          <Link
            className='text-white text-sm uppercase font-bold '
            to='/admin'>
            Tareas
          </Link>
          <Link
            className='text-white text-sm uppercase font-bold '
            to='/admin/perfil'>
            Perfil
          </Link>
          <button
            type='button'
            className='text-white text-sm uppercase font-bold'
            onClick={cerrarSesion}>
            Cerrar Sesión
          </button>
        </nav>
      </div>
    </header>
  );
};
