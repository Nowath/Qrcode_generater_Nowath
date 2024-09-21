import React from "react";

function Radio({ value, name, checked, onChange }) {
    return (
        <div className="relative flex justify-center items-center">
            <input
                className="peer/draft z-20 w-4 h-4 opacity-0"
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={(e) => {
                    const val = isNaN(e.target.value)
                        ? e.target.value
                        : Number(e.target.value);
                    onChange(val);
                }}
            />
            <span className=" peer-checked/draft:bg-reds absolute top-0 left-0 w-4 h-4 rounded-full bg-[white] hover:bg-[#afafafee]"></span>
        </div>
    );
}

export default Radio;
