import { ButtonGroup, Button, IconButton, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Speed, speeds } from "../config";
import { getSpeedColor, getSpeedIcon } from "../services";

export const AutoSkipper = ({ onSkip }: { onSkip: () => void }) => {
  const toast = useToast();
  const [speed, setSpeed] = useState<Speed | undefined>(undefined);
  const [intervalId, setIntervalId] = useState<number | undefined>();

  useEffect(() => {
    if (speed) {
      const skipInterval = setInterval(() => {
        onSkip();
      }, speed);

      setIntervalId(skipInterval);

      return () => clearInterval(skipInterval);
    }
  }, [onSkip, speed]);

  const handleStopAutoSkipper = () => {
    clearInterval(intervalId);
    setSpeed(undefined);
  };

  const triggerToast = (skipDuration: Speed) => {
    toast({
      title: `Auto-skip every ${skipDuration / 1000} seconds`,
      status: "info",
      duration: 1000,
    });
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached>
        <Button
          className="w-full"
          variant="outline"
          onClick={handleStopAutoSkipper}
          disabled={speed === undefined}
          colorScheme={speed === undefined ? "grey" : "blue"}
        >
          {speed === undefined ? "Auto-skipper" : "Stop"}
        </Button>
				{speeds.map((s, i) => (
					<IconButton
					key={i}
          aria-label="minus"
          icon={getSpeedIcon(s)}
          variant="outline"
          onClick={() => {
            triggerToast(s);
            setSpeed(s);
          }}
          isActive={speed === s}
          colorScheme={speed === s ? getSpeedColor(s) : ""}
        />
				))}
      </ButtonGroup>
    </>
  );
};
