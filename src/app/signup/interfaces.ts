export interface ProgManager {
    email: string,
    password: string,
    userType: string,
}
  
export interface Student {
    email: string,
    password: string,
    userType: string;
}

export interface User {
    user : ProgManager | Student;
}