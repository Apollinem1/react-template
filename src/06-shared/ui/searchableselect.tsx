import React, { useState } from "react";

interface SearchableSelectProps {
  options: { label: string; value: string }[];
  setChangeSelect: (selectedValue: any) => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  setChangeSelect,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const selectedOption = options.find((option) => option.label === value);
    if (selectedOption) {
      setChangeSelect(selectedOption);
    }
  };

  return (
    <div
      className="flex flex-col w-full bg-white border border-gray-300 rounded-md p-2 gap-4"
      data-testid="datalist"
    >
      <input
        list="debug-datalist"
        onChange={(e) => handleInputChange(e)}
        value={inputValue}
        data-testid="datalist-input"
      />
      <datalist id="debug-datalist" data-testid="datalist-options">
        {options?.map((option, index) => (
          <option key={index} value={option.value} label={option.label}>
            {option.label}
          </option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchableSelect;
