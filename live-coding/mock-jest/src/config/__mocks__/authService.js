import jwt from 'jsonwebtoken';

const login = (username, password) => {
  const loginPromise = new Promise((resolve, reject) => {
    if(username === '' || password === '') {
      reject("Empty credentials");
    } else {
      const accessToken = jwt.sign({username}, "somesecretsareawesomebutpenguinsbeatthemall");
      sessionStorage.setItem('jwt-token', accessToken);
  
      resolve(accessToken);
    }
  });

  return loginPromise;
}

const authService = { login };
export default authService;
