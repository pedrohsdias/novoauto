import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {Button, Container, FormControl, FormLabel, Radio, RadioGroup, TextField, Typography} from '@mui/material';
import Grid from '@mui/material/Grid2';
import {TipoFranquiaEnum} from '@/Types/enum/TipoFranquia.enum';
import {IFranquiador} from '@/Types/models/franquia.interface';
import FormControlLabel from "@mui/material/FormControlLabel";

interface FranquiadorFormProps {
  initialValues?: IFranquiador,
  parentForm?: object | null,
  onSubmit?: ((values: IFranquiador) => void) | null,
  setParentForm?: Dispatch<SetStateAction<{}>> | null
}

const FranquiadorForm = ({initialValues, parentForm = null, onSubmit = null, setParentForm=null}: FranquiadorFormProps) => {
  const [formValues, setFormValues] = useState<IFranquiador>({
    id: '',
    apelido: '',
    tipo: TipoFranquiaEnum.EMPRESA_UNICA, // Valor padrão
    linkLogo: '',
    termoDtAceite: undefined,
    termoUsuarioAceite: '',
    pessoaId: '', // Assumindo que o ID da pessoa será passado
    ...initialValues, // Sobrescreve com valores iniciais se forem passados
  });

  // Atualiza os formValues se as props mudarem
  useEffect(() => {
    if (initialValues) {
      setFormValues((prevValues) => ({
        ...prevValues,
        ...initialValues,
      }));
    }
  }, [initialValues]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    const newForm = {...formValues, [name]: value};
    setFormValues(newForm);
    if (setParentForm && parentForm) {
      const updatedForm = 'franquiador' in parentForm
        ? { ...parentForm, franquiador: newForm }
        : newForm;
      setParentForm(updatedForm);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Lógica de submissão pode ser implementada aqui, como enviar para a API
    console.log('Form Values:', formValues);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Formulário de Franquiador
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Campo ID (somente leitura) */}
          {formValues.id && (
            <Grid size={12}>
              <TextField
                label="ID (UUID)"
                name="id"
                fullWidth
                value={formValues.id}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
                helperText="Identificador único (UUID) gerado automaticamente"
              />
            </Grid>
          )}
          {/* Campo Tipo de Franquia */}
          <Grid size={12}>
            <FormControl>
              <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={formValues.tipo}
                onChange={handleInputChange}
              >
                <FormControlLabel value={TipoFranquiaEnum.AUTONOMO} control={<Radio />} label="Autonomo" />
                <FormControlLabel value={TipoFranquiaEnum.EMPRESA_UNICA} control={<Radio />} label="Empresa Individual" />
                <FormControlLabel value={TipoFranquiaEnum.EMPRESA_FRANQUIA} control={<Radio />} label="Empresa com Filiais" />
              </RadioGroup>
            </FormControl>
            {/*<TextField*/}
            {/*  select*/}
            {/*  label="Tipo de Franquia"*/}
            {/*  name="tipo"*/}
            {/*  fullWidth*/}
            {/*  value={formValues.tipo}*/}
            {/*  onChange={handleInputChange}*/}
            {/*  required*/}
            {/*  helperText="Selecione o tipo de franquia"*/}
            {/*>*/}
            {/*  {Object.values(TipoFranquiaEnum).map((value) => (*/}
            {/*    <MenuItem key={value} value={value}>*/}
            {/*      {value === TipoFranquiaEnum.EMPRESA_UNICA*/}
            {/*        ? 'Empresa Única'*/}
            {/*        : 'Grupo de Empresas'}*/}
            {/*    </MenuItem>*/}
            {/*  ))}*/}
            {/*</TextField>*/}
          </Grid>
          {/* Campo Apelido */}
          <Grid size={12}>
            <TextField
              label="Apelido"
              name="apelido"
              fullWidth
              value={formValues.apelido}
              onChange={handleInputChange}
              required
              helperText="Nome para exibição em tela"
            />
          </Grid>

          {/* Campo Link Logo */}
          <Grid size={12}>
            <TextField
              label="Link Logo"
              name="linkLogo"
              fullWidth
              value={formValues.linkLogo}
              onChange={handleInputChange}
              required
              helperText="URL do logo da franquia"
            />
          </Grid>

          {/* Campo Termo Data Aceite */}
          <Grid size={12}>
            <TextField
              label="Data do Termo de Aceite"
              name="termoDtAceite"
              fullWidth
              type="date"
              slotProps={{
                inputLabel: {
                  shrink: true, // Propriedade para garantir que o rótulo fique "shrinked"
                },
              }}
              value={formValues.termoDtAceite?.toString().split('T')[0] || ''}
              onChange={handleInputChange}
              helperText="Data de aceite do termo"
            />
          </Grid>

          {/* Campo Termo Usuário Aceite */}
          <Grid size={12}>
            <TextField
              label="Usuário que Aceitou o Termo"
              name="termoUsuarioAceite"
              fullWidth
              value={formValues.termoUsuarioAceite}
              onChange={handleInputChange}
              helperText="Usuário que aceitou o termo"
            />
          </Grid>

          {/* Campo Pessoa ID (Assumindo que será um input de texto para o ID da pessoa) */}
          <Grid size={12}>
            <TextField
              label="ID da Pessoa"
              name="pessoaId"
              fullWidth
              value={formValues.pessoaId}
              onChange={handleInputChange}
              required
              helperText="ID da pessoa relacionada à franquia"
            />
          </Grid>
          {onSubmit !== null &&
              <Grid size={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>
                      Enviar
                  </Button>
              </Grid>
          }
        </Grid>
      </form>
    </Container>
  );
};

export default FranquiadorForm;
