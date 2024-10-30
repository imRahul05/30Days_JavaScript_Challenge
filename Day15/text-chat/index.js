const textArea = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const responseDiv = document.getElementById("response");

// Replace 'YOUR_GEMINI_API_KEY' with your actual Gemini API key
const GEMINI_API_KEY = '';

sendBtn.addEventListener("click", send);

async function send() {
    const message = textArea.value;
    console.log(message);

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: message
                            }
                        ]
                    }
                ]
            })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);

        // Display the response in the responseDiv
        responseDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        responseDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}