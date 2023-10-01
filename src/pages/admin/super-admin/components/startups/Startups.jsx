import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../../../../firebase/firebase.config";
import { Table } from "../../../../../components";
import { Affiliate, Container, Count, Link } from "./Startups.styles";

const Startups = () => {
  const [data, setData] = useState([]);

  const col = collection(db, "startup");

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
      title: "Business Name",
      dataIndex: "businessName",
      key: "businessName",
    },
    {
      title: "TBI Affiliated",
      render: (text) => <Affiliate>{text.tbi.tbiName}</Affiliate>,
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
      title: "Manage Profile",
      render: (text) => (
        <Link
          href={`/startup/${text.slug}`}
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

export default Startups;
