import { icons } from "lucide-react"

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

export const sidebarLinks =[
   
     {
        name:'Shops',
        img:'/icons/barbershop.png',
        route:'/customers/shops'
    },
     {
        name:'Pending Bookings',
        img:'/icons/waiting.png',
        route:'/customers/pending-booking'
    },
     {
        name:'Previous Booking',
        img:'/icons/approved.png',
        route:'/customers/previous-booking'
    },
    {
        name:'Payments',
        img:'/icons/payment.png',
        route:'/customers/payments'
    },
]

export const AdminSideBar = [
    {
        name:"Previous Bookings",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
    {
        name:"Your Customers",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
    {
        name:"FeedBacks",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
    {
        name:"Payments",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
    {
        name:"Kanban",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
    {
        name:"Your Shop",
        img:'/icons/booking.svg',
        route:'/admin/previous-bookings'
    },
]