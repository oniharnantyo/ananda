import React from "react";
export const Button = ({ className = "", children, ...rest }) => {
    return (<button className={`py-2 px-4 bg-primary-active hover:bg-green-600 focus:outline-none ring-opacity-75 ring-green-400 focus:ring text-white text-lg ${className}`} {...rest}>
      {children}
    </button>);
};
export const HamButton = ({ className = "", children, ...rest }) => {
    return (<button className={`hover:bg-black-secondary focus:outline-none ring-opacity-75 focus:ring text-white text-lg ${className}`} {...rest}>
      {children}
    </button>);
};
