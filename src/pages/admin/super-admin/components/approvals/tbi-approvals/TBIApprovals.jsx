import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import { Spinner, Table } from "../../../../../../components";
import {
  approvalTBIAction,
  getAllTBIAction,
  refreshTBICollection,
  resetTBIDispatchCounter,
} from "../../../../../../features/tbi/tbiSlice";
import { useNotification } from "../../../../../../hooks";
import {
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
} from "./TBIApprovals.styles";

const TBIApprovals = () => {
  const { dispatchCounter, isLoading, isSuccess, message, tbis } = useSelector(
    (state) => state.tbi
  );
  const dispatch = useDispatch();
  const { contextHolder, openNotification } = useNotification();

  useEffect(() => {
    dispatch(getAllTBIAction());
  }, [dispatch]);

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetTBIDispatchCounter());
    }
  }, [dispatch, dispatchCounter, isSuccess, message, openNotification]);

  const onValidation = (validationInfo) => {
    const { isApprove, uid } = validationInfo;

    dispatch(approvalTBIAction(validationInfo));
    dispatch(
      refreshTBICollection({
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
      title: "TBI Name",
      dataIndex: "tbiName",
      key: "tbiName",
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
      render: (tbi) => {
        return (
          <Space size="middle">
            <Popconfirm
              cancelText="No"
              description="Press No to exit."
              okText="Yes"
              onConfirm={() =>
                onValidation({
                  isApprove: true,
                  uid: tbi.uid,
                })
              }
              placement="left"
              title="Are you sure you approve this TBI?"
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
                  uid: tbi.uid,
                })
              }
              placement="left"
              title="Are you sure you disapprove this TBI?"
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
        <Table columns={columns} data={tbis} />
      )}
    </Container>
  );
};

export default TBIApprovals;
