import React, { useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import Popconfirm from "antd/es/popconfirm";
import Space from "antd/es/space";
import Tag from "antd/es/tag";
import { db } from "../../../../../firebase/firebase.config";
import { Spinner, Table } from "../../../../../components";
import {
  Container,
  Count,
  Link,
  LoadingContainer,
  RemoveLink,
  ViewLink,
} from "./FeaturedNews.styles";
import { useNotification } from "../../../../../hooks";

const FeaturedNews = () => {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  const { contextHolder, openNotification } = useNotification();
  const newsCol = collection(db, "news");
  const newsQuery = query(newsCol, orderBy("createdAt", "desc"));

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

  const onFeatureConfirm = async (data, featured) => {
    if (data.featured === featured) {
      return openNotification({
        isSuccess: false,
        message: `This post has already been ${
          featured ? "featured." : "unfeatured."
        }`,
      });
    }

    try {
      setLoading(true);

      const docRef = doc(db, "news", data.uid);

      await updateDoc(docRef, {
        featured,
      });

      setLoading(false);

      openNotification({
        isSuccess: true,
        message: "Successfully updated the selected news/article data.",
      });
    } catch (err) {
      setLoading(false);
      openNotification({ isSuccess: false, message: "Something went wrong." });
    }
  };

  const columns = [
    {
      title: "ID",
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
      title: "Featured",
      dataIndex: "featured",
      key: "featured",
      render: (featured) => (
        <Tag color={featured ? "green" : "volcano"}>
          {featured ? "Yes" : "No"}
        </Tag>
      ),
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
      title: "View",
      render: (text) => (
        <ViewLink
          href={`/news-and-articles/${text.slug}`}
          rel="noopener noreferrer"
          target="_blank"
        >
          View Post
        </ViewLink>
      ),
    },
    {
      title: "Manage",
      render: (info) => (
        <Space size="middle">
          <Popconfirm
            cancelText="No"
            description="Press No to exit."
            okText="Yes"
            onConfirm={() => onFeatureConfirm(info, true)}
            placement="left"
            title="Are you sure you want to feature this post?"
          >
            <Link>Feature Post</Link>
          </Popconfirm>
          <Popconfirm
            cancelText="No"
            description="Press No to exit."
            okText="Yes"
            onConfirm={() => onFeatureConfirm(info, false)}
            placement="left"
            title="Are you sure you want to unfeature this post?"
          >
            <RemoveLink>Unfeature Post</RemoveLink>
          </Popconfirm>
        </Space>
      ),
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
        <Table columns={columns} data={news ? news : []} rowKey="idx" />
      )}
    </Container>
  );
};

export default FeaturedNews;
