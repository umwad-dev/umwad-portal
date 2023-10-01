import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Modal from "./components/modal/Modal";
import { PrimaryButton, Spinner, Table } from "../../../../../components";
import {
  AddContainer,
  Container,
  Count,
  IncomeText,
  Link,
  LoadingContainer,
  RemoveLink,
  RowContainer,
} from "./Income.styles";
import { useNotification } from "../../../../../hooks";
import { db } from "../../../../../firebase/firebase.config";

const Income = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [income, setIncome] = useState([]);
  const [type, setType] = useState("add");

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();
  const incomeCol = collection(db, "startupIncome");
  const incomeQuery = query(incomeCol, where("ownerUid", "==", auth.uid));

  useEffect(() => {
    const unsubscribe = onSnapshot(incomeQuery, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setIncome(data);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const onConfirm = async (data) => {
    try {
      setLoading(true);

      const docRef = doc(db, "startupIncome", data.uid);

      await deleteDoc(docRef);

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully deleted the selected income data.",
      });
    } catch (err) {
      setLoading(false);
      openNotification({ isSuccess: false, message: "Something went wrong." });
    }
  };

  const onCloseModal = () => {
    setOpen(false);
    setData(null);
  };
  const onOpenModal = () => {
    setType("add");
    setOpen(true);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "idx",
      key: "idx",
      render: (text) => <Count>{text}</Count>,
    },
    {
      title: "Quarter",
      dataIndex: "quarter",
      key: "quarter",
    },
    {
      title: "Quarterly Gross Income",
      dataIndex: "income",
      key: "income",
      render: (income) => (
        <IncomeText>
          &#8369; {income.toLocaleString("en-US", { maximumFractionDigits: 2 })}
        </IncomeText>
      ),
    },
    {
      title: "Manage",
      render: (info) => (
        <Space size="middle">
          <Link
            onClick={() => {
              setType("update");
              setData(info);
              setOpen(true);
            }}
          >
            Edit
          </Link>
          <Popconfirm
            cancelText="No"
            description="Press No to exit."
            okText="Yes"
            onConfirm={() => onConfirm(info)}
            placement="left"
            title="Are you sure you want to delete the selected gross income?"
          >
            <RemoveLink>Remove</RemoveLink>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Container>
      {contextHolder}
      <RowContainer>
        <AddContainer>
          <PrimaryButton
            name="Add New Quarterly Gross Income"
            onClick={onOpenModal}
          />
        </AddContainer>
      </RowContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table columns={columns} data={income ? income : []} rowKey="uid" />
      )}
      <Modal
        data={data}
        okText={type === "add" ? "Add" : "Update"}
        onCancel={onCloseModal}
        open={open}
        title="Manage Gross Income Details"
        type={type}
      />
    </Container>
  );
};

export default Income;
