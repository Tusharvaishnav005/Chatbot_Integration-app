import React, { useState } from 'react';
import { Building2, Globe, FileText, Loader2 } from 'lucide-react';
import { OrganizationData, WebPage } from '../types';

interface Props {
  onNext: () => void;
}

export function OrganizationSetup({ onNext }: Props) {
  const [formData, setFormData] = useState<OrganizationData>({
    companyName: '',
    websiteUrl: '',
    description: '',
  });

  const [isScanning, setIsScanning] = useState(false);
  const [pages, setPages] = useState<WebPage[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsScanning(true);
    
    // Simulate page scanning
    setTimeout(() => {
      setPages([
        { url: '/about', status: 'scraped' },
        { url: '/products', status: 'pending' },
        { url: '/contact', status: 'scraped' },
      ]);
      setIsScanning(false);
    }, 2000);
  };

  const handleContinue = () => {
    onNext();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Organization Setup</h2>
      <p className="text-gray-600 mb-8">Tell us about your business</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              required
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Acme Inc"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Website URL
          </label>
          <div className="relative">
            <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="url"
              required
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://example.com"
              value={formData.websiteUrl}
              onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <div className="relative">
            <FileText className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              required
              className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Tell us about your business..."
              rows={4}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>
        </div>

        {!pages.length && (
          <button
            type="submit"
            disabled={isScanning}
            className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Scanning Website...</span>
              </>
            ) : (
              <span>Scan Website</span>
            )}
          </button>
        )}
      </form>

      {pages.length > 0 && (
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Detected Pages</h3>
          <div className="space-y-3 mb-6">
            {pages.map((page) => (
              <div
                key={page.url}
                className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
              >
                <span className="text-gray-700">{page.url}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  page.status === 'scraped' 
                    ? 'bg-green-100 text-green-800'
                    : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {page.status}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={handleContinue}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Continue to Integration
          </button>
        </div>
      )}
    </div>
  );
}