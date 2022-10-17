/* eslint-disable tailwindcss/no-custom-classname */
import { PlusOutlined } from '@ant-design/icons';
import { IArticle } from '@domains/article';
import { getArticles } from '@services/articles/getArticles';
import { Button, Col, Row, Space, Table } from 'antd';
import Search from 'antd/lib/input/Search';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { columns } from './ArticleTable.columns';
import { ArticleTableProps } from './ArticleTable.types';

const ArticleTable: ArticleTableProps = ({ accessToken }) => {
  const [articles, setArticles] = useState([] as Array<IArticle>);
  const [loading, setLoading] = useState(true);

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

      setLoading(false);
    }
  }, [articlesData]);

  const onSearch = (value: string) => {
    setSearch(value);
  };

  return (
    <>
      <Row className="mb-3">
        <Col span={8}>
          <Search placeholder="Search here..." allowClear size="large" onSearch={onSearch} />
        </Col>
        <Col flex="auto"></Col>
        <Col span={8}>
          <div className="float-right">
            <Button type="primary" size="large" icon={<PlusOutlined />}>
              New Event
            </Button>
          </div>
        </Col>
      </Row>
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={[...articles]}
        pagination={{
          current: page,
          pageSize: perPage,
          total: total,
          onChange(page, pageSize) {
            setPage(page);
            setPerPage(pageSize);
          },
        }}
        loading={loading}
      />
    </>
  );
};

export default ArticleTable;
