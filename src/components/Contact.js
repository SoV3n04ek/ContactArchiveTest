import { Link } from 'react-router-dom';

export const Contact = (props) => (
    <tr>
        <td>{props.contact.name}</td>
        <td>{props.contact.number}</td>
        <td>{props.contact.note}</td>         
        <td>
            <button onClick={() => props.deleteContact(props.contact._id)}
                className="btn btn-sm btn-danger" style={{width: '80px', paddingBottom: '5px'}}
            >
                Delete
            </button>
        </td>
    </tr>
);

// TODO: add edit
        