import Container from "../../components/ui/Container";
import ContactContent from "./ContactContent";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7F5F2] py-28"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          left-1/2
          top-20
          h-[420px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-[#D95D39]/20
          blur-[150px]
          pointer-events-none
        "
      />

      <Container>
        <div className="relative grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <ContactContent />

          <ContactLinks />
        </div>
      </Container>
    </section>
  );
};

export default Contact;