const baseURL = import.meta.env.VITE_API_BASE_URL;

export const loginUser = async (email, password) => {
  try {
    const response = await fetch(`${baseURL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await response.json();
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
