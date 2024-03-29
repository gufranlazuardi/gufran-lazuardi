import ContactForm from "@/components/ContactForm";
import Layout from "@/components/Layout";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const variantsLeft = {
    hidden: { opacity: 0, x: -200 },
    visible: { opacity: 1, x: 0 },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0 },
  };
  const variantsCenter = {
    hidden: { opacity: 0, x: 0 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Layout>
      <div className="flex flex-col sm:px-2 md:px-6 lg:px-8 xl:px-28">
        <motion.div
          className="text-center"
          initial="hidden"
          animate="visible"
          variants={variantsCenter}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-2xl py-2">Want to collaboration?</h1>
        </motion.div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10 pt-10">
          <motion.div
            className=" xl:pr-4 md:pr-4"
            initial="hidden"
            animate="visible"
            variants={variantsLeft}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl">Contact Information</p>
            <p className="text-base py-6">
              Slide into my DMs using the info below if you're vibing with a
              connection, want to cook up some collaborations, or dive into
              potential opportunities :
            </p>
            <div className="flex flex-col gap-8 items-start">
              <div className="flex gap-6 md:text-sm">
                <Mail />
                <p>gufranlazuardi@gmail.com</p>
              </div>
              <div className="flex gap-6 md:text-sm">
                <Linkedin />
                <p>https://www.linkedin.con/in/gufran-lazuardi</p>
              </div>
              <div className="flex gap-6 md:text-sm md:pr-32">
                <Github />
                <p>https://www.github.com/gufranlazuardi</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variantsRight}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
