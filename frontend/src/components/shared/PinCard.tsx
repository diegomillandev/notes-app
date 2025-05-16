import { Pin } from "lucide-react";

interface PinCardProps {
  isPinned: boolean;
  onPinNote: () => void;
}

export const PinCard = ({ isPinned, onPinNote }: PinCardProps) => {
  return (
    <Pin
      className={`self-start hover:text-gray-500 cursor-pointer transition duration-300
        ${isPinned ? "text-blue-500 rotate-45" : "text-gray-300"}
        `}
    />
  );
};
