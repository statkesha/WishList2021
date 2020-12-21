import React, { useState } from 'react';
import WishForm from './WishForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Wish = ({ wishes, completeWish, removeWish, updateWish }) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });
    const submitUpdate = value => {
        updateWish(edit.id, value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <WishForm edit={edit} onSubmit={submitUpdate} />;
    }

    return wishes.map((wish, index) => (
        <div
            className={wish.isComplete ? 'wish-row complete' : 'wish-row'}
            key={index}
        >
            <div key={wish.id} onClick={() => completeWish(wish.id)}>
                {wish.text}
            </div>
            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeWish(wish.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: wish.id, value: wish.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
}

export default Wish;