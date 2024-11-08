import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import FranquiadorForm from '@/components/franquia/franquia.form';

const EditarFranquia = () => {
  const router = useRouter();
  const { id } = router.query; // Pegando o ID da franquia da URL
  const [initialValues, setInitialValues] = useState(null);
  
  useEffect(() => {
    if (id) {
      // Lógica para buscar os dados da franquia pelo ID
      const fetchFranquia = async () => {
        console.log('Buscando franquia com ID:', id);
        // Aqui você faria uma requisição HTTP para buscar a franquia
        // Por exemplo:
        // const response = await fetch(`/api/franquias/${id}`);
        // const data = await response.json();
        // setInitialValues(data);
      };
      
      fetchFranquia();
    }
  }, [id]);
  
  const handleUpdate = async (data: any) => {
    console.log('Atualizando franquia:', data);
    // Lógica para enviar os dados atualizados da franquia para a API
  };
  
  return (
    <div>
      <h1>Editar Franquia</h1>
  {initialValues ? (
    <FranquiadorForm initialValues={initialValues} onSubmit={handleUpdate} />
  ) : (
    <p>Carregando dados da franquia...</p>
  )}
  </div>
);
};

export default EditarFranquia;
