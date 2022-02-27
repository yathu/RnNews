export type AuthData={
    token:string;
    name:string;
    email:string;
}

const signIn = async (email:string, password:string): Promise<AuthData> => {

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token:JWTTokenMock,
                name: 'John Doe',
                email:email
            });
        }, 1000);
    });
}

export const authServices = {
    signIn
}


const JWTTokenMock =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikx1Y2FzIEdhcmNleiIsImlhdCI6MTUxNjIzOTAyMn0.oK5FZPULfF-nfZmiumDGiufxf10Fe2KiGe9G5Njoa64';
