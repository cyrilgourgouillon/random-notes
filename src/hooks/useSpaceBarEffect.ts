import { useEffect } from "react";

export const useSpaceBarEffect = (maFonction: () => void) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
			event.preventDefault();
      if (event.code === 'Space') {
        maFonction();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [maFonction]);
};
