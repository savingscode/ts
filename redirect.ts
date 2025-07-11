const redirect = "http://srv236669.hoster-test.ru/sd/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirect,
    },
  })
);
