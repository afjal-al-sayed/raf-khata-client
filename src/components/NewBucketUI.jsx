import { useState, useRef, useEffect } from "react";
import { Plus, ClipboardPaste, X } from "lucide-react";
import Loading from "./Loading";

const colors = [
  "bg-rose-50",
  "bg-blue-50",
  "bg-green-50",
  "bg-yellow-50",
  "bg-purple-50",
  "bg-pink-50",
  "bg-indigo-50",
  "bg-teal-50",
];

export default function NewBucketUI() {
  const [notes, setNotes] = useState([
    {
      id: Date.now(),
      title: "",
      body: "",
      color: colors[Math.floor(Math.random() * colors.length)],
    },
  ]);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const addNote = () => {
    setNotes((prev) => [
      ...prev,
      {
        id: Date.now(),
        title: "",
        body: "",
        color: colors[Math.floor(Math.random() * colors.length)],
      },
    ]);
  };

  const deleteNote = (id) => {
    setNotes((prev) => {
      if (prev.length === 1) return prev;
      return prev.filter((n) => n.id !== id);
    });
  };

  const updateNote = (id, field, value) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, [field]: value } : n))
    );
  };

  const pasteClipboard = async (id) => {
    try {
      const text = await navigator.clipboard.readText();

      setNotes((prev) =>
        prev.map((n) => (n.id === id ? { ...n, body: n.body + text } : n))
      );
    } catch (err) {
      console.error("Clipboard access failed");
    }
  };

  const handleSubmit = async () => {
    const newErrors = {};
    let firstErrorId = null;

    notes.forEach((note) => {
      if (!note.body.trim()) {
        newErrors[note.id] = "Body can't be empty";
        if (!firstErrorId) firstErrorId = note.id;
      }
    });

    setErrors(newErrors);

    if (firstErrorId) {
      const el = document.getElementById(`note-body-${firstErrorId}`);
      el?.focus();
      el?.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    if (Object.keys(newErrors).length > 0) return;

    apiSubmit(notes);
  };

  const apiSubmit = async (notes) => {
    console.log("Submitting notes:", notes);

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Example API call
    // axios.post("/api/notes", notes)
  };

  return (
    <>
      {/* <Loading loading={loading} message="Creating Bucket..." /> */}
      <div
        className={`p-6 max-w-7xl mx-auto ${
          loading ? "pointer-events-none opacity-70" : ""
        }`}
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {notes.map((note, i) => (
            <NoteCard
              key={note.id}
              note={note}
              color={note.color}
              updateNote={updateNote}
              pasteClipboard={pasteClipboard}
              deleteNote={deleteNote}
              error={errors[note.id]}
            />
          ))}

          <AddCard addNote={addNote} />
          <div className="col-span-full flex flex-col items-center gap-4 mt-2">
            <button
              onClick={handleSubmit}
              className="px-8 py-3 rounded-xl bg-indigo-100 hover:bg-indigo-200 text-indigo-700 font-medium transition shadow-sm"
            >
              Create Bucket
            </button>
          </div>
        </div>
        {loading && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
            <div className="flex flex-col items-center gap-5 px-10 py-8 rounded-2xl bg-white/70 shadow-xl backdrop-blur-xl">
              {/* Modern spinner */}
              <div className="relative w-14 h-14">
                <div className="absolute inset-0 rounded-full border-4 border-indigo-200"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-indigo-600 border-r-indigo-600 animate-spin"></div>
              </div>

              <div className="flex flex-col items-center gap-1">
                <p className="text-gray-800 font-semibold">
                  Creating New Bucket
                </p>
                <p className="text-sm text-gray-500 animate-pulse">
                  Please wait...
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

function NoteCard({
  note,
  color,
  updateNote,
  pasteClipboard,
  deleteNote,
  error,
}) {
  const textareaRef = useRef(null);

  useEffect(() => {
    autoResize();
  }, [note.body]);

  const autoResize = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto";
    el.style.height = el.scrollHeight + "px";
  };

  return (
    <div
      className={`relative rounded-2xl shadow-sm p-5 transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${color} ${
        error ? "border-2 border-red-400 animate-shake ring-4 ring-red-100" : ""
      }`}
    >
      <button
        onClick={() => deleteNote(note.id)}
        className="absolute top-2 right-2 p-1 rounded-md hover:bg-black/10 transition"
      >
        <X size={16} />
      </button>

      <input
        type="text"
        placeholder="Note title..."
        value={note.title}
        onChange={(e) => updateNote(note.id, "title", e.target.value)}
        className="w-full font-semibold text-lg bg-transparent outline-none mb-3 placeholder-gray-400"
      />

      <textarea
        ref={textareaRef}
        id={`note-body-${note.id}`}
        placeholder="Write your note..."
        value={note.body}
        onChange={(e) => updateNote(note.id, "body", e.target.value)}
        rows={1}
        className="w-full resize-none bg-transparent outline-none text-gray-700 placeholder-gray-400 overflow-hidden"
      />

      {error && (
        <div className="mt-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          ⚠ {error}
        </div>
      )}

      <div className="flex justify-end mt-4">
        <button
          onClick={() => pasteClipboard(note.id)}
          className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg bg-white/70 hover:bg-white transition"
        >
          <ClipboardPaste size={14} />
          Paste
        </button>
      </div>
    </div>
  );
}

function AddCard({ addNote }) {
  return (
    <button
      onClick={addNote}
      className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 hover:border-gray-400 transition-all p-10 text-gray-500 hover:text-gray-700 hover:scale-[1.02]"
    >
      <Plus size={36} />
      <span className="mt-2 font-medium">Add Note</span>
    </button>
  );
}
