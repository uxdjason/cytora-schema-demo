export async function onRequest(context) {
    try {
      // 1. 아까 연결한 CYTORA_DB에서 'schemas'라는 Key의 데이터를 가져옵니다.
      const rawData = await context.env.CYTORA_DB.get("schemas");
  
      // 2. 만약 데이터가 없으면 에러 메시지를 보냅니다.
      if (!rawData) {
        return new Response(JSON.stringify({ error: "Data not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" }
        });
      }
  
      // 3. Webflow 등 외부 사이트에서 이 API를 호출할 수 있도록 허락(CORS)해 주며 데이터를 보냅니다.
      return new Response(rawData, {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // 🔥 매우 중요: Webflow가 데이터를 가져갈 수 있게 허락하는 보안 설정!
          "Access-Control-Allow-Methods": "GET",
        }
      });
  
    } catch (error) {
      // 혹시라도 에러가 나면 500 에러를 뱉습니다.
      return new Response(JSON.stringify({ error: "Internal Server Error" }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }