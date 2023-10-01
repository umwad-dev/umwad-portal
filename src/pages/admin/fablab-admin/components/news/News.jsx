import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { deleteObject, ref } from "firebase/storage";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Modal from "./components/modal/Modal";
import { db, storage } from "../../../../../firebase/firebase.config";
import { PrimaryButton, Spinner, Table } from "../../../../../components";
import {
  AddContainer,
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
  RowContainer,
} from "./News.styles";
import { useNotification } from "../../../../../hooks";

const News = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [type, setType] = useState("add");

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();
  const newsCol = collection(db, "news");
  const newsQuery = query(
    newsCol,
    where("ownerUid", "==", auth.uid),
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(newsQuery, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setNews(data);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const onConfirm = async (data) => {
    try {
      setLoading(true);

      const docRef = doc(db, "news", data.uid);
      const deleteImgRef = ref(storage, data.bannerUrl);

      await deleteObject(deleteImgRef);
      await deleteDoc(docRef);

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully deleted the selected article/news data.",
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
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Position",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Created At",
      render: (data) =>
        data.createdAt
          ? new Date(
              data.createdAt?.seconds * 1000 +
                data.createdAt?.nanoseconds / 100000
            ).toLocaleDateString()
          : new Date(Date.now()).toLocaleDateString(),
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
            title="Are you sure you want to delete the selected article/news?"
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
          <PrimaryButton name="Add New Article/News" onClick={onOpenModal} />
        </AddContainer>
      </RowContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table columns={columns} data={news ? news : []} rowKey="idx" />
      )}
      <Modal
        data={data}
        okText={type === "add" ? "Add" : "Update"}
        onCancel={onCloseModal}
        open={open}
        title="Manage Article/News Details"
        type={type}
      />
    </Container>
  );
};

export default News;
