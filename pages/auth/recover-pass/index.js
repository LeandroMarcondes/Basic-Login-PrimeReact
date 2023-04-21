import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AppConfig from '../../../layout/AppConfig';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { LayoutContext } from '../../../layout/context/layoutcontext';
import { InputText } from 'primereact/inputtext';
import { classNames } from 'primereact/utils';

import { Dialog } from 'primereact/dialog';

const RecoverPassPage = () => {
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const [visible, setVisible] = useState(false);
    const { layoutConfig } = useContext(LayoutContext);

    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    return (
        <>
            <div className={containerClassName}>
                <div className="flex flex-column align-items-center justify-content-center">
                    
                    <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                        <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                            <div className="text-center mb-5">                            
                                <h3 className="text-600 font-medium">Recover Password</h3>
                            </div>

                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <InputText inputid="email1" type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                                
                                <div className="flex align-items-center justify-content-between mb-2 gap-5">
                                    
                                </div>
                                <Button label="Sent reset password" className="w-full p-3 text-xl mb-2" onClick={() => setVisible(true)}></Button>
                                <a className="font-medium no-underline ml-2 text-right cursor-pointer " onClick={() => router.push('/auth/create')} style={{ color: 'var(--primary-color)' }}>
                                    Or Create a New Account
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Dialog header="Reset Password sent" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-2">
                    The steps to reset your password has been sent to your email.
                </p>
                <a className="font-medium no-underline ml-2 text-right cursor-pointer mt--3" onClick={() => router.push('/auth/login')} style={{ color: 'var(--primary-color)' }}>
                    Please, try to Login again 
                </a>
            </Dialog>
        </>
        
    );
};

RecoverPassPage.getLayout = function getLayout(page) {
    return (
        <React.Fragment>
            {page}
        </React.Fragment>
    );
};
export default RecoverPassPage;
