import React from 'react';
import Transaction from './Transaction';
import UserInformation from './UserInformation';

const Navigation = ({ actualPage }) => {
    console.log('aaaaaaaaaaaa', actualPage)
    return <Transaction/>;
    switch (actualPage) {
        case 'transaction':
            return <Transaction/>;
        case 'userInfo':
            return <UserInformation/>;
        case 'myAccounts':
            return <UserInformation/>;
        case 'favorites':
            return <UserInformation/>;
        case 'history':
            return <UserInformation/>;
        case 'rextieAccounts':
            return <UserInformation/>;
        default:
            return null
    }
    return null;
};

export default Navigation;