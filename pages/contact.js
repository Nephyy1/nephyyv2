import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="max-w-xl mx-auto text-center">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display text-4xl font-bold mb-4 text-lightest-slate"
      >
        <span className="text-cyan font-mono text-2xl mr-2">03.</span>
        Hubungi Saya
      </motion.h2>
      <div className="w-24 h-px bg-lightest-navy mx-auto mb-8"></div>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-slate mb-12"
      >
        Saat ini saya terbuka untuk peluang baru. Jika Anda memiliki pertanyaan atau hanya ingin menyapa, jangan ragu untuk mengirim pesan.
      </motion.p>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <a
          href="mailto:emailanda@contoh.com"
          className="text-cyan border border-cyan rounded px-12 py-4 font-mono text-lg hover:bg-cyan/10 transition-colors duration-300"
        >
          Kirim Pesan
        </a>
      </motion.div>
    </section>
  );
}
