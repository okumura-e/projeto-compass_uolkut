import { useState } from "react";
import { Container, Select, OptionsList, Option } from "./styles";

import { IoIosArrowDown } from "react-icons/io";

interface CustomSelectProps {
  selected?: string;
  options: string[];
  placeholder: string;
  onSelect: (option: string) => void;
}

const CustomSelect = ({
  selected,
  options,
  placeholder,
  onSelect,
}: CustomSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const handleSelectOption = (text: string) => {
    setIsOpen(false);
    onSelect(text);
  };

  const handleSelectClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <Container>
      <Select
        isOpened={isOpen}
        isHovering={isHovering}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={(e) => handleSelectClick(e)}
      >
        <span>{selected || placeholder}</span>
        <IoIosArrowDown />
      </Select>
      {isOpen && (
        <OptionsList>
          {options.map((text) => (
            <Option
              selected={selected === text}
              onClick={() => handleSelectOption(text)}
              key={text}
            >
              {text}
            </Option>
          ))}
        </OptionsList>
      )}
    </Container>
  );
};

export default CustomSelect;
