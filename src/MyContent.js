import { Layout } from 'antd';
import { Button } from 'antd';
import { useState, useEffect } from 'react';

import './MyContent.css'
import MyDate from './MyDate';
import MyChart from './MyChart';

const { Header, Content, Footer } = Layout;


const MyContent = () => {

    const [datas, setDatas] = useState(null);
    const [numOfDatas, setNumOfDatas] = useState(null)

    useEffect(() => {
        fetch('https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian')
            .then(res => {
                return res.json();
            })
            .then(data => {
                // console.log(data);
                setDatas(data);
                setNumOfDatas(data.length);
            })
    }, []);
    
    const clickAllDatas = ( ) => {
        setNumOfDatas(datas.length);
    }

    const clickSixMonth = ( ) => {
        setNumOfDatas(181);
    }

    const clickLastMonth = ( ) => {
        setNumOfDatas(31);
    }

    return (
        <Layout>
            <Header className="header">
                <div className="logo" >
                    <h1> Dashboard Covid-19 </h1>
                </div> 
            </Header>
            <Content style={{ padding: '50px' }}> 
                <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}> 
                        <div className="filterButton">
                            <Button onClick = {clickAllDatas} >Data Keseluruhan</Button>
                            <Button onClick = {clickSixMonth} >Data 6 Bulan Terakhir</Button>
                            <Button onClick = {clickLastMonth} >Data 30 Hari Terakhir</Button> 
                        </div>
                        {datas && <MyChart datas={datas.filter((data) => datas.length - datas.indexOf(data) <= numOfDatas)}/>} 
                    </Content>
                </Layout>
            </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}
 
export default MyContent;