import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export function EmailVerification({ onNext }: Props) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const inputs = Array(6).fill(0);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      
      if (value && index < 5) {
        const nextInput = document.getElementById(`code-${index + 1}`);
        nextInput?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
        <Mail className="w-8 h-8 text-blue-600" />
      </div>
      
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Check your email</h2>
      <p className="text-gray-600 mb-8">
        We've sent a verification code to your email address
      </p>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="flex gap-2 mb-8 justify-center">
          {inputs.map((_, index) => (
            <input
              key={index}
              id={`code-${index}`}
              type="text"
              maxLength={1}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={code[index]}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          ))}
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <span>Verify Email</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <p className="mt-6 text-sm text-gray-600">
          Didn't receive the code? <button type="button" className="text-blue-600 hover:text-blue-700">Resend</button>
        </p>
      </form>
    </div>
  );
}