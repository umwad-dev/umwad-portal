import notification from "antd/es/notification";

const useNotification = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = ({ isSuccess, message, heading }) => {
    if (heading) {
      return api["info"]({
        message: heading,
        description: message,
      });
    }

    return api[isSuccess ? "success" : "error"]({
      message: isSuccess ? "Success!" : "Error!",
      description: message,
    });
  };

  return {
    contextHolder,
    openNotification,
  };
};

export default useNotification;
