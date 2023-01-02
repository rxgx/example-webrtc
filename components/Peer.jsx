import classnames from 'classnames'
import React, { useState } from 'react'
import styles from './Peer.module.css'

let count = 0;

export default function Peer () {
    const text = `P${count=+1}`;

    const [isSelected, setIsSelected] = useState(false);

    console.log('is selected?', isSelected);

    const className = classnames(
        styles.container,
        { 'is-selected': isSelected }
    );

    function handleClick () {
        console.log('clicked!')
        setIsSelected(true);
    }

    return (
        <div className={className} onClick={handleClick}>
            <div className={styles.figure}>
                <span className={styles.label}>
                    {text}
                </span>
            </div>
        </div>
    );
}
