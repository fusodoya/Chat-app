export const baseUrl = "http://localhost:5000";

export const postRequest = async (url, body) => {
  console.log("URL", url);
  console.log("Body", body);
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: body,
  });

  const data = await response.json();
  if (!response.ok) {
    let message = "An error occurred";

    if (data && data.message) {
      message = data.message;
    }

    return { error: true, message };
  }
  return data;
};
