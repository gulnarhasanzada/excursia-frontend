export function getAuthToken(){
    return localStorage.getItem('token');
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