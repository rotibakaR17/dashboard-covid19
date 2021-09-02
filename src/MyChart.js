import { Row, Col } from 'antd';
import { useState, useEffect } from 'react';
import ReactEcharts from  'echarts-for-react' ;


const MyChart = ({datas }) => {
    const [positiv, setPositiv] = useState([0]);
    const [sembuh, setSembuh] = useState([0]);
    const [meninggal, setMeninggal] = useState([0]);
    const [dirawat, setDirawat] = useState([0]);
    const [tanggal, setTanggal] = useState([0]);

    
    useEffect(() => {
        if(datas.length) {
            // console.log(datas);
            let arrPositiv = [];
            let arrSembuh = [];
            let arrMeninggal = [];
            let arrDirawat = [];
            let arrTanggal = [];
            let idx = 0;

            datas.forEach(data => {
                if(idx === 0) {
                    arrPositiv.push(data.positif);
                    arrSembuh.push(data.sembuh);
                    arrMeninggal.push(data.meninggal);
                    // arrDirawat.push(data.dirawat);
                } else {
                    arrPositiv.push(data.positif + arrPositiv[idx - 1]);
                    arrSembuh.push(data.sembuh + arrSembuh[idx - 1]);
                    arrMeninggal.push(data.meninggal + arrMeninggal[idx - 1]);
                    // arrDirawat.push(data.dirawat + arrDirawat[idx - 1]);
                }
                // arrPositiv.push(data.positif_kumulatif);
                // arrSembuh.push(data.sembuh_kumulatif);
                // arrMeninggal.push(data.meninggal_kumulatif);
                arrDirawat.push(data.dirawat_kumulatif);
                arrTanggal.push(data.tanggal.slice(0,10));
                idx += 1; 
            });
            setPositiv(arrPositiv);
            setSembuh(arrSembuh);
            setMeninggal(arrMeninggal);
            setDirawat(arrDirawat);
            setTanggal(arrTanggal);
            
        }
    }, [datas]);


    return (
        <div className="data-chart">
            {datas.length && <Row gutter={[8, 16]}>
                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                subtext: "Data Terdeteksi Positif",
                                textAlign: "left",
                                left: "5%"
                            },    
                            xAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "category" ,
                                data: tanggal
                            },
                            yAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },    
                                type:  "value" 
                            },
                            color: 'rgba(196, 13, 0)',
                            series: [{
                                data: positiv,
                                type: "line",
                                areaStyle: {}
                            }]
                        }}
                        // style={{ height: "80vh", left: 50, top: 50, width: "90vw" }}
                        // opts={{ renderer: "svg" }}
                    /> 
                </Col>
                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                subtext: "Data Pasien Sembuh",
                                textAlign: "left",
                                left: "5%"
                            },
                            xAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "category" ,
                                data: tanggal
                            },
                            yAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "value" 
                            },
                            color: 'rgba(36, 196, 0)',
                            series: [{
                                data: sembuh,
                                type: "line",
                                areaStyle: {}
                            }]
                        }}
                    />
                </Col>

                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                subtext: "Data Pasien Meninggal",
                                textAlign: "left",
                                left: "5%"
                            },
                            xAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "category" ,
                                data: tanggal
                            },
                            yAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "value" 
                            },
                            color: 'rgba(100, 110, 112)',
                            series: [{
                                data: meninggal,
                                type: "line",
                                areaStyle: {}
                            }]
                        }}
                    />
                </Col>
                <Col span={12}>
                    <ReactEcharts
                        option={{
                            title: {
                                subtext: "Data Pasien Dirawat",
                                textAlign: "left",
                                left: "5%"
                            },
                            xAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "category" ,
                                data: tanggal
                            },
                            yAxis: {
                                axisLabel: {
                                    textStyle: { fontSize: 10 }
                                },
                                type:  "value" 
                            },
                            color: 'rgba(0, 163, 196)',
                            series: [{
                                areaStyle: {
                                    opacity: 0.8,
                                },
                                data: dirawat,
                                type: "line",
                                areaStyle: {}
                            }]
                        }}
                    /> 
                </Col>
            </Row> }
        </div>
    );
}
 
export default MyChart;