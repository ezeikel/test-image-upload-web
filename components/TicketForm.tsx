'use client';

import React, { useState } from 'react';

const TicketForm = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('image', 'https://knzpmepg78e58qeq.public.blob.vercel-storage.com/uploads/users/cluvkyrer000b5dtnpkk5z9tf/ticket-front-6FmjRS3rDRXwxhUe1ZDnsWsdeulSbD.webp');

    try {
      const response = await fetch('https://test-form-data-web.vercel.app/api/tickets', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to submit image');
      }

      const result = await response.json();
      console.log('Image submitted successfully:', result);
    } catch (error) {
      console.error('Error submitting image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {loading ? 'Submitting...' : 'Submit Image'}
      </button>
    </div>
  );
};

export default TicketForm;
