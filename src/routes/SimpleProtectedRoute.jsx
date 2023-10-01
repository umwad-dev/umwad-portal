import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

const SimpleProtectedRoute = ({ children }) => {
  const { currentUser } = useAuth();

  // Startup
  if (currentUser?.type === 1) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/startup/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // TBI
  if (currentUser?.type === 2) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/tbi/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // Accelerator
  if (currentUser?.type === 3) {
    if (
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/accelerator/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // iHub
  if (currentUser?.type === 4) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/innovation-hub/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // Co-working Spaces
  if (currentUser?.type === 5) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/coworking-space/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // Fab-Labs
  if (currentUser?.type === 6) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/food-innovation-center/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/food-innovation-center-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/fab-lab/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  // Food Innovation Centers
  if (currentUser?.type === 7) {
    if (
      window.location.pathname === "/accelerator/registration" ||
      window.location.pathname === "/coworking-space/registration" ||
      window.location.pathname === "/fab-lab/registration" ||
      window.location.pathname === "/innovation-hub/registration" ||
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/accelerator-admin" ||
      window.location.pathname === "/fab-lab-admin" ||
      window.location.pathname === "/innovation-hub-admin" ||
      window.location.pathname === "/coworking-space-admin" ||
      window.location.pathname === "/startup-admin" ||
      window.location.pathname === "/super-admin" ||
      window.location.pathname === "/tbi-admin"
    ) {
      return <Navigate to="/" />;
    }

    if (currentUser?.registered) {
      if (window.location.pathname === "/food-innovation-center/registration") {
        return <Navigate to="/" />;
      }
    }
  }

  if (currentUser?.type === 9) {
    if (
      window.location.pathname === "/startup/registration" ||
      window.location.pathname === "/tbi/registration" ||
      window.location.pathname === "/tbi-admin" ||
      window.location.pathname === "/startup-admin"
    ) {
      return <Navigate to="/" />;
    }
  }

  return currentUser ? children : <Navigate to="/login" />;
};

export default SimpleProtectedRoute;
