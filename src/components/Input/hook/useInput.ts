import { useEffect, useRef, useState } from 'react';

export default function useInput() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // focus 이벤트 리스너
    const handleFocus = () => setIsFocused(true);
    // blur 이벤트 리스너
    const handleBlur = () => setIsFocused(false);

    const node = inputRef.current;
    const nodeTextarea = textareaRef.current;
    if (node) {
      node.addEventListener('focus', handleFocus);
      node.addEventListener('blur', handleBlur);
    }
    if (nodeTextarea) {
      nodeTextarea.addEventListener('focus', handleFocus);
      nodeTextarea.addEventListener('blur', handleBlur);
    }

    // 이벤트 리스너 정리
    return () => {
      if (node) {
        node.removeEventListener('focus', handleFocus);
        node.removeEventListener('blur', handleBlur);
      }
      if (nodeTextarea) {
        nodeTextarea.removeEventListener('focus', handleFocus);
        nodeTextarea.removeEventListener('blur', handleBlur);
      }
    };
  }, []);

  return { isFocused, inputRef, textareaRef };
}
