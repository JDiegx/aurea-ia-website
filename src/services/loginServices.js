export const loginUser = async (email, password) => {
    try {
        const response = await fetch(
            "https://aureapi-933872953103.us-central1.run.app/api_pymeup/login",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            }
        );

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Error en login");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};
