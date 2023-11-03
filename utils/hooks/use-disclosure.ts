import { useState } from "react";

export function useDisclosure() {
  const [open, setOpen] = useState(false);

  return {
    open,
    onOpen: () => setOpen(true),
    onClose: () => setOpen(false),
    onToggle: () => setOpen((prev) => !prev),
  };
}
