import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import StudentForm from "@/pages/StudentForm.vue"; 
import Notifications from "@/pages/Notifications.vue";
import Buildings from "@/pages/Buildings.vue";
import Maps from "@/pages/Maps.vue";
import Class from "@/pages/Class.vue";
import BillingList from "@/pages/BillingList.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "stats",
        name: "stats",
        component: UserProfile
      },
       {
        path: "stdent/form",
        name: "student_form",
        component: StudentForm
      },
      {
        path: "notifications",
        name: "notifications",
        component: Notifications
      },
      {
        path: "Buildings",
        name: "Buildings",
        component: Buildings
      },
      {
        path: "maps",
        name: "maps",
        component: Maps
      },
      {
        path: "Class",
        name: "Class",
        component: Class
      },
      {
        path: "billing-list",
        name: "billing-list",
        component: BillingList
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
