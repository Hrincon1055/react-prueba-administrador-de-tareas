import React from 'react';
// MIS COMPONENTES
import { Formulario } from '../components/Formulario';
import { ListadoTareas } from '../components/ListadoTareas';
// INICIO
export const AdministrarTareas = () => {
  // RENDER
  return (
    <div className='flex flex-col md:flex-row'>
      <div className={`block md:block md:w-1/2 lg:w-2/5`}>
        <Formulario />
      </div>
      <div className='md:w-1/2 lg:w-3/5'>
        <ListadoTareas />
      </div>
    </div>
  );
};
