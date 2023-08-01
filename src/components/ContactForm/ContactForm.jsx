import PropTypes from "prop-types";
import { Component } from 'react';
import { Form, Label, Input, Button } from './ContactForm.styled';


export class ContactForm extends Component{
    state = {
        name: '',
        number: ''
    }
 
    inputChange = event => {        
    const { name } = event.currentTarget;
    this.setState({ [name]: event.currentTarget.value });
    }

    dataSubmit = event =>{
        event.preventDefault();
      
        this.props.formSubmit(this.state);
        this.reset();
    }
    
    reset = () => {
        this.setState({ name: '', number: '' });
    }
    
    render() {
        return (
            <Form onSubmit={this.dataSubmit}>
            <Label> Name
              <Input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.inputChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
            </Label>
            <Label> Number
              <Input
                type="tel"
                name="number"
                value={this.state.number}
                onChange={this.inputChange}
                pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </Label>
            <Button type='submit'>Add contact</Button>
          </Form>
        )
    }

}

ContactForm.propTypes = {
    onSubmit: PropTypes.func,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    pattern: PropTypes.string,
    title: PropTypes.string,
    required: PropTypes.bool,
}