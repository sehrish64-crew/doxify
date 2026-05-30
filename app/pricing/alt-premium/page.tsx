'use client';

import { useState } from 'react';
import { ShieldCheck, CreditCard, CheckCircle2 } from 'lucide-react';

export default function PricingCheckout() {
  const [checked, setChecked] = useState(false);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0B1223] p-6">

      <div className="w-full max-w-md">

        {/* Glow */}
        <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

        {/* CARD */}
        <div className="relative bg-[#0F1A2E] border border-white/10 rounded-[28px] shadow-2xl overflow-hidden">

          {/* HEADER */}
          <div className="text-center px-8 pt-10 pb-6">

            <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-r from-[#5B5CEB] to-[#14B8E6] flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-7 h-7 text-white" />
            </div>

            <h1 className="mt-4 text-2xl font-bold text-white">
              Secure Checkout
            </h1>

            <p className="text-sm text-slate-400 mt-1">
              One-time payment
            </p>

            <span className="mt-4 inline-block text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-blue-300 border border-white/10">
              PREMIUM PLAN
            </span>

          </div>

          {/* ORDER SUMMARY */}
          <div className="px-8">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">

              <h2 className="font-semibold text-white mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-slate-400">Package</span>
                  <span className="text-white font-medium">PREMIUM PLAN</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-slate-400">Tax</span>
                  <span className="text-white">$0.00</span>
                </div>

                <div className="border-t border-white/10 pt-3 flex justify-between items-center">

                  <span className="text-white font-semibold">
                    Total
                  </span>

                  <span className="text-2xl font-bold text-[#14B8E6]">
                    £90.00
                  </span>

                </div>

              </div>
            </div>
          </div>

          {/* FEATURES */}
          {/* <div className="px-8 mt-6 space-y-3">

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Unlimited PDF Processing
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              Priority Support
            </div>

            <div className="flex items-center gap-3 text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              No Daily Upload Limits
            </div>

          </div> */}

          {/* CHECKBOX */}
          <div className="px-8 mt-6">

            <label className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition cursor-pointer">

              <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mt-1 w-5 h-5 accent-[#14B8E6]"
              />

              <div className="text-sm leading-relaxed">

                <p className="font-medium text-white">
                  Agreement required
                </p>

                <p className="text-slate-400 text-xs mt-1">
                 I confirm that all information is accurate. I understand that if I am not satisfied, I will first contact support before requesting a chargeback. After payment, your report will be sent to your email within 1-2 hours. If not received, please check your spam or junk folder.
                </p>

              </div>

            </label>

          </div>

          {/* CTA */}
          <div className="px-8 mt-6 pb-8">

            <button
              disabled={!checked}
              className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition shadow-lg
              ${
                checked
                  ? 'bg-gradient-to-r from-[#5B5CEB] to-[#14B8E6] hover:opacity-90'
                  : 'bg-white/10 text-slate-500 cursor-not-allowed'
              }`}
            >
              <CreditCard size={18} />
              Proceed to Payment
            </button>

            <p className="text-center text-xs text-slate-500 mt-4">
              🔒 Secure Payments by Mollie | Digital Reports by Doxsify
            </p>

          </div>

        </div>
      </div>

    </main>
  );
}