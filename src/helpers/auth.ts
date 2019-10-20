export const login = (token: string): void =>
    localStorage.setItem('token', `Bearer ${token}`);
export const logout = (): void => localStorage.removeItem('token');
export const isAuth = (): boolean => localStorage.getItem('token') !== null;
export const getToken = (): string | null => localStorage.getItem('token');
