import React, { useEffect, useState } from "react";
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import { db } from "../../../../../firebase/firebase.config";
import { Spinner, Table } from "../../../../../components";
import { useNotification } from "../../../../../hooks";
import {
  Container,
  Count,
  LoadingContainer,
  RemoveLink,
} from "./ContactUs.styles";

const ContactUs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const { contextHolder, openNotification } = useNotification();
  const col = collection(db, "contactUs");

  useEffect(() => {
    const unsubscribe = onSnapshot(col, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setData(data);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const onDelete = async ({ uid }) => {
    try {
      setLoading(true);

      const docRef = doc(db, "contactUs", uid);

      await deleteDoc(docRef);

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully deleted the selected data.",
      });
    } catch (err) {
      setLoading(false);
      openNotification({ isSuccess: false, message: "Something went wrong." });
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
    },
    {
      title: "Message",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Manage",
      render: ({ uid }) => {
        return (
          <Space size="middle">
            <Popconfirm
              cancelText="No"
              description="Press No to exit."
              okText="Yes"
              onConfirm={() =>
                onDelete({
                  uid,
                })
              }
              placement="left"
              title="Are you sure you want to remove this message?"
            >
              <RemoveLink>Delete</RemoveLink>
            </Popconfirm>
          </Space>
        );
      },
    },
  ];

  return (
    <Container>
      {contextHolder}
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </Container>
  );
};

export default ContactUs;
