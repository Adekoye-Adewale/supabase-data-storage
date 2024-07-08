import { useState } from 'react';

const useToggle = (initialState = false) => {
    const [open, setOpen] = useState(initialState);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    return [open, handleToggle];
};

export default useToggle;