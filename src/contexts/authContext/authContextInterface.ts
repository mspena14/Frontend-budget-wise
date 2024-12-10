export interface IAuthContext {
    token: string | null;
    login: (token: string, userId: string) => void;
    logout: () => void;
    isAuthenticated: boolean;
    idUserLogged: string | null;
    isLoading: boolean;
  }