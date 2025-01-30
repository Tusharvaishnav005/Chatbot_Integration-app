import React, { useState } from 'react';
import { Code2, Mail, CheckCircle2, Copy } from 'lucide-react';

interface Props {
  onNext: () => void;
}

export function Integration({ onNext }: Props) {
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const snippetCode = `<script src="https://cdn.beyondchats.com/widget.js"></script>
<script>
  BeyondChats.init({
    apiKey: "YOUR_API_KEY",
    organization: "YOUR_ORG_ID"
  });
</script>`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(snippetCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleEmailInstructions = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 2000);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Integration</h2>
      <p className="text-gray-600 mb-8">Add the chatbot to your website</p>

      <div className="bg-gray-900 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Code2 className="text-gray-400 w-5 h-5" />
            <span className="text-gray-400">Installation Code</span>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Copy className="w-4 h-4" />
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <pre className="text-gray-300 text-sm overflow-x-auto">
          <code>{snippetCode}</code>
        </pre>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        <button
          onClick={handleEmailInstructions}
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>{emailSent ? 'Instructions Sent!' : 'Email Instructions to Developer'}</span>
        </button>

        <button
          onClick={onNext}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>Test Integration</span>
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-blue-800 font-semibold mb-2">Need help?</h3>
        <p className="text-blue-700 text-sm">
          Our support team is available 24/7 to help you with the integration.
          Contact us at support@beyondchats.com
        </p>
      </div>
    </div>
  );
}