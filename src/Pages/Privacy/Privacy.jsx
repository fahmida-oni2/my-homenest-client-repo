import React from "react";
import { FaEnvelopeOpenText, FaRegEye, FaUserLock } from "react-icons/fa6";
import {
  MdOutlineFactCheck,
  MdOutlineSecurityUpdateGood,
} from "react-icons/md";

const Privacy = () => {
  const lastUpdated = "January 2024";

  return (
    <div className="bg-base-100 min-h-screen pb-20">
      <div className="bg-secondary/50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Privacy <span className="text-primary">Policy</span>
          </h1>
          <p className="text-gray-300 tracking-wide uppercase text-sm">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </div>

      <div className="ml-5 mr-5 mx-auto px-4 -mt-10">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-12 border border-gray-100">
          <section className="space-y-4">
            <div className="flex items-center gap-3 text-secondary">
              <h2 className="text-2xl font-bold">Introduction</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              At <span className="font-semibold text-secondary">HomeNest</span>,
              we value your trust. This policy describes how we handle your
              personal information across our website and mobile applications.
              By using{" "}
              <span className="text-secondary font-medium">HomeNest</span>, you
              consent to the data practices described in this statement.
            </p>
          </section>

          <hr className="border-gray-100" />

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-secondary">
              <FaRegEye className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Information We Collect</h2>
            </div>
            <p className="text-gray-600">
              To provide a seamless real estate experience, we collect:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <MdOutlineFactCheck className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-gray-700">
                  <strong>Contact Details:</strong> Name, phone, and email for
                  property inquiries.
                </span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <MdOutlineFactCheck className="text-primary mt-1 shrink-0" />
                <span className="text-sm text-gray-700">
                  <strong>Usage Data:</strong> Your saved homes, search filters,
                  and favorite neighborhoods.
                </span>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-3 text-secondary">
              <FaUserLock className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Data Protection</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              We employ industry-standard <strong>SSL encryption</strong> to
              protect your data during transmission. Access to personal
              information is strictly limited to HomeNest employees and
              certified agents who need the data to perform their service.
            </p>
          </section>

          <div className="bg-secondary/5 p-6 rounded-xl flex gap-4 items-start border-l-4 border-primary">
            <MdOutlineSecurityUpdateGood className="h-8 w-8 text-primary shrink-0" />
            <div>
              <h3 className="font-bold text-secondary">Policy Updates</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We may revise this policy to reflect changes in legal
                requirements or our services. We recommend checking this page
                periodically to stay informed.
              </p>
            </div>
          </div>

          <footer className="pt-8 border-t border-gray-100 flex flex-col items-center">
            <div className="bg-primary p-3 rounded-full mb-4">
              <FaEnvelopeOpenText className="text-white h-5 w-5" />
            </div>
            <p className="text-gray-500 text-sm text-center">
              Have questions about your data? Reach out to our legal team at:
              <br />
              <a
                href="mailto:privacy@homenest.com"
                className="font-bold text-secondary hover:text-primary transition-colors"
              >
                privacy@homenest.com
              </a>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
