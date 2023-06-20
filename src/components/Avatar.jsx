import React from "react";

export default function Avatar({image, isNew}) {
    return (
        <div class="avatar">
            <img className="photo" src={image} alt='avatar' />
            {isNew && <span className="new">New</span>}
        </div>
    );
}