import { useState, useEffect } from 'react';

const ConsentModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Verifica se o consentimento já foi dado
    const consent = localStorage.getItem('cookiesConsent');
    if (!consent) {
      setIsModalVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesConsent', 'accepted');
    setIsModalVisible(false);
    // Adicione lógica para ativar cookies e coletar dados aqui
  };

  const handleDecline = () => {
    localStorage.setItem('cookiesConsent', 'declined');
    setIsModalVisible(false);
    // Adicione lógica para desativar cookies e não coletar dados aqui
  };

  if (!isModalVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <button
          onClick={() => setIsModalVisible(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-lg font-bold mb-4">Política de Cookies e Privacidade</h2>
        <p className="mb-4">
          Utilizamos cookies para melhorar sua experiência e personalizar conteúdo. Para mais informações, leia nossa{' '}
          <a href="/politica-de-privacidade" className="text-blue-600 hover:underline">
            Política de Privacidade
          </a>.
        </p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={handleAccept}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Aceitar
          </button>
          <button
            onClick={handleDecline}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Recusar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentModal;
//Usamos cookies opcionais para melhorar sua experiência em nossos sites, como por meio de conexões de mídia social e para exibir publicidade personalizada com base em sua atividade online. Se você rejeitar os cookies opcionais, serão usados somente os cookies necessários para fornecer os serviços. Você pode alterar sua escolha clicando em 'Gerenciar cookies' na parte inferior da página.Política de privacidade Cookies de terceiros