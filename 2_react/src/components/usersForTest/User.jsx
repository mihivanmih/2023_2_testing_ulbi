import React from 'react';

const User = ({user, onDelete}) => {
    return (
        <div>
            {user.name}
            <button id="user-delete" className={'user-del'} onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
};

export default User;