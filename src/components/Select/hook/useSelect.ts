import { MouseEventHandler, useEffect, useRef, useState } from 'react';

export default function useSelect() {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLDivElement | null>(null);
  const toggle: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (e: MouseEvent) => {
    if (node.current && node.current.contains(e.target as Node)) return;
    setIsOpen(false);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return { isOpen, node, toggle };
}
