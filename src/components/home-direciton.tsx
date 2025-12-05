import { useEffect } from 'react';

export default function HomeRedirect() {
  useEffect(() => {
    window.location.replace('https://institutoalphadobem.com.br/');
  }, []);

  return (
    <div></div>
  );
}