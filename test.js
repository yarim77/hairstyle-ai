const apiKey = 'AIzaSyAy1MMz5UoiK3WmdsSB2oIaxp_rjOqsyjU';
async function test() {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${apiKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: "a red dog" }] }]
        })
    });
    console.log(await res.json());
}
test();
