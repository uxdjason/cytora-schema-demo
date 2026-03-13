export async function onRequest(context) {
  try {
    // Retrieves the data under the 'schemas' key from the previously connected CYTORA_DB.
    const rawData = await context.env.CYTORA_DB.get("schemas");

    // Sends an error message if no data is found.
    if (!rawData) {
      return new Response(JSON.stringify({ error: "Data not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" }
      });
    }

    // Enables CORS so that external sites such as Webflow can call this API and receive the data.
    return new Response(rawData, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Important: This security setting allows Webflow to access the data.
        "Access-Control-Allow-Methods": "GET",
      }
    });

  } catch (error) {
    // Returns a 500 error if any unexpected error occurs.
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}