import { useState } from 'react';

const YourComponent = () => {
    const [previewURL, setPreviewURL] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewURL(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewURL(null);
        }
    };

    return (
        <div></div>
    );
};

export default YourComponent;
