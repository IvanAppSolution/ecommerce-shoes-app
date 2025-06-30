import React from 'react';
import { User } from 'utils/types'; // Adjust the import path as necessary

const AuthContext = React.createContext<User | null>(null);

export default AuthContext;
