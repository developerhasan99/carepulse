import Link from "next/link";
import Image from "next/image";
import PatientForm from "@/components/forms/patient-form";
import logo from "@/assets/images/Logo.svg";
import onboarding_image from "@/assets/images/onboarding-img.png";

export default function Home() {
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification | Passkey Verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <Image src={logo} alt="CarePulse" className="mb-8" />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              &copy; 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src={onboarding_image}
        alt="Great doctor"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
