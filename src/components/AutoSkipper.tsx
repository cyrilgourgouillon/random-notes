import { AbsoluteCenter, Box, ButtonGroup, IconButton, Separator } from '@chakra-ui/react';
import { Speed, speeds } from '../config';
import { getSpeedColor, getSpeedIcon } from '../services';
import { useSpeedContext } from '../hooks';
import { toaster } from './ui/toaster-store';

export const AutoSkipper = () => {
  const { speed, setCurrentSpeed } = useSpeedContext();

  const triggerToast = (skipDuration: Speed) => {
    toaster.create({
      title: `Auto skip every ${skipDuration / 1000}"`,
      type: 'success',
      duration: 1000,
    });
  };

  return (
    <>
      <Box position="relative" padding="2">
        <Separator />
        <AbsoluteCenter bg="white" px="4">
          Auto skipper
        </AbsoluteCenter>
      </Box>
      <Box display="flex" justifyContent="center" width="100%">
        <ButtonGroup attached>
          {speeds.map((s, i) => {
            const isSelected = speed === s;

            return (
              <IconButton
                key={i}
                aria-label="minus"
                aria-pressed={isSelected}
                onClick={() => {
                  if (isSelected) {
                    setCurrentSpeed(undefined);
                  } else {
                    triggerToast(s);
                    setCurrentSpeed(s);
                  }
                }}
                variant={isSelected ? 'solid' : 'outline'}
                colorPalette={getSpeedColor(s)}
              >
                {getSpeedIcon(s)}
              </IconButton>
            );
          })}
        </ButtonGroup>
      </Box>
    </>
  );
};
