/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import ListNannys from "views/ListNannys"
import Home from "views/Home"

//Nannys
import NannyUpdate from "views/NannyUpdate"
import NannyUpdateApproved from "views/NannyUpdateApproved"
import NannyUpdateReject from "views/NannyUpdateReject"
import NannyUpdateSuspend from "views/NannyUpdateSuspend"
import NannyUpdateDisable from "views/NannyUpdateDisable"
import ListNannysApproved from "views/ListNannysApproved"
import ListNannysReject from "views/ListNannysReject"
import ListNannysSuspend from "views/ListNannysSuspend"
import ListNannysDisabled from "views/ListNannysDisabled"

//Daddys
import ListDaddys from "views/Daddys/ListDaddys"
import ViewDaddy from "views/Daddys/ViewDaddy"

//Bookings
import ListBookingPending from "views/Bookings/ListBookingPending"
import ListBookingAccept from "views/Bookings/ListBookingAccept"
import ListBookingDo from "views/Bookings/ListBookingDo"
import ListBookingPaid from "views/Bookings/ListBookingPaid"
import ListBookingCancel from "views/Bookings/ListBookingCancel"
import ListBookingReject from "views/Bookings/ListBookingReject"
import BookingPending from "views/Bookings/BookingPending"
import BookingAccept from "views/Bookings/BookingAccept"
import BookingDo from "views/Bookings/BookingDo"
import BookingPaid from "views/Bookings/BookingPaid"
import BookingCancel from "views/Bookings/BookingCancel"
import BookingReject from "views/Bookings/BookingReject"

var routes = [
  {
    path: "/home",
    name: "Home",
    icon: "ni ni-tv-2 text-primary",
    component: Home,
    layout: "/admin",
  },
  {
    path: "/nannys-pendientes",
    name: "Nannys Pendientes",
    icon: "ni ni-bullet-list-67 text-info",
    component: ListNannys,
    layout: "/admin",
  },
  {
    path: "/nannys-aprobadas",
    name: "Nannys Aprobadas",
    icon: "ni ni-bullet-list-67 text-success",    
    component: ListNannysApproved,
    layout: "/admin",
  },
  {
    path: "/nannys-rechazadas",
    name: "Nannys Rechazadas",
    icon: "ni ni-bullet-list-67 text-red",    
    component: ListNannysReject,
    layout: "/admin",
  },
  {
    path: "/nannys-suspendidas",
    name: "Nannys Suspendidas",
    icon: "ni ni-bullet-list-67 text-warning",    
    component: ListNannysSuspend,
    layout: "/admin",
  },
  {
    path: "/nannys-desactivadas",
    name: "Nannys Desactivadas",
    icon: "ni ni-bullet-list-67 text-muted",    
    component: ListNannysDisabled,
    layout: "/admin",
  },
  
  {
    path: "/daddys",
    name: "Daddys",
    icon: "ni ni-bullet-list-67 text-success",    
    component: ListDaddys,
    layout: "/admin",
  } ,
  {
    path: "/bookings-pendientes",
    name: "Bookings Pendientes",
    icon: "ni ni-bullet-list-67 text-info",    
    component: ListBookingPending,
    layout: "/admin",
  } ,
  {
    path: "/bookings-aceptados",
    name: "Bookings Aceptados",
    icon: "ni ni-bullet-list-67 text-primary",    
    component: ListBookingAccept,
    layout: "/admin",
  } ,
  {
    path: "/bookings-pagados",
    name: "Bookings Pagados",
    icon: "ni ni-bullet-list-67 text-success",    
    component: ListBookingPaid,
    layout: "/admin",
  } ,
  {
    path: "/bookings-finalizados",
    name: "Bookings Finalizados",
    icon: "ni ni-bullet-list-67 text-muted",    
    component: ListBookingDo,
    layout: "/admin",
  } ,
  {
    path: "/bookings-rechazados",
    name: "Bookings Rechazados",
    icon: "ni ni-bullet-list-67 text-red",    
    component: ListBookingReject,
    layout: "/admin",
  } ,
  {
    path: "/bookings-cancelados",
    name: "Bookings Cancelados",
    icon: "ni ni-bullet-list-67 text-warning",    
    component: ListBookingCancel,
    layout: "/admin",
  } ,
  
  {
    path: "/actualizar",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: NannyUpdate,
    layout: "/admin",
  } 
  ,
  {
    path: "/actualizar-nanny-aprobada",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: NannyUpdateApproved,
    layout: "/admin",
  } 
  ,
  {
    path: "/actualizar-nanny-rechazada",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: NannyUpdateReject,
    layout: "/admin",
  },
  {
    path: "/actualizar-nanny-suspendida",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: NannyUpdateSuspend,
    layout: "/admin",
  },
  {
    path: "/actualizar-nanny-desactivada",
    name: "Actualizar Nanny",
    icon: "ni ni-bullet-list-67 text-red",    
    component: NannyUpdateDisable,
    layout: "/admin",
  } ,
  {
    path: "/ver-daddy",
    name: "Ver Daddy",
    icon: "ni ni-bullet-list-67 text-success",    
    component: ViewDaddy,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-pendiente",
    name: "Ver Booking Pendiente",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingPending,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-aceptado",
    name: "Ver Booking Aceptado",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingAccept,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-finalizado",
    name: "Ver Booking Finalizado",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingDo,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-rechazado",
    name: "Ver Booking Rechazado",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingReject,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-pagado",
    name: "Ver Booking Pagado",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingPaid,
    layout: "/admin",
  } ,
  {
    path: "/ver-booking-cancelado",
    name: "Ver Booking Cancelado",
    icon: "ni ni-bullet-list-67 text-success",    
    component: BookingCancel,
    layout: "/admin",
  } ,
 
 
  /* {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
   {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  }, 
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  /* {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  }, */
];
export default routes;
