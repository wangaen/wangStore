export function getToken() {
  const token = sessionStorage.getItem('token');
  return token == null ? '' : token;
}

export function setToken(tokenStr: string) {
  sessionStorage.setItem('token', tokenStr);
}

export function removeToken() {
  sessionStorage.removeItem('token');
}
