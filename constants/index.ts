import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'
export const mainNavItems = ["Home" ,"About" , "Contact"]

export const heroImages =[
    {imageUrl:'/icons/logo-main.svg' , alt:'hero1'},
   
    {imageUrl:'/icons/logo3.svg' , alt:'hero1'},

    
]
export const developers = [
    {name: 'Navin N', image: '/sample/sasuke.jpg' , role:"Backend" },
    {name: 'Godson Flinto', image: '/sample/jinwo.jpg' , role:"DataBase"},
    {name: 'Mahendrean', image: '/sample/gogo.jpg' , role:"Frontend"},
    {name: 'Vijay Barathi', image: '/sample/killu.jpg' , role:"UI/UX"},
]
export const SIGNIN_FIELD_NAMES ={
    email:'Email',
    password:'Password'
}

export const NavItems = [
    {
        name:"Home",
        route:"/"
    },
    {
        name:"About",
        route:"#about"
    },
    {
        name:"Contact",
        route:"#contact"
    },
    {
        name:"Log in",
        route:"/sign-in"
    },
    {
        name:"Sign up",
        route:"/sign-up"
    },
]
export const FeatureItems=[
    {
        title:"Create Account",
        description:"Create your account in sheartime",
        className:"bg-pink-400",
    },
       {
        title:"Create Accoun",
        description:"Create your account in sheartime",
        className:"bg-teal-400"
    },
       {
        title:"Create Accou",
        description:"Create your account in sheartime",
        className:"bg-pink-400"
    },
       {
        title:"Create Acco",
        description:"Create your account in sheartime",
        className:"bg-pink-400"
    }
]
export const sidebarLinks =[
   
     {
        name:'Shops',
        img:'/icons/booking.svg',
        route:'/customers/shops'
    },
     {
        name:'Pending Bookings',
        img:'/icons/booking.svg',
        route:'/pending-booking'
    },
     {
        name:'Previous Booking',
        img:'/icons/booking.svg',
        route:'/previous-booking'
    },
    {
        name:'Payments',
        img:'/icons/booking.svg',
        route:'/payments'
    },
]