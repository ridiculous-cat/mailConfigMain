import React, { useState, useRef } from 'react';
import { Collapse ,Row, Col, Table, Button, Space} from 'antd';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
const { Panel } = Collapse;
import { Link } from 'umi';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (text, {name}) => {
      return <Link to= {{
      pathname: "/list/mail-detail",
      search: `?sort=${name}`,
      state: { id: name }}}>{name}</Link>
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
];

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
];

function callback(key) {
  console.log(key);
}
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}


const text = `
  it can be found as a welcome guest in many households across the world.
`;
const getHeader=()=>  <Row>
<Col span={3}>收件组1：</Col>
<Col span={11}>申购V2邮件组（ID：5）</Col>
<Col span={10}>收件人总数：5</Col>
</Row>

const showBtnGroups=()=>{
  const [state, setState] = useState('detail');
  const BtnGroups=state ==='edit'?
  <>
  <Button style={{display:"inline",marginBottom:10,size:'12px'}} size='small' type="primary" >添加收件组</Button>
  <Button style={{display:"inline",marginBottom:10,size:'12px'}} size='small' type="primary" >保存</Button>
  <Button style={{display:"inline",marginBottom:10,size:'12px'}} size='small' type="primary" >取消</Button>
  </>:
  <Button style={{display:"inline",marginBottom:10,size:'12px'}} size='small' type="primary" >编辑</Button>
  return BtnGroups
}
const Detail=()=>  
<PageContainer>
  <Row>
<Col span={4}>邮件主题：</Col>
<Col span={7}>申购V2信息</Col>
<Col span={7}>收件人总数：5</Col>
<Col span={6}>{showBtnGroups() }</Col>
</Row>
<Collapse accordion  defaultActiveKey={['1']} onChange={callback}>
<Panel header={ getHeader()} key="1" >
  <Row>
      <Col span={2}></Col>
      <Col span={16}><Table columns={columns} dataSource={data} onChange={onChange} /></Col>
      <Col span={6}></Col>
    </Row>
  
</Panel>
<Panel header={ getHeader()} key="2" >
  <Row>
      <Col span={2}></Col>
      <Col span={16}><Table columns={columns} dataSource={data} onChange={onChange} /></Col>
      <Col span={6}></Col>
    </Row>
</Panel>
<Panel header={ getHeader()} key="3" >
  <Row>
      <Col span={2}></Col>
      <Col span={16}><Table columns={columns} dataSource={data} onChange={onChange} /></Col>
      <Col span={6}></Col>
    </Row>
</Panel>
</Collapse>
</PageContainer>
export default  Detail;