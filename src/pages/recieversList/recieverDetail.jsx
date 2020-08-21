import React, { useState, useRef } from 'react'
import {
  Collapse,
  Row,
  Col,
  Table,
  Button,
  Space,
  Tooltip,
  PageHeader,
} from 'antd'
import {
  PageContainer,
  FooterToolbar,
  PageHeaderWrapper,
} from '@ant-design/pro-layout'
import ProTable from '@ant-design/pro-table'
import { CloseCircleOutlined } from '@ant-design/icons'
import { Link } from 'umi'
import TableModal from './components/TableModal'

const { Panel } = Collapse
const columns = [
  {
    title: '收件组名',
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
    title: '收件人姓名',
    dataIndex: 'chinese',
  },
  {
    title: '收件邮箱',
    dataIndex: 'math',
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

const addReciveList = () => {}

const onCancel = () => {}

const text = `
  it can be found as a welcome guest in many households across the world.
`
const getHeader = () => (
  <Row>
    <Col span={3}>收件组1：</Col>
    <Col span={11}>申购V2邮件组（ID：5）</Col>
    <Col span={7}>收件人总数：5</Col>
    <Col span={3}>
      <Button
        type="text"
        style={{ position: 'absolute', right: -90, top: -7, zIndex: 10000 }}
        onClick={(e) => {
          e.stopPropagation()
        }}
        icon={<CloseCircleOutlined style={{ fontSize: 30 }} />}
      />
    </Col>
  </Row>
)

const showBtnGroups = () => {
  const [state, setState] = useState('detail')
  const BtnGroups =
    state === 'edit' ? (
      <>
        <Button
          style={{ display: 'inline', marginBottom: 10, size: '12px' }}
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
        type="primary"
        onClick={() => {
          handleModalVisible(true)
        }}
      >
        添加收件组
      </Button>
    )
  return BtnGroups
}
const Detail = () => {
  const [modalVisible, handleModalVisible] = useState(false)
  return (
    <PageHeaderWrapper>
      <TableModal
        modalVisible={/* modalVisible */ true}
        onCancel={() => {
          handleModalVisible(false)
        }}
      >
        <ProTable
          columns={columns}
          size="small"
          bordered
          options={false}
          search={{ collapsed: false, collapseRender: () => false }}
          dataSource={data}
          onChange={onChange}
          rowSelection={{}}
          tableAlertRender={false}
        />
      </TableModal>
    </PageHeaderWrapper>
  )
}
export default Detail
