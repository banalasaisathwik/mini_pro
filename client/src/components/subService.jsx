// SubServicesPage.jsx
import React from 'react';

const SubServicesPage = ({ match }) => {
    const { serviceId } = match.params; 
    return (
        <div>
            <h2>Sub-Services for Service {serviceId}</h2>
        </div>
    );
};

export default SubServicesPage;
