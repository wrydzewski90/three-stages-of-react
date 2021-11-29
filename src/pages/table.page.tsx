import React from 'react';
import './home.page.scss';

import {useState, Fragment} from 'react';
import EditableRow from './EditableRow';
import ReadOnlyRow from './ReadOnlyRow';
import {IContact} from '@shared/interfaces';
import {useEffect} from 'react';
import {useFormik} from 'formik';
import {UserService} from '@shared/services';

const TablePage = () => {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const formik = useFormik({
        initialValues: {
            fullName: '',
            address: '',
            phoneNumber: '',
            email: '',
        },
        onSubmit: (values) => {
            const tmp = [...contacts];
            UserService.createUser(values).then((res) => {
                tmp.push(res.data);
                setContacts(tmp);
            });
        },
    });

    const [editContact, setEditContact] = useState<number | null>(null);

    const handleEditClick = (event: React.MouseEvent<HTMLButtonElement>, contact: IContact) => {
        event.preventDefault();
        if (contact.id) setEditContact(contact.id);
    };

    const handleDelete = (contactId: IContact) => {
        const newContacts = [...contacts];
        UserService.deleteUser(contactId).then(() => {
            const index = contacts.findIndex((contact) => contact.id === contactId.id);

            newContacts.splice(index, 1);
            setContacts(newContacts);
        });
    };

    const handleSave = (contact: IContact) => {
        UserService.updateUser(contact).then(() => loadInitialData());
        setEditContact(null);
    };

    const loadInitialData = () => {
        UserService.loadUsers().then((res) => {
            setContacts(res.data);
        });
    };

    useEffect(() => {
        loadInitialData();
    }, []);

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <Fragment key={contact.id}>
                            {editContact === contact.id ? (
                                <EditableRow data={contact} handleSave={handleSave} />
                            ) : (
                                <ReadOnlyRow
                                    contacts={contact}
                                    handleEditClick={handleEditClick}
                                    handleDelete={handleDelete}
                                />
                            )}
                        </Fragment>
                    ))}
                </tbody>
            </table>

            <h2>Add a contact</h2>

            <form onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.fullName}
                    name="fullName"
                    placeholder="name"
                />
                <input
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    name="address"
                    placeholder="address"
                />
                <input
                    type="text"
                    value={formik.values.phoneNumber}
                    name="phoneNumber"
                    onChange={formik.handleChange}
                    placeholder="phone"
                />
                <input
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    name="email"
                    placeholder="email"
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default TablePage;
