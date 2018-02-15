import React from 'react';

const ColorPickerList = ({listActive, colors, selectItem}) => (    
    <div className="panel">
        {listActive ? (
            colors.length > 0 && (
                colors.map((color, id) => (
                    <a className="panel-block" key={id} onClick={() => selectItem(color)}>
                        <span className="panel-icon">
                            <i className="fas fa-book"></i>
                        </span>
                        {color.name}
                    </a>
                ))
            )
        ): null}
    </div>    
);

export default ColorPickerList;
