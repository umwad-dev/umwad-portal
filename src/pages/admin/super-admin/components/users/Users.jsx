import React, { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import Tag from "antd/es/tag";
import { db } from "../../../../../firebase/firebase.config";
import { Table } from "../../../../../components";
import { Container, Count } from "./Users.styles";

const Users = () => {
  const [data, setData] = useState([]);

  const col = collection(db, "users");
  const dataQuery = query(col, where("type", "!=", 9));

  useEffect(() => {
    const unsubscribe = onSnapshot(dataQuery, (snapshot) => {
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
      title: "Display Name",
      dataIndex: "displayName",
      key: "displayName",
    },
    {
      title: "Registration Type",
      render: ({ type }) => {
        if (type === 1) {
          return <Tag color="cyan">Startup</Tag>;
        } else if (type === 2) {
          return <Tag color="green">TBI</Tag>;
        } else if (type === 3) {
          return <Tag color="red">Accelerator</Tag>;
        } else if (type === 4) {
          return <Tag color="blue">iHub</Tag>;
        } else if (type === 5) {
          return <Tag color="lime">Co-working Space</Tag>;
        } else if (type === 6) {
          return <Tag color="purple">Fab-Lab</Tag>;
        } else if (type === 7) {
          return <Tag color="lime">Food Innovation Center</Tag>;
        }
      },
    },
  ];

  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
};

export default Users;
