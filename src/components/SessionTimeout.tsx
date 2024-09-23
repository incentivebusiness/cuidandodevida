"use client";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Modal from '@/components/ModalLogout';

const SessionTimeout = () => {
  const { data: session } = useSession(); // Obter dados da sessão
  const [isModalOpen, setModalOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;
  let alertId: NodeJS.Timeout;

  useEffect(() => {
    if (!session) return; // Não faz nada se não há usuário logado

    const handleBeforeUnload = () => {
      console.log("User is leaving, signing out...");
      signOut({ callbackUrl: "/", redirect: false });
    };

    const resetTimeout = () => {
      console.log("Resetting timeout...");
      if (timeoutId) clearTimeout(timeoutId);
      if (alertId) clearTimeout(alertId);

      timeoutId = setTimeout(() => {
        console.log("User inactive for 5 minutes, prompting confirmation...");
        setModalOpen(true); // Abre o modal

        alertId = setTimeout(() => {
          console.log("No response after 2 minutes. Signing out...");
          signOut({ callbackUrl: "/", redirect: false });
        }, 12000); // 2 minutos
      }, 30000); // 5 minutos de inatividade
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    window.addEventListener("mousemove", resetTimeout);
    window.addEventListener("keydown", resetTimeout);
    
    resetTimeout(); // Inicia o timer

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(alertId);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      window.removeEventListener("mousemove", resetTimeout);
      window.removeEventListener("keydown", resetTimeout);
    };
  }, [session]); // Dependência em session

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirm = () => {
    console.log("User is active, remaining logged in.");
    setModalOpen(false);
    clearTimeout(alertId); // Limpa o timer de desconexão
  };

  return (
    <>
      <Modal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        onConfirm={handleConfirm} 
      />
    </>
  );
};

export default SessionTimeout;
