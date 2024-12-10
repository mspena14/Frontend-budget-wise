import React, { useState } from 'react';
import { loginUser } from '../../services/authService';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/useAuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!email.includes('@') || !(email.includes('.com') || email.includes('.co'))) {
      setError('Invalid email address');
      setIsLoading(false);
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await loginUser(email, password);
      console.log('Login Success:', response);
      console.log(response.data.token, response.data.userId);
      login(response.data.token, response.data.userId)
      navigate('/budget');
    } catch (error) {
      setError('Invalid credentials');
      console.error('Login Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      
      <form onSubmit={handleLogin} className={styles.form}>
      <h2 className='font-extrabold text-lg'>Login</h2>
        <div className={styles.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
