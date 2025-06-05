export const signupUser = async ({ email, password, name }) => {
    const response = await fetch('https://aureapi-933872953103.us-central1.run.app/api_pymeup/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, name })
    })

    if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Error en el registro')
    }

    const data = await response.json()
    return data
}
