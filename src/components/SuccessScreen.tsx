import React from 'react';
import { PartyPopper, ArrowRight, Share2 } from 'lucide-react';

export function SuccessScreen() {
  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
        <PartyPopper className="w-8 h-8 text-green-600" />
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Congratulations! 🎉
      </h2>
      <p className="text-gray-600 mb-8">
        Your chatbot is now successfully integrated and ready to use
      </p>

      <div className="flex flex-col gap-4 max-w-sm mx-auto mb-8">
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white rounded-lg px-6 py-3 hover:bg-blue-700 transition-colors">
          <span>Explore Admin Panel</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button className="flex items-center justify-center gap-2 bg-green-600 text-white rounded-lg px-6 py-3 hover:bg-green-700 transition-colors">
          <span>Start Talking</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-6 py-3 hover:bg-gray-50 transition-colors">
          <Share2 className="w-4 h-4" />
          <span>Share on Social Media</span>
        </button>
      </div>

      {/* <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-left">
        <h3 className="text-blue-800 font-semibold mb-2">What's Next?</h3>
        <ul className="space-y-2 text-blue-700">
          <li>• Customize your chatbot's appearance</li>
          <li>• Train it with your FAQs</li>
          <li>• Set up automated responses</li>
          <li>• Connect with your team</li>
        </ul>
      </div> */}
    </div>
  );
}