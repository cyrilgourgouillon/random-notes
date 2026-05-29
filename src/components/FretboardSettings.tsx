import { Button, ButtonGroup, IconButton, Popover } from '@chakra-ui/react';
import { FaGuitar } from 'react-icons/fa';
import { MdBuild, MdNumbers } from 'react-icons/md';

type FretboardSettingsProps = {
  showStringLabels: boolean;
  showFretNumbers: boolean;
  toggleStringLabels: () => void;
  toggleFretNumbers: () => void;
};

export const FretboardSettings = ({
  showStringLabels,
  showFretNumbers,
  toggleStringLabels,
  toggleFretNumbers,
}: FretboardSettingsProps) => {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <IconButton aria-label="settings">
          <MdBuild />
        </IconButton>
      </Popover.Trigger>
      <Popover.Positioner>
        <Popover.Content width="350px">
          <Popover.Arrow />
          <Popover.Body>
            <ButtonGroup variant="outline" className="flex flex-row items-stretch justify-stretch w-full">
              <Button
                className="grow"
                variant={showStringLabels ? 'outline' : 'subtle'}
                gap={2}
                onClick={toggleStringLabels}
              >
                <FaGuitar />
                String labels
              </Button>
              <Button
                className="grow"
                variant={showFretNumbers ? 'outline' : 'subtle'}
                gap={2}
                onClick={toggleFretNumbers}
              >
                <MdNumbers />
                Fret numbers
              </Button>
            </ButtonGroup>
          </Popover.Body>
        </Popover.Content>
      </Popover.Positioner>
    </Popover.Root>
  );
};
