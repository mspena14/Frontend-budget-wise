import api from './api_url';

export const registerUser = async (formData: any) => {
  const response = await api.post(`/auth/register`, formData);
  return response.data;
};

export const loginUser = async (email: string, password: string) => {
  const response = await api.post(`/auth/login`, {
    email,
    password,
  });
  return response.data;
};

export const validateToken = async (token: string): Promise<boolean> => {
    try {
      const response = await api.get('/auth/validate-token', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data.valid;
    } catch (error) {
      console.error('Invalid token or error validating:', error);
      return false;
    }
  };

  export const setAuthToken = (token: string | null) => {
    if (token) {
      api.defaults.headers.Authorization = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.Authorization;
    }
  }