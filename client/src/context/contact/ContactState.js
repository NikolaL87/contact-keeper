import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../types';

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: '1',
        name: 'Test user contact 1',
        email: 'test1@test.com',
        phone: '42142152152115',
        type: 'personal'
      },
      {
        id: '2',
        name: 'Test user contact 2',
        email: 'test2@test.com',
        phone: '42142152152115',
        type: 'personal'
      },
      {
        id: '3',
        name: 'Test user contact 3',
        email: 'test3@test.com',
        phone: '42142152152115',
        type: 'professional'
      }
    ]
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add Contact

  // Delete Contact

  // Set current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}>
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
