import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './Create.css';
import {useState} from 'react';

const Create = (props) => {
    const [color, setColor] = useState("");
    const [size, setSize] = useState('X');
    const { boxArray, setBoxArray } = props;
    const handleSubmit = (e) => {
        e.preventDefault();
        setBoxArray([...boxArray, color]);
        setColor('');
    }
    
    return (
        <Form className="create-form" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Color</Form.Label>
                <Form.Control type="text" value={color} placeholder="Input Color" onChange={(e) => setColor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Size (X by X pixels)</Form.Label>
                <Form.Control type="number"  placeholder="X" />
            </Form.Group>
            <Button type="submit" variant="dark">Add</Button>{' '}
        </Form>
    );
}

export default Create;

