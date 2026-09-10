"use client";

import { lpkData } from "@/data/mainData";

import React, { useState, useEffect } from "react";
import {
  X,
  CheckCircle2,
  Send,
  Calendar,
  User,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";
import { programs } from "@/data/programs";
import Button from "../ui/Button";

export default function EnrollmentModal({
  isOpen,
  onClose,
  selectedProgramTitle = "",
}) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: selectedProgramTitle || (programs[0] ? programs[0].title : ""),
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Update program jika selectedProgramTitle berubah dari prop
  useEffect(() => {
    if (selectedProgramTitle) {
      setFormData((prev) => ({ ...prev, program: selectedProgramTitle }));
    }
  }, [selectedProgramTitle]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Nomor WhatsApp Admin (Ganti angka ini sesuai nomor admin LPK Delta Masindo)
    const adminPhoneNumber = lpkData.wa;

    // Susun template pesan
    const message = `*Pendaftaran Baru - LPK Delta Masindo*

    *Nama Lengkap:* ${formData.fullName}
    *Email:* ${formData.email}
    *No. WhatsApp/HP:* ${formData.phone}
    *Program Pelatihan:* ${formData.program}
    *Catatan:* ${formData.notes || "-"}`;

    // Encode string pesan agar valid dalam URL
    const encodedMessage = encodeURIComponent(message);

    // Buka WhatsApp di tab baru
    window.open(
      `https://wa.me/${adminPhoneNumber}?text=${encodedMessage}`,
      "_blank",
    );

    // Tampilkan tampilan sukses di modal
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors"
          aria-label="Tutup modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-extrabold text-slate-900">
              Pendaftaran Terkirim!
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Terima kasih, <strong>{formData.fullName || "Peserta"}</strong>.
              Anda sedang diarahkan ke WhatsApp Admin LPK Delta Masindo Academy
              untuk melanjutkan proses konfirmasi.
            </p>
            <div className="pt-4">
              <Button
                variant="primary"
                size="md"
                onClick={handleReset}
                className="w-full"
              >
                Selesai
              </Button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="blue-gradient p-6 text-white">
              <span className="text-xs uppercase font-bold tracking-wider text-sky-200">
                Formulir Pendaftaran
              </span>
              <h3 className="text-xl font-black mt-1">
                Daftar Pelatihan LPK Delta Masindo
              </h3>
              <p className="text-xs text-sky-100 mt-1">
                Isi formulir singkat di bawah untuk memulai konsultasi &
                pendaftaran via WhatsApp.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Nama Lengkap Peserta *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Ahmad Rizky"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                    No. WhatsApp / HP *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxxx"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Program Pelatihan yang Diminati *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <select
                    value={formData.program}
                    onChange={(e) =>
                      setFormData({ ...formData, program: e.target.value })
                    }
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    {programs.map((prog) => (
                      <option key={prog.id} value={prog.title}>
                        {prog.title} ({prog.duration})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                  Catatan Tambahan (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tanyakan hal spesifik tentang jadwal, sertifikasi, dll."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full p-3 text-sm border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={onClose}
                  className="w-1/3"
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  variant="accent"
                  size="md"
                  icon={Send}
                  className="w-2/3"
                >
                  Kirim Pendaftaran
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
