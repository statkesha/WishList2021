import React, { useState } from 'react';
import WishForm from './WishForm';
import Wish from './Wish';

function WishList() {
    const [wishes, setWishes] = useState([]);

    const addWish = wish => {
        if (!wish.text || /^\s*@/.test(wish.text)) {
            return
        }

        const newWishes = [wish, ...wishes]

        setWishes(newWishes);
    };

    const removeWish = id => {
        const removeArr = [...wishes].filter(wish => wish.id !== id)

        setWishes(removeArr);
    }

    const updateWish = (wishId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }
        setWishes(prev => prev.map(item => (item.id === wishId ? newValue : item))
        );

    }

    const completeWish = id => {
        let updatedWishes = wishes.map(wish => {
            if (wish.id === id) {
                wish.isComplete = !wish.isComplete;
            }
            return wish;
        });
        setWishes(updatedWishes);
    };
    return (
        <div>
            <h1>What's the wishes for New Year?</h1>
            <WishForm onSubmit={addWish} />
            <Wish wishes={wishes}
                completeWish={completeWish}
                removeWish={removeWish}
                updateWish={updateWish} />
        </div>
    )
}

export default WishList
