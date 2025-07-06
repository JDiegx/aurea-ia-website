// services/chatService.js
export const sendChatMessage = async (prompt, token) => {
    try {
        const response = await fetch('https://aureapi-933872953103.us-central1.run.app/api_pymeup/financial1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                conversation_id: 'conv123',
                prompt,
            }),
        });

        const data = await response.json();

        return (
            data?.choices?.[0]?.message?.content ||
            'Lo siento, no entendí tu mensaje.'
        );
    } catch (error) {
        console.error('Error en la petición del chat:', error);
        throw new Error('Ocurrió un error. Intenta nuevamente.');
    }
};
