//import { ContactsContext } from 'context/contactsContextProvider';
import { Contact, ButtonDelete } from './ContactItem.styled';
import PropTypes from "prop-types";
//import { useContext } from 'react';
import { FiPhone } from 'react-icons/fi';

export const ContactItem = ({ id, name, number, onDelete }) => {
    //const {  } = useContext(ContactsContext);
    
    return (
        <Contact key={id}>
            <FiPhone />
            <p>{name}: {number}</p>
            <ButtonDelete onClick={() => onDelete(id)} >Delete</ButtonDelete>
        </Contact>
    )
};

ContactItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDelete: PropTypes.func,
}
