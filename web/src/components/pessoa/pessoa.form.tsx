import React, {useEffect, useState} from 'react';
import {Button, Container, MenuItem, TextField, Typography,} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {TipoPessoaEnum} from '@/Types/enum/TipoPesso.enum';
import {IPessoa} from '@/Types/models/pessoa.interface';

interface PessoaFormProps {
  initialFormValues?: IPessoa; // Tipando initialFormValues como IPessoa, opcional
  onSubmit?: (values: IPessoa) => void;
}
const PessoaForm = ({ initialFormValues }:PessoaFormProps) => {
  // Estado inicial do formulário com valores recebidos via props ou valores padrão
  const [formValues, setFormValues] = useState({
    id: '', // ID UUID adicionado
    apelido: '',
    nomeFormal: '',
    documento: '',
    tipo: TipoPessoaEnum.PJ, // Valor padrão
    ...initialFormValues, // Sobrescreve com valores vindos via props
  });
  
  // Atualiza os formValues se as props forem alteradas
  useEffect(() => {
    if (initialFormValues) {
      setFormValues((prevValues) => ({
        ...prevValues,
        ...initialFormValues,
      }));
    }
  }, [initialFormValues]);
  
  // Função para lidar com mudanças no formulário
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };
  
  // Função para envio do formulário
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica para salvar os dados, pode ser uma chamada de API
    console.log('Form Values:', formValues);
  };
  
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Formulário de Pessoa
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* ID (somente leitura) */}
          {formValues.id && (
            <Grid size={12}>
              <TextField
                label="ID (UUID)"
                name="id"
                fullWidth
                value={formValues.id}
                InputProps={{
                  readOnly: true,
                }}
                helperText="Identificador único (UUID) gerado automaticamente"
              />
            </Grid>
          )}
          
          {/* Apelido */}
          <Grid size={12}>
            <TextField
              label="Apelido"
              name="apelido"
              fullWidth
              value={formValues.apelido}
              onChange={handleInputChange}
              required
              helperText="Apelido para PF ou nome fantasia para PJ"
            />
          </Grid>
          
          {/* Nome Formal */}
          <Grid size={12}>
            <TextField
              label="Nome Formal"
              name="nomeFormal"
              fullWidth
              value={formValues.nomeFormal}
              onChange={handleInputChange}
              required
              helperText="Nome como no RG ou razão social para PJ"
            />
          </Grid>
          
          {/* Documento */}
          <Grid size={12}>
            <TextField
              label="Documento (CPF/CNPJ)"
              name="documento"
              fullWidth
              value={formValues.documento}
              onChange={handleInputChange}
              required
              helperText="Digite o CPF ou CNPJ"
            />
          </Grid>
          
          {/* Tipo Pessoa (enum) */}
          <Grid size={12}>
            <TextField
              select
              label="Tipo de Pessoa"
              name="tipo"
              fullWidth
              value={formValues.tipo}
              onChange={handleInputChange}
              helperText="Selecione o tipo de pessoa"
            >
              {Object.values(TipoPessoaEnum).map((key) => (
                <MenuItem key={key} value={TipoPessoaEnum[key]}>
                  {TipoPessoaEnum[key] === 'PF' ? 'Pessoa Física' : 'Pessoa Jurídica'}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          
          {/* Botão de envio */}
          <Grid size={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default PessoaForm;
