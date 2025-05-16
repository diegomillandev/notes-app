import { Navbar, NoteCard } from "@/components";

export const Home = () => {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-2 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <NoteCard
            title="Note Title"
            date="Abril 1, 2023"
            content="This is a sample note content."
            tags={["tag1", "tag2"]}
            isPinned={false}
            onEdit={() => console.log("Edit Note")}
            onDelete={() => console.log("Delete Note")}
            onPinNote={() => console.log("Pin Note")}
          />
          <NoteCard
            title="Note Title"
            date="Abril 1, 2023"
            content="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            tags={["tag1", "tag2"]}
            isPinned={false}
            onEdit={() => console.log("Edit Note")}
            onDelete={() => console.log("Delete Note")}
            onPinNote={() => console.log("Pin Note")}
          />
          <NoteCard
            title="Note Title"
            date="Abril 1, 2023"
            content="This is a sample note content. This is a sample note content."
            tags={["tag1", "tag2"]}
            isPinned={false}
            onEdit={() => console.log("Edit Note")}
            onDelete={() => console.log("Delete Note")}
            onPinNote={() => console.log("Pin Note")}
          />
        </div>
      </div>
    </>
  );
};
