import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import { Table } from "../../../../../components";
import { Container, Count, Link } from "./InnovationHubs.styles";

const InnovationHubs = () => {
  const [data, setData] = useState([]);

  const col = collection(db, "iHub");

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

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Account Associated",
      dataIndex: "accountAssociated",
      key: "accountAssociated",
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
      title: "Manage Profile",
      render: (text) => (
        <Link
          href={`/innovation-hub/${text.slug}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Profile
        </Link>
      ),
    },
  ];

  return (
    <Container>
      <Table columns={columns} data={data} />
    </Container>
  );
};

export default InnovationHubs;
