import React, { useEffect, useState } from "react";
import { QuestionCircleOutlined } from "@ant-design/icons";
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
import Popover from "antd/es/popover";
import Space from "antd/es/space";
import Modal from "./components/modal/Modal";
import { PrimaryButton, Spinner, Table } from "../../../../../components";
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
} from "./Services.styles";
import { useNotification } from "../../../../../hooks";
import { db } from "../../../../../firebase/firebase.config";
import helperImg from "../../../../../assets/helpers/services.webp";

const Services = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [services, setServices] = useState([]);
  const [type, setType] = useState("add");

  const { auth } = useSelector((state) => state.auth);
  const { contextHolder, openNotification } = useNotification();
  const servicesCol = collection(db, "coWorkingSpaceServices");
  const servicesQuery = query(servicesCol, where("ownerUid", "==", auth.uid));

  useEffect(() => {
    const unsubscribe = onSnapshot(servicesQuery, (snapshot) => {
      const data = snapshot.docs.map((doc, idx) => {
        return {
          idx: idx + 1,
          uid: doc.id,
          ...doc.data(),
        };
      });

      setServices(data);
    });

    return () => unsubscribe();
    // eslint-disable-next-line
  }, []);

  const onConfirm = async (data) => {
    try {
      setLoading(true);

      const docRef = doc(db, "coWorkingSpaceServices", data.uid);

      await deleteDoc(docRef);

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully deleted the selected service data.",
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
      title: "Description",
      dataIndex: "description",
      key: "description",
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
            title="Are you sure you want to delete the selected service?"
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
        This section allows you to add services to your main accelerator page.
      </PopText>
      <PopText>The above image is your reference.</PopText>
    </div>
  );

  return (
    <Container>
      {contextHolder}
      <RowContainer>
        <AddContainer>
          <PrimaryButton name="Add New Service" onClick={onOpenModal} />
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
        <Table columns={columns} data={services ? services : []} rowKey="uid" />
      )}
      <Modal
        data={data}
        okText={type === "add" ? "Add" : "Update"}
        onCancel={onCloseModal}
        open={open}
        title="Manage Service Details"
        type={type}
      />
    </Container>
  );
};

export default Services;
