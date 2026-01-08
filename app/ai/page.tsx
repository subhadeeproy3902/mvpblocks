'use client';

import LoginContainer from '@/components/ai/LoginProcess';
import SendComponent from '@/components/ai/SendComponent';
import SuccessModal from '@/components/ai/Success';
import { useState } from 'react';

export default function Home() {
  const [generating, setGenerating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="bg-background flex h-screen items-center justify-center overflow-hidden">
      <SendComponent
        setGenerating={setGenerating}
        setShowModal={setShowModal}
        loggedIn={loggedIn}
      />
      <LoginContainer
        setLoggedIn={setLoggedIn}
        setShowModal={setShowModal}
        showModal={showModal}
      />
    </div>
  );
}
