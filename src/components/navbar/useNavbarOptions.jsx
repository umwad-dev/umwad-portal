import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { signOutUserAction } from "../../features/auth/authSlice";
import {
  goToAcceleratorAdminPage,
  goToAcceleratorRegistrationPage,
  goToCoworkingSpaceAdminPage,
  goToCoworkingSpaceRegistrationPage,
  goToFablabAdminPage,
  goToFablabRegistrationPage,
  goToFoodInnovationCenterAdminPage,
  goToFoodInnovationCenterRegistrationPage,
  goToInnovationHubAdminPage,
  goToInnovationHubRegistrationPage,
  goToStartupAdminPage,
  goToStartupRegistrationPage,
  goToSuperAdminPage,
  goToTBIAdminPage,
  goToTBIRegistrationPage,
} from "../../utils/redirections";
import { DropdownItem } from "./Navbar.styles";

const useNavbarOptions = (type, registered) => {
  const [options, setOptions] = useState([]);
  const dispatch = useDispatch();

  const onSignOut = useCallback(() => {
    dispatch(signOutUserAction());
  }, [dispatch]);

  useEffect(() => {
    if (type === 1) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToStartupAdminPage}>
              Startup Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToStartupRegistrationPage}>
              Register as Startup
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 2) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToTBIAdminPage}>
              TBI Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToTBIRegistrationPage}>
              Register as TBI
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 3) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToAcceleratorAdminPage}>
              Accelerator Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToAcceleratorRegistrationPage}>
              Register as Accelerator
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 4) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToInnovationHubAdminPage}>
              Innovation Hub Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToInnovationHubRegistrationPage}>
              Register as Innovation Hub
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 5) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToCoworkingSpaceAdminPage}>
              Co-working Space Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToCoworkingSpaceRegistrationPage}>
              Register as Co-working Space
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 6) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToFablabAdminPage}>
              Fab-lab Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToFablabRegistrationPage}>
              Register as Fab-lab
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 7) {
      return setOptions([
        {
          key: 1,
          label: registered ? (
            <DropdownItem onClick={goToFoodInnovationCenterAdminPage}>
              Food Innovation Center Dashboard
            </DropdownItem>
          ) : (
            <DropdownItem onClick={goToFoodInnovationCenterRegistrationPage}>
              Register as Food Innovation Center
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else if (type === 9) {
      return setOptions([
        {
          key: 1,
          label: (
            <DropdownItem onClick={goToSuperAdminPage}>
              Super Admin Dashboard
            </DropdownItem>
          ),
        },
        {
          key: 2,
          label: <DropdownItem onClick={onSignOut}>Sign out</DropdownItem>,
        },
      ]);
    } else {
      setOptions([]);
    }
  }, [onSignOut, registered, type]);

  return {
    options,
  };
};

export default useNavbarOptions;
