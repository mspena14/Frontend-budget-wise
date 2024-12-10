import React, { ChangeEvent, useState } from 'react';
import { registerUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import styles from './Register.module.css';
import MyInput from '../../components/input/MyInput';

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmedPassword: "",
    phone: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    if (!formData.email.includes('@') ||!formData.email.includes('.com')) {
      setError('Invalid email address');
    setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
    setIsLoading(false);

      return;
    }


    if (formData.password!== formData.confirmedPassword) {
      setError('Passwords do not match');
    setIsLoading(false);

      return;
    }

    try {
      const userToCreate = {
        fullName: formData.fullName,
        email: formData.email,
        password: formData.password,
        phone: formData.phone,
      }
      const data = await registerUser(userToCreate);
      alert('Registration successful! Please log in.');
      navigate('/login');
      console.log('Register Success:', data);
    } catch (error: any) {
      if (error.status === 409) {
        setError('Email already exists please log in');
      } else {setError('Error registering user');}
      console.error('Register Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <form onSubmit={handleRegister} className={styles.form}>
      <h2 className='font-extrabold text-lg mb-3'>Register</h2>
        <MyInput
          label='Full Name'
          name='fullName'
          onChange={handleInputChange}
          placeholder='Your full name'
          type='text'
          value={formData.fullName}
          required={true}
          />

        <MyInput
          label='Email'
          name='email'
          onChange={handleInputChange}
          placeholder='example@email.com'
          type='email'
          value={formData.email}
          required={true}
          />

        <MyInput
          label='Password'
          name='password'
          onChange={handleInputChange}
          placeholder='**********'
          type='password'
          value={formData.password}
          required={true}
          />

        <MyInput
          label='Confirm assword'
          name='confirmedPassword'
          onChange={handleInputChange}
          placeholder='**********'
          type='password'
          value={formData.confirmedPassword}
          required={true}
          />

          <MyInput
          label='Phone Number'
          name='phone'
          onChange={handleInputChange}
          placeholder='123-456-7890'
          type='tel'
          value={formData.phone}
          required={false}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default Register;
