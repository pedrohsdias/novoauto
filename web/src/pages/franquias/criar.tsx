import React from 'react';
import FranquiadorForm from '@/components/franquia/franquia.form';
import PessoaForm from '@/components/pessoa/pessoa.form';

const CriarFranquia = () => {
  const handleCreate = async (data: any) => {
    // Lógica para enviar os dados da franquia para a API
    console.log('Criando franquia:', data);
    // Aqui você faria uma requisição HTTP para criar a franquia
  };
  
  return (
    <div>
      <h1>Criar Franquia</h1>
      <FranquiadorForm onSubmit={handleCreate} />
      <PessoaForm />
    </div>
  );
};

export default CriarFranquia;
