const BASE_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: false, message: "Server error" };
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    });
    const data = await res.json();
    return data;
  } catch (err) {
    return { status: false, message: "Server error" };
  }
};
