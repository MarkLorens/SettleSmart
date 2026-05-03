export default function SuccessDialogue({ isOpen, onClose, dialogueMessage }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-[90%] text-center animate-fadeIn">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Thank You!
                </h2>

                <p className="text-gray-600 mb-6">
                    {dialogueMessage}
                </p>

                <button
                    onClick={onClose}
                    className="px-6 py-3 bg-blue text-white rounded-xl hover:opacity-90 transition-all cursor-pointer"
                >
                    Close
                </button>
            </div>
        </div>
    );
}