'use client';

import { useState } from 'react';
import Loader from './Loader';

export default function AppWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  if (loading) return <Loader onFinish={() => setLoading(false)} />;
  return <>{children}</>;
}
