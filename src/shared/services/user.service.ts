import {IContact} from '@shared/interfaces';
import axios from 'axios';

export default class UserService {
    private static url = 'http://localhost:4000/users';
    static loadUsers() {
        return axios.get<IContact[]>(this.url);
    }
    static createUser(request: IContact) {
        return axios.post<IContact>(this.url, request);
    }
    static deleteUser(request: IContact) {
        return axios.delete<IContact>(`${this.url}/${request.id} `);
    }
    static updateUser(request: IContact) {
        return axios.put<IContact>(`${this.url}/${request.id}`, request);
    }
}
