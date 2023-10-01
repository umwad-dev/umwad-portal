import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import { Spinner, Table } from "../../../../../../components";
import {
  approvalAcceleratorAction,
  getAllAcceleratorAction,
  refreshAcceleratorCollection,
  resetAcceleratorDispatchCounter,
} from "../../../../../../features/accelerator/acceleratorSlice";
import { useNotification } from "../../../../../../hooks";
import {
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
} from "./AcceleratorApprovals.styles";

const AcceleratorApprovals = () => {
  const { dispatchCounter, isLoading, isSuccess, message, accelerators } =
    useSelector((state) => state.accelerator);
  const dispatch = useDispatch();
  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    dispatch(getAllAcceleratorAction());
  }, [dispatch]);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetAcceleratorDispatchCounter());
    }
  }, [dispatch, dispatchCounter, isSuccess, message, openNotification]);

  const onValidation = (validationInfo) => {
    const { isApprove, uid } = validationInfo;

    dispatch(approvalAcceleratorAction(validationInfo));
    dispatch(
      refreshAcceleratorCollection({
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
      title: "Accelerator Name",
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
              title="Are you sure you approve this Accelerator?"
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
              title="Are you sure you disapprove this Accelerator?"
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
        <Table columns={columns} data={accelerators} />
      )}
    </Container>
  );
};

export default AcceleratorApprovals;
