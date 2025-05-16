import { EllipsisVertical, Pencil, Trash2 } from "lucide-react";
import { PinCard } from "../shared/PinCard";

interface NoteCardProps {
  title: string;
  date: string;
  content: string;
  tags: string[];
  isPinned: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onPinNote: () => void;
}

export const NoteCard = ({
  title,
  date,
  content,
  tags,
  isPinned,
  onEdit,
  onDelete,
  onPinNote,
}: NoteCardProps) => {
  return (
    <div className="flex flex-col gap-2 p-4 rounded shadow-sm bg-white justify-between">
      <div className="flex items-center justify-between">
        <div className="">
          <h6 className="text-sm font-medium">{title}</h6>
        </div>
        <PinCard isPinned={isPinned} onPinNote={onPinNote} />
      </div>

      <p className="text-xs text-slate-500 truncate">{content}</p>

      <div className="">
        <div className="text-xs text-slate-500">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block bg-gray-100  text-xs font-medium mr-2 px-2.5 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-3 border-t border-gray-200 pt-2">
          <p className="text-xs text-slate-400">{date}</p>

          <div className="relative group">
            <div className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-100 cursor-pointer text-gray-400 dark:text-gray-500">
              <EllipsisVertical />
            </div>
            <div className="absolute hidden group-hover:block bg-white border border-gray-200 rounded right-0">
              <button
                onClick={onEdit}
                className="text-sm text-slate-500 flex items-center gap-1 hover:bg-gray-100 rounded w-full p-2 cursor-pointer hover:text-green-500"
              >
                <Pencil size={22} />
                Edit
              </button>
              <button
                onClick={onDelete}
                className="text-sm text-slate-500 flex items-center gap-1 hover:bg-gray-100 rounded w-full p-2 cursor-pointer hover:text-red-600"
              >
                <Trash2 size={22} />
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
