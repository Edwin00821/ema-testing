import React, { useState } from 'react';

import PrivacyNotice  from "./PrivacyNotice/PrivacyNotice";

const TermsAndConditions = () => {
  
    return (
        <div className='font-sans antialiased text-gray-600 min-h-full flex flex-col'>
            <PrivacyNotice />
        </div>
    );
  };
  
  export default TermsAndConditions;
  