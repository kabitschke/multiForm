'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/step1');
  }, [router]);

  return null; // Redireciona automaticamente para /step1
}

