import {IContact} from '@shared/interfaces';
import {useState} from 'react';
import React from 'react';
interface IEditableRow {
    data: IContact;
    handleSave(data: IContact): void;
}
const EditableRow = ({data, handleSave}: IEditableRow) => {
    const [form, setForm] = useState<IContact>(data);

    const handleOnChange = ({target}: React.ChangeEvent<HTMLInputElement>, attr: string) => {
        const newForm = {
            ...form,
            [attr]: target.value,
        };

        setForm(newForm);
    };

    return (
        <tr>
            <td>
                <input
                    value={form.fullName}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(event, 'fullName')
                    }
                    type="text"
                    placeholder="Enter a name"
                    name="fullName"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={form.address}
                    placeholder="Enter an address"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(event, 'address')
                    }
                    name="address"
                />
            </td>
            <td>
                <input
                    type="text"
                    value={form.phoneNumber}
                    placeholder="Enter a phone number"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(event, 'phoneNumber')
                    }
                    name="phoneNumber"
                />
            </td>
            <td>
                <input
                    type="email"
                    value={form.email}
                    placeholder="Enter an email"
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        handleOnChange(event, 'email')
                    }
                    name="email"
                />
            </td>
            <td>
                <button onClick={() => handleSave(form)}>Save</button>
            </td>
        </tr>
    );
};

export default EditableRow;
