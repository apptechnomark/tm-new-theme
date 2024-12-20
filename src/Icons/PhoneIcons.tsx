import React from "react";

interface PhoneIconPros {
  color: string;
}

const PhoneIcons: React.FC<PhoneIconPros> = ({ color }) => {
  return (
    <svg
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_91829)">
        <path
          d="M7.09395 11.7852L6.83722 12.0419L7.00187 12.3655C8.67025 15.6443 11.357 18.3189 14.6333 19.9975L14.9573 20.1635L15.2148 19.9061L17.6898 17.4311C17.859 17.2619 18.109 17.2076 18.3216 17.2805L18.3216 17.2805L18.3269 17.2823C19.6374 17.7152 21.0516 17.9488 22.5 17.9488C22.8426 17.9488 23.125 18.2311 23.125 18.5738V22.5C23.125 22.8426 22.8426 23.125 22.5 23.125C12.2124 23.125 3.875 14.7876 3.875 4.5C3.875 4.15739 4.15739 3.875 4.5 3.875H8.4375C8.78011 3.875 9.0625 4.15739 9.0625 4.5C9.0625 5.95841 9.29566 7.35999 9.72768 8.66913C9.79668 8.89225 9.74568 9.13346 9.56895 9.3102L7.09395 11.7852Z"
          fill={color}
          stroke={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_626_91829">
          <rect width="22" height="22" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PhoneIcons;
