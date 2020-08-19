import React, { useState, useRef } from 'react'
import { Collapse, Row, Col, Table, Button, Space } from 'antd'
import { CloseCircleOutlined } from '@ant-design/icons'
import ProTable from '@ant-design/pro-table'
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout'
import { Link } from 'umi'

const { Panel } = Collapse

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, { name }) => {
      return (
        <Link
          to={{
            pathname: '/list/mail-detail',
            search: `?sort=${name}`,
            state: { id: name },
          }}
        >
          {name}
        </Link>
      )
    },
  },
  {
    title: 'Chinese Score',
    dataIndex: 'chinese',
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
  },
  {
    title: 'English Score',
    dataIndex: 'english',
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: 'Jim Green',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: 'Joe Black',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: 'Jim Red',
    chinese: 88,
    math: 99,
    english: 89,
  },
]

function callback(key) {
  console.log(key)
}
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra)
}

const text = `
  it can be found as a welcome guest in many households across the world.
`
const getHeader = () => (
  <Row>
    <Col span={3}>收件组1：</Col>
    <Col span={11}>申购V2邮件组（ID：5）</Col>
    <Col span={10}>收件人总数：5</Col>
  </Row>
)

const showBtnGroups = () => {
  const [state, setState] = useState('detail')
  const BtnGroups =
    state === 'edit' ? (
      <>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          size="small"
          type="primary"
        >
          添加收件组
        </Button>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          size="small"
          type="primary"
        >
          保存
        </Button>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
          size="small"
          type="primary"
        >
          取消
        </Button>
      </>
    ) : (
      <Button
        style={{ display: 'inline', marginBottom: 10, size: '12px' }}
        size="small"
        type="primary"
      >
        编辑
      </Button>
    )
  return BtnGroups
}

const Detail = () => {
  const [showP1, cgShowP1] = useState(true)
  const [showP2, cgShowP2] = useState(true)
  const [showP3, cgShowP3] = useState(true)
  const deletePanel = (panKey) => {
    console.log('panKey', panKey)
    return (
      <CloseCircleOutlined
        onClick={(event) => {
          event.stopPropagation()
          switch (panKey) {
            case '1':
              cgShowP1(false)
              break
            case '2':
              cgShowP2(false)
              break
            case '3':
              cgShowP3(false)
              break
            default:
              break
          }
        }}
      />
    )
  }
  return (
    <PageContainer>
      <Row>
        <Col span={4}>邮件主题：</Col>
        <Col span={7}>申购V2信息</Col>
        <Col span={7}>收件人总数：5</Col>
        <Col span={6}>{showBtnGroups()}</Col>
      </Row>
      <Collapse
        accordion
        defaultActiveKey={['1']}
        expandIconPosition="right"
        onChange={callback}
      >
        {showP1 && (
          <Panel header={getHeader()} key="1" extra={deletePanel('1')}>
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
        {showP2 && (
          <Panel header={getHeader()} key="2" extra={deletePanel('2')}>
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
        {showP3 && (
          <Panel header={getHeader()} key="3" extra={deletePanel('3')}>
            <Row>
              <Col span={2} />
              <Col span={16}>
                <ProTable
                  columns={columns}
                  size="small"
                  bordered
                  options={false}
                  search={false}
                  dataSource={data}
                  onChange={onChange}
                />
              </Col>
              <Col span={6} />
            </Row>
          </Panel>
        )}
      </Collapse>
    </PageContainer>
  )
}
export default Detail
