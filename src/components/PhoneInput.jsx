import { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect';

const COUNTRY_CODES = [
  { code: '+91', label: '+91' },
  { code: '+1', label: '+1' },
  { code: '+44', label: '+44' },
  { code: '+971', label: '+971' },
  { code: '+61', label: '+61' },
  { code: '+65', label: '+65' },
  { code: '+966', label: '+966' },
  { code: '+49', label: '+49' },
  { code: '+33', label: '+33' },
  { code: '+974', label: '+974' },
  { code: '+968', label: '+968' },
  { code: '+965', label: '+965' },
  { code: '+973', label: '+973' },
  { code: '+977', label: '+977' },
  { code: '+880', label: '+880' },
  { code: '+94', label: '+94' },
];

export function PhoneInput({ value = '', onChange, required = false, placeholder = '7041457314' }) {
  const parseValue = (val) => {
    if (!val) return { code: '+91', digits: '' };
    const matched = COUNTRY_CODES.find((c) => val.startsWith(c.code));
    if (matched) {
      const rest = val.slice(matched.code.length).replace(/\D/g, '').slice(0, 10);
      return { code: matched.code, digits: rest };
    }
    const rest = val.replace(/\D/g, '').slice(0, 10);
    return { code: '+91', digits: rest };
  };

  const initial = parseValue(value);
  const [selectedCode, setSelectedCode] = useState(initial.code);
  const [digits, setDigits] = useState(initial.digits);

  useEffect(() => {
    const updated = parseValue(value);
    setSelectedCode(updated.code);
    setDigits(updated.digits);
  }, [value]);

  const updateParent = (code, numDigits) => {
    if (!numDigits) {
      onChange('');
    } else {
      onChange(`${code}${numDigits}`);
    }
  };

  const handleInputChange = (e) => {
    // Restrict input strictly to numbers only (digits 0-9)
    const onlyDigits = e.target.value.replace(/\D/g, '').slice(0, 10);
    setDigits(onlyDigits);
    updateParent(selectedCode, onlyDigits);
  };

  const handleKeyDown = (e) => {
    // Allow navigation, deletion, copy/paste, selection
    if (
      [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'
      ].includes(e.key) ||
      e.ctrlKey || e.metaKey
    ) {
      return;
    }
    // Prevent typing non-numeric keys
    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="phone-input-wrapper">
      <CustomSelect
        className="phone-country-custom-select"
        options={COUNTRY_CODES.map((item) => ({ value: item.code, label: item.label }))}
        value={selectedCode}
        onChange={(newCode) => {
          setSelectedCode(newCode);
          updateParent(newCode, digits);
        }}
      />
      <input
        type="tel"
        inputMode="numeric"
        pattern="[0-9]*"
        maxLength={10}
        required={required}
        value={digits}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="phone-number-field"
      />
    </div>
  );
}
