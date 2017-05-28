import React, { PropTypes } from 'react';
import style from './style.css';

const SearchBar = props => (
    <div className={style.root}>
        <input type="text" className={style.input} onChange={e => props.updateText(e.target.value)} />
        <button className={style.button} onClick={props.click}>{props.name}</button>
    </div>
);

SearchBar.PropTypes = {
    updateText: PropTypes.func,
    name: PropTypes.string,
    click: PropTypes.func,
};

export default SearchBar;
