import Card from 'react-bootstrap/Card';
import './Create.css';

const Box = (props) => {
    const {color, index, boxArray, setBoxArray} = props;
    // console.log(xySize);

    const handleClick = () => {
        const filterBoxArray = boxArray.filter((item, i) => i !== index);
        setBoxArray(filterBoxArray);
    }

    return (
        <Card style={{backgroundColor: color, height: '100px', width: '100px'}}>
            <button onClick={handleClick}>Delete</button>
        </Card>

    );
}

export default Box;

