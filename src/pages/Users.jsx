import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';

import User from '../components/Users/User';

function Users() {
  const { headerTitle, sortBy, setSortBy, users, setUsers } = useContext(AppContext);

  const [sortByOrder, setSortByOrder] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    switch (sortBy) {
      case 'ID':
        setUsers(
          [...users].sort((a, b) => {
            if (a.id < b.id) return sortByOrder ? -1 : 1;
            if (a.id > b.id) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'Name':
        setUsers(
          [...users].sort((a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return sortByOrder ? -1 : 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'Username':
        setUsers(
          [...users].sort((a, b) => {
            if (a.username.toLowerCase() < b.username.toLowerCase()) return sortByOrder ? -1 : 1;
            if (a.username.toLowerCase() > b.username.toLowerCase()) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'E-mail':
        setUsers(
          [...users].sort((a, b) => {
            if (a.email.toLowerCase() < b.email.toLowerCase()) return sortByOrder ? -1 : 1;
            if (a.email.toLowerCase() > b.email.toLowerCase()) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'Phone':
        setUsers(
          [...users].sort((a, b) => {
            if (a.phone < b.phone) return sortByOrder ? -1 : 1;
            if (a.phone > b.phone) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'Website':
        setUsers(
          [...users].sort((a, b) => {
            if (a.website.toLowerCase() < b.website.toLowerCase()) return sortByOrder ? -1 : 1;
            if (a.website.toLowerCase() > b.website.toLowerCase()) return sortByOrder ? 1 : -1;
          }),
        );
        break;
      case 'Company':
        setUsers(
          [...users].sort((a, b) => {
            if (a.company.name.toLowerCase() < b.company.name.toLowerCase())
              return sortByOrder ? -1 : 1;
            if (a.company.name.toLowerCase() > b.company.name.toLowerCase())
              return sortByOrder ? 1 : -1;
          }),
        );
        break;

      default:
        break;
    }
  }, [sortBy, sortByOrder]);

  return (
    <div className="users">
      <div className="usersTableContainer">
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        {users.filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()))
          .length === 0 ? (
          <div>Users not found</div>
        ) : (
          <>
            <button onClick={() => setSortByOrder(!sortByOrder)}>
              {sortByOrder ? 'Сортировать по убыванию' : 'Сортировать по возрастанию'}
            </button>
            <table className="usersTable">
              <thead>
                <tr className="usersTable__header">
                  {headerTitle.map((title, i) => (
                    <td
                      key={i}
                      className={
                        sortBy === title
                          ? 'usersTable__title usersTable__title-active'
                          : 'usersTable__title'
                      }
                      onClick={() => setSortBy(title)}>
                      {title}
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users
                  .filter((user) => user.name.toLowerCase().includes(searchValue.toLowerCase()))
                  .map((user) => (
                    <User key={user.id} {...user} />
                  ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
}

export default Users;
