export const login = (token: string) => localStorage.setItem('token', token);
export const logout = () => localStorage.removeItem('token');
export const isAuth = () => localStorage.getItem('token');
