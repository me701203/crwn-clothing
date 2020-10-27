import React from 'react';
import SignIn from '../../Components/sign-in/sign-in.component';
import SignUp from '../../Components/sign-up/sign-up.component';

import './sign-in-and-sign-out.styles.scss';

const SignInAndSignOut = () => {
    return(
        <div className='sign-in-and-sign-out'>
            <SignIn />
            <SignUp />
        </div>
    );
}

export default SignInAndSignOut;