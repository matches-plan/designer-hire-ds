import { InputProps } from '../Input';
import { getBorderColor } from '../../getBorderColor';
import { theme } from '../../../theme/theme';
import Icon from '../../../icons';
import useInput from '../hook/useInput';

interface NormalInputProps extends InputProps {
  error?: string;
  isSuccess?: boolean;
  description?: string;
  disabled?: boolean;
}

export default function NormalInput({
  placeholder,
  fullWidth,
  value,
  onChange,
  description,
  error,
  isSuccess,
  disabled,
}: NormalInputProps) {
  const { inputRef, isFocused } = useInput();

  return (
    <div
      className={`flex flex-col items-start gap-1  ${
        fullWidth ? 'w-full' : ''
      } `}
    >
      <div className={`relative flex   ${fullWidth ? 'w-full' : ''} `}>
        <input
          disabled={disabled}
          ref={inputRef}
          className={`${theme.text.body1} ${getBorderColor(
            error,
            isFocused,
            value
          )}  ${
            fullWidth ? 'w-full' : ''
          }  py-4 px-3 disabled:bg-background disabled:text-gray-50 rounded-lg border outline-none placeholder:text-gray-50 text-gray-90 caret-primary-50`}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          value={value ?? ''}
        />

        {value && isFocused && (
          <div
            className={`w-4 h-4 absolute right-[15px] top-5 cursor-pointer text-gray-50 bg-gray-20 rounded-full p-1`}
            onMouseDown={(e) => {
              e.preventDefault();
              onChange('');
              inputRef.current?.focus();
            }}
          >
            <Icon.Close className="w-2 h-2" />
          </div>
        )}
        {isSuccess && !isFocused && (
          <Icon.Check
            className={`w-3 h-3 absolute right-[15px] top-[22px] text-primary-50 `}
          />
        )}
      </div>
      {description && (
        <div className={`${theme.text.caption} text-gray-90`}>
          {description}
        </div>
      )}
      {error && (
        <div className={`${theme.text.caption} text-red-30`}>{error}</div>
      )}
    </div>
  );
}
