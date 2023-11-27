import { ButtonGroup, IconButton, useToast } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Speed, speeds } from '../config';
import { getSpeedColor, getSpeedIcon } from '../services';

export const AutoSkipper = ({ onSkip }: { onSkip: () => void }) => {
  const toast = useToast();
  const [speed, setSpeed] = useState<Speed | undefined>(undefined);

  useEffect(() => {
    if (speed) {
      const skipInterval = setInterval(() => {
        onSkip();
      }, speed);

      return () => clearInterval(skipInterval);
    }
  }, [onSkip, speed]);

  const triggerToast = (skipDuration: Speed) => {
    toast({
      title: `Auto skip every ${skipDuration / 1000}"`,
      status: 'info',
      duration: 1000,
    });
  };

  return (
    <>
      <ButtonGroup isAttached className='flex justify-center'>
        {speeds.map((s, i) => (
          <IconButton
            key={i}
            aria-label="minus"
            icon={getSpeedIcon(s)}
            onClick={() => {
              if (speed === s) {
                setSpeed(undefined);
              } else {
                triggerToast(s);
                setSpeed(s);
              }
            }}
            variant={'outline'}
            isActive={speed === s}
            colorScheme={getSpeedColor(s)}
          />
        ))}
      </ButtonGroup>
    </>
  );
};