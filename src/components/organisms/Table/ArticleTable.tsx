import { useRouter } from 'next/router';

import { PlusOutlined } from '@ant-design/icons';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/articles/getArticles';
import { Button, Col, Row, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getArticleTableColumns } from './ArticleTable.columns';
import { ArticleTableProps } from './ArticleTable.types';

const ArticleTable: ArticleTableProps = ({ accessToken }) => {
  const router = useRouter();

  const [articles, setArticles] = useState([] as Array<IArticle>);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState('');

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(
    ['getArticles', page, search],
    () => getArticles({ page: page, perPage: 10, search: search }, accessToken),
    {
      retry: false,
    }
  );

  useEffect(() => {
    if (articlesData) {
      const { data, meta } = articlesData;

      setPage(meta.page);
      setPerPage(meta.perPage);
      setTotal(meta.total);

      setArticles(data);
    }
  }, [articlesData]);

  const handleSearch = (value: string) => {
    setSearch(value);
  };

  const handleCreate = () => {
    router.push('/articles/create');
  };

  const columns = getArticleTableColumns(router, accessToken, refetch);

  return (
    <>
      <Row className="mb-3">
        <Col span={8}>
          <Search placeholder="Search here..." allowClear size="large" onSearch={handleSearch} />
        </Col>
        <Col flex="auto"></Col>
        <Col span={8}>
          <div className="float-right">
            <Button type="primary" size="large" icon={<PlusOutlined />} onClick={handleCreate}>
              New Event
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={[...articles]}
        scroll={{ x: 1300 }}
        pagination={{
          current: page,
          pageSize: perPage,
          total: total,
          onChange(page, pageSize) {
            setPage(page);
            setPerPage(pageSize);
          },
        }}
        loading={isFetching}
      />
    </>
  );
};

export default ArticleTable;
