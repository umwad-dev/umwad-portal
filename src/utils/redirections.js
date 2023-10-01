export const goToHomePage = () =>
  window.location.pathname !== "/" && (window.location.href = "/");
export const goToLoginPage = () =>
  window.location.pathname !== "/login" && (window.location.href = "/login");
export const goToRegistrationPage = () =>
  window.location.pathname !== "/registration" &&
  (window.location.href = "/registration");
export const goToStartupPage = () =>
  window.location.pathname !== "/startups" &&
  (window.location.href = "/startups");
export const goToTBIsPage = () =>
  window.location.pathname !== "/tbis" && (window.location.href = "/tbis");
export const goToStoriesPage = () =>
  window.location.pathname !== "/news-and-articles" &&
  (window.location.href = "/news-and-articles");
export const goToSingleStoryPage = () =>
  (window.location.href = "/news-and-articles/123");
export const goToTBIAdminPage = () =>
  window.location.pathname !== "/tbi-admin" &&
  (window.location.href = "/tbi-admin");
export const goToStartupRegistrationPage = () =>
  window.location.pathname !== "/startup/registration" &&
  (window.location.href = "/startup/registration");
export const goToStartupAdminPage = () =>
  window.location.pathname !== "/startup-admin" &&
  (window.location.href = "/startup-admin");
export const goToSuperAdminPage = () =>
  window.location.pathname !== "/super-admin" &&
  (window.location.href = "/super-admin");
export const goToTBIRegistrationPage = () =>
  window.location.pathname !== "/tbi/registration" &&
  (window.location.href = "/tbi/registration");

// admin
export const goToAcceleratorAdminPage = () =>
  window.location.pathname !== "/accelerator-admin" &&
  (window.location.href = "/accelerator-admin");
export const goToCoworkingSpaceAdminPage = () =>
  window.location.pathname !== "/coworking-space-admin" &&
  (window.location.href = "/coworking-space-admin");
export const goToFablabAdminPage = () =>
  window.location.pathname !== "/fab-lab-admin" &&
  (window.location.href = "/fab-lab-admin");
export const goToFoodInnovationCenterAdminPage = () =>
  window.location.pathname !== "/food-innovation-center-admin" &&
  (window.location.href = "/food-innovation-center-admin");
export const goToInnovationHubAdminPage = () =>
  window.location.pathname !== "/innovation-hub-admin" &&
  (window.location.href = "/innovation-hub-admin");

// registration
export const goToAcceleratorRegistrationPage = () =>
  window.location.pathname !== "/accelerator/registration" &&
  (window.location.href = "/accelerator/registration");
export const goToCoworkingSpaceRegistrationPage = () =>
  window.location.pathname !== "/coworking-space/registration" &&
  (window.location.href = "/coworking-space/registration");
export const goToFablabRegistrationPage = () =>
  window.location.pathname !== "/fab-lab/registration" &&
  (window.location.href = "/fab-lab/registration");
export const goToFoodInnovationCenterRegistrationPage = () =>
  window.location.pathname !== "/food-innovation-center/registration" &&
  (window.location.href = "/food-innovation-center/registration");
export const goToInnovationHubRegistrationPage = () =>
  window.location.pathname !== "/innovation-hub/registration" &&
  (window.location.href = "/innovation-hub/registration");
