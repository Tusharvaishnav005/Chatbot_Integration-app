import React, { useState } from 'react';
import { UserRegistration } from './UserRegistration';
import { EmailVerification } from './EmailVerification';
import { OrganizationSetup } from './OrganizationSetup';
import { Integration } from './Integration';
import { SuccessScreen } from './SuccessScreen';
import { SetupStep } from '../types';
import { ArrowLeft } from 'lucide-react';

export function SetupWizard() {
  const [currentStep, setCurrentStep] = useState<SetupStep>('registration');
  const [progress, setProgress] = useState(25);

  const steps = {
    registration: <UserRegistration onNext={() => setCurrentStep('verification')} />,
    verification: <EmailVerification onNext={() => setCurrentStep('organization')} />,
    organization: <OrganizationSetup onNext={() => setCurrentStep('integration')} />,
    integration: <Integration onNext={() => setCurrentStep('success')} />,
    success: <SuccessScreen />,
  };

  const canGoBack = currentStep !== 'registration' && currentStep !== 'success';

  const handleBack = () => {
    const stepOrder: SetupStep[] = ['registration', 'verification', 'organization', 'integration', 'success'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
      setProgress(Math.max(25, progress - 25));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-4xl mx-auto pt-8 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {canGoBack && (
            <button
              onClick={handleBack}
              className="flex items-center text-gray-600 hover:text-gray-800 mb-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </button>
          )}
          
          <div className="mb-8">
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-2 bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
}