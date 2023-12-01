import { AbsoluteCenter, Box, ButtonGroup, Divider, IconButton, useToast } from '@chakra-ui/react';
import { Speed, speeds } from '../config';
import { getSpeedColor, getSpeedIcon } from '../services';
import { useSpeedContext } from '../hooks';

export const AutoSkipper = () => {
  const toast = useToast();
  const { speed, setCurrentSpeed } = useSpeedContext();

  const triggerToast = (skipDuration: Speed) => {
    toast({
      title: `Auto skip every ${skipDuration / 1000}"`,
      status: 'info',
      duration: 1000,
    });
  };

  return (
    <>
      <Box position="relative" padding="2">
        <Divider />
        <AbsoluteCenter bg="white" px="4">
          Auto skipper
        </AbsoluteCenter>
      </Box>
      <ButtonGroup isAttached className="flex justify-center">
        {speeds.map((s, i) => (
          <IconButton
            key={i}
            aria-label="minus"
            icon={getSpeedIcon(s)}
            onClick={() => {
              if (speed === s) {
                setCurrentSpeed(undefined);
              } else {
                triggerToast(s);
                setCurrentSpeed(s);
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
