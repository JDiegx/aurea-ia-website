// authServices.js
export const verifyToken = async (token) => {
  // Lógica para verificar token con backend
  const response = await fetch('https://yourapi.com/api/verify-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Invalid token');
  }

  return await response.json();
};

export const isTokenValid = (token) => {
  // Validación local del token JWT (expiración)
  if (!token) return false;
  try {
    const { exp } = jwtDecode(token);
    if (!exp) return false;
    return Date.now() < exp * 1000;
  } catch {
    return false;
  }
};
