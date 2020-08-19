import React from 'react'
import { PageContainer } from '@ant-design/pro-layout'
import { Card, Alert, Col, Row } from 'antd'

import styles from './Welcome.less'
import { Link } from 'umi'
const { Meta } = Card
const getHeader = () => (
  <Row>
    <Col span={3}>产品经理：</Col>
    <Col span={9}>高惠贤</Col>
    <Col span={3}>启动日期：</Col>
    <Col span={9}>2020/08/03</Col>
  </Row>
)
export default () => (
  <PageContainer>
    <Alert
      message="项目信息"
      description={getHeader()}
      type="info"
      style={{ marginBottom: 20 }}
    />
    <Row gutter={16}>
      <Col span={12}>
        <Link
          to={{
            pathname: '/monitorMailList',
          }}
        >
          {' '}
          <Card title="监控邮件配置" hoverable bordered={false}>
            <Meta title="杨亚辉" description="负责人" />
          </Card>
        </Link>
      </Col>
      <Col span={12}>
        <Link
          to={{
            pathname: '/recieversList',
          }}
        >
          {' '}
          <Card title="收件组管理" hoverable bordered={false}>
            <Meta title="祖清华" description="负责人" />
          </Card>
        </Link>
      </Col>
    </Row>
  </PageContainer>
)
