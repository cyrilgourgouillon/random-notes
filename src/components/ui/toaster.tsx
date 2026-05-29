import { Portal, Toast, Toaster } from '@chakra-ui/react';
import { toaster } from './toaster-store';

export const AppToaster = () => (
  <Portal>
    <Toaster toaster={toaster}>
      {(toast) => (
        <Toast.Root>
          <Toast.Indicator />
          <Toast.Title>{toast.title}</Toast.Title>
          {toast.description && <Toast.Description>{toast.description}</Toast.Description>}
        </Toast.Root>
      )}
    </Toaster>
  </Portal>
);
