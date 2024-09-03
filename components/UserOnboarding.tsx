'use client'

import { useState } from 'react'

// Update the interface to include the username
interface UserOnboardingProps {
  onComplete: (username: string) => void
}

export default function UserOnboarding({ onComplete }: UserOnboardingProps) {
  const [step, setStep] = useState(0)
  const [username, setUsername] = useState('')

  // Define the steps array
  const steps = [
    { title: 'Welcome', description: 'Welcome to our app!' },
    { title: 'Username', description: 'Choose a username' },
    { title: 'Finish', description: 'You\'re all set!' }
  ]

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1)
    } else {
      // Pass the username back to the parent component
      onComplete(username)
    }
  }

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-white">{steps[step].title}</h2>
      <p className="mb-4 text-gray-300">{steps[step].description}</p>
      
      {step === 1 && (
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-2 mb-4 bg-gray-700 text-white rounded"
          placeholder="Enter username"
        />
      )}
      
      <button
        onClick={nextStep}
        disabled={step === 1 && username.trim() === ''}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {step === steps.length - 1 ? 'Finish' : 'Next'}
      </button>
    </div>
  )
}