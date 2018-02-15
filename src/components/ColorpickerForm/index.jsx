import React from 'react';

const ColorpickerForm = ({onChange, onFocus, onSubmit, selectedColor}) => (
    <form onSubmit={(e) => onSubmit(e)}>
        <div className="field has-addons">
            <div className="control is-expanded">
                <input
                    className="input" 
                    placeholder="..." 
                    value={selectedColor}
                    onChange={(e) => onChange(e.target.value)}
                    onFocus={onFocus} />
            </div>
            <div className="control">
                <button className="button is-info">
                    Accept
                </button>
            </div>
        </div>    
    </form>
);

export default ColorpickerForm;
