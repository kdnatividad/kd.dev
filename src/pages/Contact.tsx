import { useState } from "react";
import { Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to a backend/email service
  };

  return (
    <main className="flex flex-col gap-8 py-7">
      <h1 className="font-calistoga text-4xl sm:text-5xl">contact me.</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Email row */}
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-colors text-sm"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-colors text-sm"
          />
        </div>

        {/* Message */}
        <textarea
          name="message"
          placeholder="Drop a note with any website feedback or career opportunities, or just say hi. Where are you from? 😊"
          value={form.message}
          onChange={handleChange}
          required
          rows={6}
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 transition-colors text-sm resize-none"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          Send Message
          <Send size={15} />
        </button>

        <p className="text-xs text-gray-400 dark:text-gray-500">
          By submitting this form, I agree to the{" "}
          <a href="/privacy-policy" className="font-semibold text-gray-600 dark:text-gray-300 hover:underline">
            privacy policy.
          </a>
        </p>
      </form>
    </main>
  );
};

export default Contact;
