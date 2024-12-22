import * as React from 'react';
import { Container, Box, TextField, Button, Typography, Paper, CircularProgress, Alert } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import { useContext, useState } from 'react';
import { AuthContext } from '@/contexts/AuthContextType';
import Swal from 'sweetalert2';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carregamento
  const [error, setError] = useState<string | null>(null); // Estado para exibir erros
  const { login } = useContext(AuthContext);
  
  const validateForm = () => {
    // Validações básicas
    if (!email.includes('@')) {
      setError('Por favor, insira um e-mail válido.');
      return false;
    }
    setError(null); // Limpa o erro
    return true;
  };
  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateForm()) return;
    
    try {
      setLoading(true);
      login(email, senha).finally(()=>setLoading(false));
      // Exibe alerta de sucesso com SweetAlert2
    } catch (error) {
      setLoading(false);
      console.error(error);
      // Exibe mensagem de erro no formulário
      setError('E-mail ou senha incorretos');
    }
  };
  
  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, marginTop: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src="/assets/images/mstile-150x150.png" alt="Login" width="150" height="150" />
          
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {/* Exibe o erro se houver */}
            {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
            
            {/* Campo de login */}
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error && !email.includes('@')}
            />
            
            {/* Campo de senha */}
            <TextField
              margin="normal"
              required
              fullWidth
              name="senha"
              label="Senha"
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              error={!!error && senha.length < 6}
            />
            
            {/* Botão de submissão */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading} // Desabilita o botão durante o carregamento
              startIcon={loading ? <CircularProgress size={20} /> : <LoginIcon />}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
}
