export const login = (token: string) => localStorage.setItem('token', `Bearer ${token}`);
export const logout = () => localStorage.removeItem('token');
export const isAuth = () => localStorage.getItem('token') !== null;
export const getToken = () => localStorage.getItem('token');
