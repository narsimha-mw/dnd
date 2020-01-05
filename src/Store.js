 const db=localStorage;
export const User={
    email:"dummy@dummy.com",
    password: "dummy"
}
export function isLogin(flage){
    return flage;
}
export function setUser(flage){
    console.log(flage)
    db.setItem("LOGIN", flage);

}
export function getUser(){
    const resut= db.getItem("LOGIN");
console.log("resut: ", resut)
}