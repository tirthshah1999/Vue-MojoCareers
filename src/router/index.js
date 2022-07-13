import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView";
// import JobResultsView from "@/views/JobResultsView";
// import JobView from "@/views/JobView";

// Lazy Loading
const HomeView = () => import("@/views/HomeView");
//Telling webpack for Grouping Lazy Load 
const JobResultsView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobResultsView");
const JobView = () => import(/* webpackChunkName: "jobs" */ "@/views/JobView");

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "jobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "jobListing",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
