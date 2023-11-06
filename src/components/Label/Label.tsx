import { theme } from '../../theme/theme';

interface LabelProps {
  title: string;
  required?: boolean;
  optionString?: string;
  description?: string;
}

export default function Label({
  title,
  required,
  optionString,
  description,
}: LabelProps) {
  return (
    <div className="flex flex-col w-full">
      <div className="flex gap-1 items-center font-bold">
        <div className={`${theme.text.body1}  text-gray-90`}>{title}</div>
        <div
          className={`${theme.text.caption} ${
            required ? 'text-primary-50' : 'text-gray-50'
          }`}
        >
          {optionString}
        </div>
      </div>
      <div className={`text-gray-60 ${theme.text.caption}`}>{description}</div>
    </div>
  );
}
