import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Organizations | CheckMate",
  description:
    "Work with CheckMate - API access, community solutions, and strategic partnerships",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="For Organizations"
        description="Interested in working with CheckMate? We offer API access, community solutions, and partnership opportunities. Let us know how we can help."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
