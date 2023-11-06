import { SVGProps } from 'react';

export default function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width="13"
      height="10"
      viewBox="0 0 13 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.90956 9.05554C5.38203 9.58307 4.52057 9.58307 3.99304 9.05554L0.895644 5.95814C0.368119 5.43062 0.368119 4.56915 0.895644 4.04163C1.42317 3.5141 2.28463 3.5141 2.81216 4.04163L4.9513 6.18077L10.1878 0.944228C10.7154 0.416703 11.5768 0.416703 12.1044 0.944228C12.6319 1.47175 12.6319 2.33322 12.1044 2.86074L5.90956 9.05554Z"
        fill="currentColor"
      />
    </svg>
  );
}
