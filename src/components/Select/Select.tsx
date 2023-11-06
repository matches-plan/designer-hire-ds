import useSelect from './hook/useSelect';
import { theme } from '../../theme/theme';
import { getBorderColor } from '../getBorderColor';
import Icon from '../../icons';

interface SelectProps<T = any> {
  index?: number;
  placeholder?: string;
  onChange?: (value: T, index?: number) => void;
  items?: T[];
  render?: (value: T, index?: number) => string;
  error?: string;
}

export default function Select({
  index,
  placeholder,
  onChange,
  items = [],
  render = (value) => value,
  error,
}: SelectProps) {
  const { isOpen, node, toggle } = useSelect();

  const selected =
    index !== undefined && items.length > index ? items[index] : undefined;

  return (
    <div className="flex flex-col gap-1">
      <div ref={node} className={`relative`} onClick={toggle}>
        <div
          className={`cursor-pointer py-4 px-3 gap-4 border rounded-lg flex items-center justify-between ${
            theme.text.body1
          } ${getBorderColor(error, isOpen, index)} ${
            index === undefined ? 'text-gray-50' : 'text-gray-90'
          }`}
        >
          {selected ? render(selected) : placeholder}
          <Icon.ChevronDown className="w-3 text-gray-50" />
        </div>
        {isOpen && (
          <div className="h-52 overflow-x-hidden overflow-y-auto bg-gray-0 absolute left-0 z-10 flex-nowrap rounded-lg border border-gray-20 roudned-lg min-w-full mt-1">
            {items.map((i, index) => (
              <div
                className="cursor-pointer py-4 px-3 hover:bg-background whitespace-nowrap"
                onClick={() => {
                  onChange && onChange(i, index);
                }}
              >
                {render(i)}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && (
        <div className={`${theme.text.caption} text-red-30`}>{error}</div>
      )}
    </div>
  );
}
