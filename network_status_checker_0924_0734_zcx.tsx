// 代码生成时间: 2025-09-24 07:34:58
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Define the type for the status state.
type NetworkStatus = 'online' | 'offline';

// Define the props type with PropTypes.
const propTypes = {
  onChange: PropTypes.func,
};

// Define default props.
const defaultProps = {
  onChange: () => {},
};

const NetworkStatusChecker = ({ onChange }) => {
  // State to keep track of the network status.
  const [status, setStatus] = useState<NetworkStatus>('offline');

  useEffect(() => {
    // Event listener for online and offline events.
    const handleOnline = () => setStatus('online');
    const handleOffline = () => setStatus('offline');

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup the event listeners on component unmount.
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Invoke the onChange prop when the status changes.
  useEffect(() => {
    onChange(status);
  }, [status, onChange]);

  return (
    <div>
      <p>Network Status: {status}</p>
    </div>
  );
};

NetworkStatusChecker.propTypes = propTypes;
NetworkStatusChecker.defaultProps = defaultProps;

export default NetworkStatusChecker;
