import React from 'react';
const WebsiteLayout = React.lazy(()=> import('../components/website-layout'));

const AdminSample = () => {
    return(
        <WebsiteLayout admin={true}>
            Admin Sample
        </WebsiteLayout>
    )
}

export default AdminSample;