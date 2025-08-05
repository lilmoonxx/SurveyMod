import React from 'react';

// Define las props del componente. `message` es el texto del error y `onClose` es una función para cerrar el modal.
const ErrorModal = ({ message, onClose }:{message:string, onClose:()=>void}) => {
  return (
    // Contenedor principal para el fondo oscuro (backdrop)
    // `fixed inset-0` lo hace fijo y lo extiende por toda la pantalla.
    // `bg-black bg-opacity-50` crea un fondo negro semitransparente.
    // `flex items-center justify-center` centra el contenido del modal.
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      
      {/* Contenedor del modal */}
      {/* `bg-white` para el fondo blanco, `p-6` para el padding. */}
      {/* `rounded-lg` para bordes redondeados y `shadow-2xl` para una sombra pronunciada. */}
      {/* `w-11/12 max-w-sm` lo hace responsivo, ocupando la mayoría del ancho en móviles y un ancho máximo de 384px. */}
      {/* `transform transition-all` para animaciones suaves. */}
      <div className="bg-white p-6 rounded-lg shadow-2xl w-11/12 max-w-sm transform transition-all duration-300 ease-in-out scale-100">
        
        {/* Cabecera del modal */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-red-600">Error</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            {/* Ícono de cierre (X) */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cuerpo del modal (mensaje de error) */}
        <div className="text-gray-700 mb-6">
          <p>{message}</p>
        </div>

        {/* Pie del modal (botón de cierre) */}
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;