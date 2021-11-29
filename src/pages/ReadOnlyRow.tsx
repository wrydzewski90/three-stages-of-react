import {IContact} from '@shared/interfaces';
import React from 'react';
interface IReadOnlyRow {
    handleEditClick(
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
        contacts: IContact,
    ): void;
    contacts: IContact;
    handleDelete(contacts: IContact): void;
}
const ReadOnlyRow = ({contacts, handleEditClick, handleDelete}: IReadOnlyRow) => {
    return (
        <tr>
            <td>{contacts.fullName}</td>
            <td>{contacts.address}</td>
            <td>{contacts.phoneNumber}</td>
            <td>{contacts.email}</td>
            <td>
                <button onClick={(event) => handleEditClick(event, contacts)}>Edit</button>
                <button onClick={() => handleDelete(contacts)}>Delete</button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
