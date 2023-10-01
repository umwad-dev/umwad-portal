import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import { Spinner, Table } from "../../../../../components";
import { db } from "../../../../../firebase/firebase.config";
import {
  approvalStartupAction,
  resetStartupDispatchCounter,
} from "../../../../../features/startup/startupSlice";
import { useNotification } from "../../../../../hooks";
import {
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
} from "./Startups.styles";

const Startups = () => {
  const [filteredStartups, setFilteredStartups] = useState([]);
  const { auth } = useSelector((state) => state.auth);
  const { dispatchCounter, isLoading, isSuccess, message } = useSelector(
    (state) => state.startup
  );
  const dispatch = useDispatch();
  const { contextHolder, openNotification } = useNotification();
  const startupsCol = collection(db, "startup");
  const startupsQuery = query(startupsCol, where("tbi.uid", "==", auth.uid));

  useEffect(() => {
    if (dispatchCounter === 0) {
      return;
    } else {
      openNotification({
        isSuccess,
        message,
      });
      dispatch(resetStartupDispatchCounter());
    }
  }, [dispatch, dispatchCounter, isSuccess, message, openNotification]);

  useEffect(() => {
    const unsubscribe = onSnapshot(startupsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setFilteredStartups(data);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const onValidation = (validationInfo) => {
    dispatch(approvalStartupAction(validationInfo));
  };

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "Startup Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "Province",
      dataIndex: "province",
      key: "province",
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
      render: (startup) => {
        return (
          <Space size="middle">
            <Popconfirm
              cancelText="No"
              description="Press No to exit."
              okText="Yes"
              onConfirm={() =>
                onValidation({
                  isApprove: true,
                  uid: startup.uid,
                })
              }
              placement="left"
              title="Are you sure you approve this startup?"
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
                  uid: startup.uid,
                })
              }
              placement="left"
              title="Are you sure you disapprove this startup?"
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
        <Table
          columns={columns}
          data={filteredStartups ? filteredStartups : []}
          rowKey="uid"
        />
      )}
    </Container>
  );
};

export default Startups;
