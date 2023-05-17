const login = async (username, password) => {
  const headers = {
    "content-type": "application/json"
  }

  let resp = await fetch(".../auth/login", {
    headers,
    body: JSON.stringify({username, password}),
    method: "POST"
  });

  let {accessToken} = await resp.json();

  sessionStorage.setItem("jwt-token", accessToken);

  return accessToken;
}

const isAuthenticated = () => sessionStorage.getItem('jwt-token') !== null;


const authService = { login, isAuthenticated };
export default authService;