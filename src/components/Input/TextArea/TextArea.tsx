import { theme } from '../../../theme/theme';
import { InputProps } from '../Input';
import { getBorderColor } from '../../getBorderColor';
import useInput from '../hook/useInput';

interface TextAreaProps extends InputProps {
  rows?: number;
}

export default function TextArea({
  value,
  onChange,
  fullWidth,
  placeholder,
  rows = 3,
}: TextAreaProps) {
  const { textareaRef, isFocused } = useInput();

  return (
    <textarea
      rows={rows}
      ref={textareaRef}
      className={`${theme.text.body1} ${getBorderColor(
        undefined,
        isFocused,
        value
      )} ${
        fullWidth ? 'w-full' : 'w-max'
      } resize-none py-4 px-3 disabled:bg-background disabled:text-gray-50 rounded-lg w-full border outline-none placeholder:text-gray-50 text-gray-90 caret-primary-50`}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      value={value ?? ''}
    />
  );
}
