import React, { useState, useEffect, useRef } from 'react';


function WishForm(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });
        setInput('');
    };


    return (
        <form onSubmit={handleSubmit} className='wish-form'>
            {props.edit ? (
                <>
                    <input
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='wish-input edit'
                    />
                    <button onClick={handleSubmit} className='wish-button edit'>
                        Update
          </button>
                </>
            ) : (
                    <>
                        <input
                            placeholder='Add your wish for New Year'
                            value={input}
                            onChange={handleChange}
                            name='text'
                            className='wish-input'
                            ref={inputRef}
                        />
                        <button onClick={handleSubmit} className='wish-button'>
                            Add your wish
          </button>
                    </>
                )}
        </form>
    );
}

export default WishForm;
