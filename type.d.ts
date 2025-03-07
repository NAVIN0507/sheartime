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
    shopPhone:string;
    shopEmail:string;
    shopDescription:string;
    shopImages:string;
}
interface BookingCredentials{
    userId:string;
    shopId:string;
    dateTime:Date;
}