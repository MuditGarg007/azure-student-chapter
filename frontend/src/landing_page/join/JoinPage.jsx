import ApplicationForm from "./ApplicationForm";
import Benefits from "./Benefits";
import Eligibility from "./Eligibility";
import Process from "./Process";
import Faq from "./Faq";
import Hero from "./Hero";

export default function JoinPage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Eligibility />
      <Process />
      <ApplicationForm />
      <Faq />
    </>
  );
}
