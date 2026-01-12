const request = await fetch("https://llm-chat-app-template.templates.workers.dev/api/chat", {
  "headers": {
    "accept": "*/*",
    "accept-language": "en-US,en;q=0.9,ja;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    "pragma": "no-cache",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Microsoft Edge\";v=\"143\", \"Chromium\";v=\"143\", \"Not A(Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://llm-chat-app-template.templates.workers.dev/",
  "body": JSON.stringify({
      messages: [
        {
            "role": "assistant",
            "content": "Hi how are you?"
        },
        {
            "role": "user",
            "content": "I am happy, what about you?"
        }
    ]
  }),
  "method": "POST",
  "mode": "cors",
  "credentials": "omit"
});

function consumeSseEvents(buffer) {
	let normalized = buffer.replace(/\r/g, "");
	const events = [];
	let eventEndIndex;
	while ((eventEndIndex = normalized.indexOf("\n\n")) !== -1) {
		const rawEvent = normalized.slice(0, eventEndIndex);
		normalized = normalized.slice(eventEndIndex + 2);

		const lines = rawEvent.split("\n");
		const dataLines = [];
		for (const line of lines) {
			if (line.startsWith("data:")) {
				dataLines.push(line.slice("data:".length).trimStart());
			}
		}
		if (dataLines.length === 0) continue;
		events.push(dataLines.join("\n"));
	}
	return { events, buffer: normalized };
}

const reader = request.body.getReader();

const decoder = new TextDecoder();
let responseText = "";
let buffer = "";

while (true) {
	const { value, done } = await reader.read();

	if (done) break;

	buffer += decoder.decode(value, { stream: true });
	const parsed = consumeSseEvents(buffer);
	buffer = parsed.buffer;

	for (const data of parsed.events) {
		if (data === "[DONE]") continue;

		const jsonData = JSON.parse(data);
		// Handle both Workers AI format (response) and OpenAI format (choices[0].delta.content)
		let content = "";
		if (
			typeof jsonData.response === "string" &&
			jsonData.response.length > 0
		) {
			content = jsonData.response;
		} else if (jsonData.choices?.[0]?.delta?.content) {
			content = jsonData.choices[0].delta.content;
		}
		if (content) {
			responseText += content;
		}
	}
}

console.log(responseText);
