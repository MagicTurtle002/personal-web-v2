import { motion } from "framer-motion";

const introTexts = [
  "Hi, I'm Dan Vincent Teodoro, a web developer passionate about building intuitive and impactful digital solutions. I craft user-friendly applications that deliver seamless experiences and solve real-world problems.",
  "My expertise lies in front-end development with React and Vite, complemented by strong back-end skills with PHP. I leverage Tailwind CSS to create responsive, modern designs that look great on any device.",
  "I'm a graduating student of the Polytechnic University of the Philippines, pursuing a degree in Information Technology. I continuously expand my skills through platforms like FreeCodeCamp and Udemy, always staying current with industry trends."
];

const AboutIntro = ({ darkMode }) => {
  return (
    <motion.div
      className="space-y-4"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      initial="hidden"
      animate="show"
    >
      {introTexts.map((text, index) => (
        <motion.p
          key={index}
          className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-base`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            show: { opacity: 1, y: 0 },
          }}
        >
          {text}
        </motion.p>
      ))}

      <motion.div
        className={`p-4 rounded-lg ${darkMode ? "bg-gray-800 text-gray-300" : "bg-indigo-50 text-gray-700"}`}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          show: { opacity: 1, scale: 1 },
        }}
        whileHover={{ scale: 1.02 }}
      >
        <p className="leading-relaxed">
          <span className="font-medium">Currently:</span> Interning at
          Highly Succeed Inc., where I'm part of the development team
          working on the Unleash web portal, building features that
          enhance user experience and streamline operations.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default AboutIntro;