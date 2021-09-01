import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';


const MyChart = ({datas }) => {
    const [positiv, setPositiv] = useState(0);
    const [sembuh, setSembuh] = useState(0);
    const [meninggal, setMeninggal] = useState(0);
    const [dirawat, setDirawat] = useState(0);

    // console.log(datas);
    
    useEffect(() => {
        if(datas.length) {
            let firstData = datas[0];
            let lastData = datas[datas.length - 1];
            if(datas.length == 31 || datas.length == 181) {
                setPositiv(lastData.positif_kumulatif - firstData.positif_kumulatif);
                setSembuh(lastData.sembuh_kumulatif - firstData.sembuh_kumulatif);
                setMeninggal(lastData.meninggal_kumulatif - firstData.meninggal_kumulatif);
                setDirawat(lastData.dirawat_kumulatif - firstData.dirawat_kumulatif);
            } else {
                setPositiv(lastData.positif_kumulatif);
                setSembuh(lastData.sembuh_kumulatif);
                setMeninggal(lastData.meninggal_kumulatif);
                setDirawat(lastData.dirawat_kumulatif);
            }
        }
    }, [datas]);


    return (
        <div className="data-chart">
            {datas.length && <Row gutter={[16, 16]}>
                <Col span={12}>
                    <h2>{ positiv }</h2> 
                </Col>
                <Col span={12}>
                    <h2>{ sembuh }</h2>
                </Col>

                <Col span={12}>
                    <h2>{ meninggal }</h2> 
                </Col>
                <Col span={12}>
                    <h2>{ dirawat }</h2> 
                </Col>
            </Row> }
        </div>
    );
}
 
export default MyChart;