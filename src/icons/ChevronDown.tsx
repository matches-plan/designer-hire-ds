import { SVGProps } from 'react';

export default function ChevronDown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="13"
      height="8"
      viewBox="0 0 13 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 1L6.5 7L0.500001 0.999999"
        stroke="currentColor"
        stroke-linecap="round"
      />
    </svg>
  );
}
