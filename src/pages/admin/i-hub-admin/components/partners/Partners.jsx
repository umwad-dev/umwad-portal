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
import { deleteObject, ref } from "firebase/storage";
import Popconfirm from "antd/es/popconfirm";
import Popover from "antd/es/popover";
import Space from "antd/es/space";
import Modal from "./components/modal/Modal";
import { db, storage } from "../../../../../firebase/firebase.config";
import { useNotification } from "../../../../../hooks";
import { PrimaryButton, Spinner, Table } from "../../../../../components";
import helperImg from "../../../../../assets/helpers/partners.webp";

import {
  AddContainer,
  Container,
  Count,
  Link,
  LoadingContainer,
  PopText,
  RemoveLink,
  RowContainer,
  RowLogo,
  RowText,
} from "./Partners.styles";
import { QuestionCircleOutlined } from "@ant-design/icons";

const Partners = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [partners, setPartners] = useState([]);
  const [type, setType] = useState("add");

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();
  const partnersCol = collection(db, "iHubPartners");
  const partnersQuery = query(partnersCol, where("ownerUid", "==", auth.uid));

  useEffect(() => {
    const unsubscribe = onSnapshot(partnersQuery, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setPartners(data);
    });

    return () => unsubscribe();

    // eslint-disable-next-line
  }, []);

  const onConfirm = async (data) => {
    try {
      setLoading(true);

      const docRef = doc(db, "iHubPartners", data.uid);
      const deleteImgRef = ref(storage, data.imageUrl);

      await deleteObject(deleteImgRef);
      await deleteDoc(docRef);

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully deleted the selected partner data.",
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
      title: "Partner Name",
      dataIndex: "title",
      key: "title",
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
            title="Are you sure you want to delete the selected partner?"
          >
            <RemoveLink>Remove</RemoveLink>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const popContent = (
    <div>
      <img alt="pop content" src={helperImg} height={180} width={400} />
      <PopText>
        This section allows you to add partners to your main accelerator page.
      </PopText>
      <PopText>The above image is your reference.</PopText>
    </div>
  );

  return (
    <Container>
      {contextHolder}
      <RowContainer>
        <AddContainer>
          <PrimaryButton name="Add New Partner" onClick={onOpenModal} />
        </AddContainer>
        <Popover
          arrow={true}
          content={popContent}
          placement="left"
          title="Quick Illustration"
        >
          <RowLogo>
            <QuestionCircleOutlined twoToneColor="#E46805" />
            <RowText>What is this?</RowText>
          </RowLogo>
        </Popover>
      </RowContainer>
      {loading ? (
        <LoadingContainer>
          <Spinner />
        </LoadingContainer>
      ) : (
        <Table columns={columns} data={partners ? partners : []} rowKey="uid" />
      )}
      <Modal
        data={data}
        okText={type === "add" ? "Add" : "Update"}
        onCancel={onCloseModal}
        open={open}
        title="Manage Partner Details"
        type={type}
      />
    </Container>
  );
};

export default Partners;
