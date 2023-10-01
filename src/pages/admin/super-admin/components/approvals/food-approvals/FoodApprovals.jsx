import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import { Spinner, Table } from "../../../../../../components";
import {
  approvalFoodAction,
  getAllFoodAction,
  refreshFoodCollection,
  resetFoodDispatchCounter,
} from "../../../../../../features/food-innovation/foodInnovationSlice";
import { useNotification } from "../../../../../../hooks";
import {
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
} from "./FoodApprovals.styles";

const FoodApprovals = () => {
  const { dispatchCounter, isLoading, isSuccess, message, foods } = useSelector(
    (state) => state.food
  );
  const dispatch = useDispatch();
  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    dispatch(getAllFoodAction());
  }, [dispatch]);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetFoodDispatchCounter());
    }
  }, [dispatch, dispatchCounter, isSuccess, message, openNotification]);

  const onValidation = (validationInfo) => {
    const { isApprove, uid } = validationInfo;

    dispatch(approvalFoodAction(validationInfo));
    dispatch(
      refreshFoodCollection({
        disapproved: !isApprove,
        uid,
        validated: isApprove,
      })
    );
  };

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "Food Innovation Center Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Province",
      dataIndex: "province",
      key: "province",
    },
    {
      title: "Municipality",
      dataIndex: "municipality",
      key: "municipality",
    },
    {
      title: "Validated",
      dataIndex: "validated",
      key: "validated",
      render: (validated) => (
        <Tag color={validated ? "green" : "volcano"}>
          {validated ? "Yes" : "No"}
        </Tag>
      ),
    },
    {
      title: "Account Associated",
      dataIndex: "accountAssociated",
      key: "accountAssociated",
      render: (text) => <Link>{text}</Link>,
    },
    {
      title: "Manage",
      render: (data) => {
        return (
          <Space size="middle">
            <Popconfirm
              cancelText="No"
              description="Press No to exit."
              okText="Yes"
              onConfirm={() =>
                onValidation({
                  isApprove: true,
                  uid: data.uid,
                })
              }
              placement="left"
              title="Are you sure you approve this Food Innovation Center?"
            >
              <Link>Approve</Link>
            </Popconfirm>
            <Popconfirm
              cancelText="No"
              description="Press No to exit."
              okText="Yes"
              onConfirm={() =>
                onValidation({
                  isApprove: false,
                  uid: data.uid,
                })
              }
              placement="left"
              title="Are you sure you disapprove this Food Innovation Center?"
            >
              <RemoveLink>Disapprove</RemoveLink>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <Container>
      {contextHolder}
      {isLoading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table columns={columns} data={foods} />
      )}
    </Container>
  );
};

export default FoodApprovals;
