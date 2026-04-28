"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import Button from "@/components/ui/Button";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

const initialForm: ContactForm = {
  name: "",
  email: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  function updateField(field: keyof ContactForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setError("");
    setSuccess(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please complete all fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess(true);
    setError("");
    setForm(initialForm);
  }

  return (
    <section className="bg-[#f7f4ee] py-24 dark:bg-slate-950" id="contact">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            Contact
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            Send a note about a project or collaboration.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            Send a project idea, collaboration note, or feedback about this
            portfolio. The form simulates submission for the lab exercise.
          </p>
          <div className="mt-8 border-l-4 border-cyan-500 pl-5 text-slate-950 dark:text-white">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
              Email
            </p>
            <a
              className="mt-2 block text-2xl font-black hover:text-cyan-700 dark:hover:text-cyan-300"
              href="mailto:lanceianleanillo@gmail.com"
            >
              lanceianleanillo@gmail.com
            </a>
          </div>
        </div>

        <form
          className="rounded-lg border border-slate-300 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-5">
            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                Name
              </span>
              <input
                className="min-h-12 rounded-lg border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-400/20"
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                value={form.name}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                Email
              </span>
              <input
                className="min-h-12 rounded-lg border border-slate-300 bg-white px-4 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-400/20"
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                type="email"
                value={form.email}
              />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-black text-slate-700 dark:text-slate-200">
                Message
              </span>
              <textarea
                className="min-h-36 resize-none rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:focus:ring-cyan-400/20"
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="Tell me about your project..."
                value={form.message}
              />
            </label>
          </div>

          {error ? (
            <p className="mt-4 rounded-lg bg-red-100 px-4 py-3 text-sm font-bold text-red-700 dark:bg-red-500/15 dark:text-red-200">
              {error}
            </p>
          ) : null}

          {success ? (
            <p className="mt-4 rounded-lg bg-emerald-100 px-4 py-3 text-sm font-bold text-emerald-800 dark:bg-emerald-400/15 dark:text-emerald-200">
              Message sent successfully. This is a simulated lab submission.
            </p>
          ) : null}

          <Button className="mt-6 w-full" type="submit" variant="primary">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
