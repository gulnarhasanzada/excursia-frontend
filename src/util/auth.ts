import { redirect } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export function getAuthToken(){
    const token = localStorage.getItem('token');
    if(!token){
        return null;
    }
    const decodedToken: any = decodeJwt(token);
    if(decodedToken){
        const now = new Date().getTime()/1000;
        if(now - decodedToken.exp >= 0){
            return 'EXPIRED';
        }
    }
    return token;
}

export function deleteAuthToken(){
    localStorage.removeItem('token');
}

export function setAuthToken(token: string){
    localStorage.setItem('token', token);
}

export function tokenLoader(){
    return getAuthToken();
}

export function checkAuthLoader(){
    const token = getAuthToken();

    if(!token){
        return redirect('/auth')
    }
    return null;
}

export function decodeJwt(token: string){
    try {
      const decodedToken: { [key: string]: any } = jwtDecode(token);
      return decodedToken;
    } catch (error) {
        console.log(token)
      console.error('Error decoding JWT:', error);
      return null;
    }
};

export function getTokenDuration(token: string){
    const decodedToken: any = decodeJwt(token);
    const now = (new Date()).getTime();
    return decodedToken.exp*1000 - now;   
}