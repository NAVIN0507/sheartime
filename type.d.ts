interface AuthCredentials{
    fullName:string;
    phone:string;
    email:string;
    password: string;
    isAdmin?:boolean;
}
interface OnBoardingCredentials{
    adminId:string;
    shopName:string;
    shopAddress:string;
    shopPhone:number;
    shopEmail:string;
    shopDescription:string;
    shopImages:string;
}