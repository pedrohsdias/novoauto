import React from 'react';
import FranquiadorForm from '@/components/franquia/franquia.form';
import PessoaForm from '@/components/pessoa/pessoa.form';

const CriarFranquia = () => {
  const[form, setForm] = React.useState({});
  const handleCreate = async (data: any) => {
    // Lógica para enviar os dados da franquia para a API
    console.log('Criando franquia:', data);
    // Aqui você faria uma requisição HTTP para criar a franquia
  };
  
  return (
    <div>
      <h1>Criar Franquia</h1>
      <FranquiadorForm setParentForm = {setForm} parentForm={form} />
      <PessoaForm />
    </div>
  );
};

export default CriarFranquia;
