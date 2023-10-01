import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { AdminLoginPage, LoginPage, RegistrationPage } from "./pages/auth";
import ContactUsPage from "./pages/contact-us/ContactUs";
import HomePage from "./pages/home/Home";
import StartupPage from "./pages/startup/Startup";
import StartupsPage from "./pages/startups/Startups";
import StoriesPage from "./pages/stories/Stories";
import StoryPage from "./pages/story/Story";
import {
  AcceleratorAdminPage,
  CoworkingSpaceAdminPage,
  FabLabAdminPage,
  FoodAdminPage,
  IHubAdminPage,
  StartupAdminPage,
  SuperAdminPage,
  TBIAdminPage,
} from "./pages/admin";
import TBIPage from "./pages/tbi/TBI";
import TBIsPage from "./pages/tbis/TBIs";
import FourOhFourPage from "./pages/404/FourOhFour";
import StartupRegistrationPage from "./pages/startup-registration/StartupRegistration";
import TBIRegistrationPage from "./pages/tbi-registration/TBIRegistration";
import SimpleProtectedRoute from "./routes/SimpleProtectedRoute";
import SearchPage from "./pages/search/Search";
import ProgramPage from "./pages/program/Program";
import AboutUsPage from "./pages/about-us/AboutUs";
import AcceleratorRegistrationPage from "./pages/accelerator-registration/AcceleratorRegistration";
import CoWorkingSpaceRegistrationPage from "./pages/coworking-space-registration/CoWorkingSpaceRegistration";
import FabLabRegistrationPage from "./pages/fablab-registration/FabLabRegistration";
import FoodInnovationRegistrationPage from "./pages/food-innvation-registration/FoodInnovationRegistration";
import IHubRegistrationPage from "./pages/i-hub-registration/iHubRegistration";
import FabLabsPage from "./pages/fab-labs/FabLabs";
import InnovationHubsPage from "./pages/innovation-hubs/InnovationHubs";
import FoodInnovationCentersPage from "./pages/food-innovation-centers/FoodInnovationCenters";
import CoWorkingSpacesPage from "./pages/coworking-spaces/CoWorkingSpaces";
import AcceleratorsPage from "./pages/accelerators/Accelerators";
import AcceleratorPage from "./pages/accelerator/Accelerator";
import CoWorkingSpacePage from "./pages/coworking-space/CoWorkingSpace";
import FabLabPage from "./pages/fab-lab/FabLab";
import FoodInnovationCenterPage from "./pages/food-innovation-center/FoodInnovationCenter";
import InnovationHubPage from "./pages/innovation-hub/InnovationHub";
import DownloadablesPage from "./pages/downloadables/Downloadables";

const router = createBrowserRouter([
  {
    element: <HomePage />,
    path: "/",
  },
  {
    element: <AboutUsPage />,
    path: "/about-us",
  },
  {
    element: <DownloadablesPage />,
    path: "/downloadables",
  },
  {
    element: <ProgramPage />,
    path: "/program/:slug",
  },
  {
    element: <AcceleratorPage />,
    path: "/accelerator/:slug",
  },
  {
    element: <CoWorkingSpacePage />,
    path: "/coworking-space/:slug",
  },
  {
    element: <FoodInnovationCenterPage />,
    path: "/food-innovation-center/:slug",
  },
  {
    element: <FabLabPage />,
    path: "/fab-lab/:slug",
  },
  {
    element: <InnovationHubPage />,
    path: "/innovation-hub/:slug",
  },
  {
    element: <StartupPage />,
    path: "/startup/:slug",
  },
  {
    element: <StartupsPage />,
    path: "/startups",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <StartupRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/startup/registration",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <AcceleratorRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/accelerator/registration",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <CoWorkingSpaceRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/coworking-space/registration",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <FabLabRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/fab-lab/registration",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <FoodInnovationRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/food-innovation-center/registration",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <IHubRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/innovation-hub/registration",
  },
  {
    element: <TBIPage />,
    path: "/tbi/:slug",
  },
  {
    element: <AcceleratorsPage />,
    path: "/accelerators",
  },
  {
    element: <CoWorkingSpacesPage />,
    path: "/coworking-spaces",
  },
  {
    element: <FabLabsPage />,
    path: "/fab-labs",
  },
  {
    element: <InnovationHubsPage />,
    path: "/innovation-hubs",
  },
  {
    element: <FoodInnovationCentersPage />,
    path: "/food-innovation-centers",
  },
  {
    element: <TBIsPage />,
    path: "/tbis",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <TBIRegistrationPage />
      </SimpleProtectedRoute>
    ),
    path: "/tbi/registration",
  },
  {
    element: <ContactUsPage />,
    path: "/contact-us",
  },
  {
    element: <LoginPage />,
    path: "/login",
  },
  {
    element: <AdminLoginPage />,
    path: "/super-admin/login",
  },
  {
    element: <RegistrationPage />,
    path: "/registration",
  },
  {
    element: <SearchPage />,
    path: "/search",
  },
  {
    element: <StoriesPage />,
    path: "/news-and-articles",
  },
  {
    element: <StoryPage />,
    path: "/news-and-articles/:slug",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <AcceleratorAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/accelerator-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <CoworkingSpaceAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/coworking-space-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <FabLabAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/fab-lab-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <FoodAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/food-innovation-center-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <IHubAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/innovation-hub-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <StartupAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/startup-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <SuperAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/super-admin",
  },
  {
    element: (
      <SimpleProtectedRoute>
        <TBIAdminPage />
      </SimpleProtectedRoute>
    ),
    path: "/tbi-admin",
  },
  {
    element: <FourOhFourPage />,
    path: "*",
  },
]);

export default router;
