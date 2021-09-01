import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;

const MyDate = () => {
    return (
        <div className = "myDate">
            <Space direction="vertical" size={12}>
                <RangePicker /> 
            </Space> 
        </div>
    );
}
 
export default MyDate;