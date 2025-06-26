import { motion } from "framer-motion";
import { skills } from "../../../utils/constant"

const AboutModalContent = ({ darkMode }) => {
  return (
    <motion.div
      className="space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Profile Section */}
      <motion.div
        className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div
          className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
          whileHover={{ scale: 1.05, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/Teodoro_Profile.png"
            alt="Your profile"
            className="w-full h-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.div>

        <div className="text-center sm:text-left flex-1">
          <motion.h3
            className={`text-xl sm:text-2xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Dan Vincent Teodoro
          </motion.h3>

          <motion.p
            className={`text-sm sm:text-base font-medium ${darkMode ? "text-indigo-400" : "text-indigo-600"}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Web Developer | UI Designer
          </motion.p>

          <motion.div
            className="mt-4 flex justify-center sm:justify-start space-x-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            {[
              { href: "https://github.com/your-username", icon: "fab fa-github" },
              { href: "https://www.linkedin.com/in/dan-vincent-teodoro/", icon: "fab fa-linkedin" },
              { href: "mailto:vincentgteodoro@gmail.com", icon: "fas fa-envelope" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 ${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-black"}`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <i className={`${social.icon} text-xl`}></i>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Divider */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <div
          className="absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div
            className={`w-full border-t ${darkMode ? "border-gray-700" : "border-gray-200"}`}
          />
        </div>
        <div className="relative flex justify-center">
          <span
            className={`px-4 ${darkMode ? "bg-gray-900" : "bg-white"} text-sm ${darkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            My Journey
          </span>
        </div>
      </motion.div>

      {/* Bio sections with staggered entrance */}
      <motion.div
        className="space-y-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {[
          "Hi, I'm Dan Vincent Teodoro, a web developer passionate about building intuitive and impactful digital solutions. I craft user-friendly applications that deliver seamless experiences and solve real-world problems.",
          "My expertise lies in front-end development with React and Vite, complemented by strong back-end skills with PHP. I leverage Tailwind CSS to create responsive, modern designs that look great on any device.",
          "I'm a graduating student of the Polytechnic University of the Philippines, pursuing a degree in Information Technology. I continuously expand my skills through platforms like FreeCodeCamp and Udemy, always staying current with industry trends."
        ].map((text, index) => (
          <motion.p
            key={index}
            className={`${darkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-base`}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 }
            }}
          >
            {text}
          </motion.p>
        ))}

        <motion.div
          className={`p-4 rounded-lg ${darkMode ? "bg-gray-800" : "bg-indigo-50"} ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            show: { opacity: 1, scale: 1 }
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

      {/* Experience and Education Tabs with enhanced animations */}
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className={`border-b ${darkMode ? "border-gray-700" : "border-gray-200"}`}>
          <nav className="-mb-px flex space-x-6" aria-label="Tabs">
            {["Experience", "Education", "Skills"].map((tab, index) => (
              <motion.button
                key={tab}
                className={`whitespace-nowrap py-2 px-1 border-b-2 font-medium text-sm transition-all duration-300 ${index === 0
                  ? darkMode
                    ? "border-indigo-400 text-indigo-400"
                    : "border-indigo-600 text-indigo-600"
                  : darkMode
                    ? "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {tab}
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Experience Content with timeline animations */}
        <motion.div
          className="py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-2 top-0 bottom-0 w-0.5 ${darkMode ? "bg-gray-700" : "bg-gray-200"}`} />

            <ul className="space-y-8">
              {[
                {
                  title: "Intern - Highly Succeed Inc.",
                  date: "2025",
                  subtitle: "Unleash Web Portal - User Management System",
                  tasks: [
                    "Developed responsive user interfaces with React and Vite",
                    "Implemented user management system with role-based permissions",
                    "Collaborated with backend team on API integration",
                    "Optimized application performance for better user experience"
                  ]
                },
                {
                  title: "Web Developer - Capstone Project",
                  date: "2024",
                  subtitle: "Veterinary Record Management System",
                  tasks: [
                    "Built backend systems using PHP and MySQL",
                    "Designed database schema for veterinary records",
                    "Implemented user authentication and authorization",
                    "Created reports and analytics dashboard for data visualization"
                  ]
                }
              ].map((experience, index) => (
                <motion.li
                  key={index}
                  className="relative pl-10"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 + index * 0.2 }}
                >
                  {/* Animated timeline dot */}
                  <motion.div
                    className={`absolute left-0 top-1 h-4 w-4 rounded-full border-2 ${darkMode
                      ? "border-indigo-400 bg-gray-900"
                      : "border-indigo-600 bg-white"
                      }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.8 + index * 0.2 }}
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Content */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <motion.h4
                        className={`font-semibold text-lg ${darkMode ? "text-gray-200" : "text-gray-900"}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1.9 + index * 0.2 }}
                      >
                        {experience.title}
                      </motion.h4>
                      <motion.span
                        className={`text-sm font-medium ${darkMode ? "text-gray-400" : "text-gray-500"}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 2.0 + index * 0.2 }}
                      >
                        {experience.date}
                      </motion.span>
                    </div>

                    <motion.p
                      className={`text-sm font-medium ${darkMode ? "text-indigo-400" : "text-indigo-600"} mb-3`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.1 + index * 0.2 }}
                    >
                      {experience.subtitle}
                    </motion.p>

                    <motion.ul
                      className={`list-disc pl-5 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"} space-y-1`}
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 0.1,
                            delayChildren: 2.2 + index * 0.2
                          }
                        }
                      }}
                      initial="hidden"
                      animate="show"
                    >
                      {experience.tasks.map((task, taskIndex) => (
                        <motion.li
                          key={taskIndex}
                          variants={{
                            hidden: { opacity: 0, x: -10 },
                            show: { opacity: 1, x: 0 }
                          }}
                        >
                          {task}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
      >
        <h3
          className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"} mb-6`}
        >
          My Skills
        </h3>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 2.7
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          {[
            { title: "Frontend", skills: skills.frontend, color: "indigo" },
            { title: "Backend", skills: skills.backend, color: "purple" },
            { title: "Tools", skills: skills.tools, color: "emerald" }
          ].map((category, index) => (
            <motion.div
              key={category.title}
              className={`p-6 rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} shadow-sm ${darkMode ? "ring-1 ring-gray-700" : "ring-1 ring-gray-200"
                } hover:shadow-lg transition-all duration-300`}
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 }
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
              }}
            >
              <motion.h4
                className={`text-lg font-semibold mb-4 text-${category.color}-${darkMode ? '400' : '600'}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2.9 + index * 0.1 }}
              >
                {category.title}
              </motion.h4>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 3.0 + index * 0.1
                    }
                  }
                }}
                initial="hidden"
                animate="show"
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    className={`px-3 py-1.5 rounded-md text-sm transition-all duration-300 hover:scale-105 ${darkMode
                      ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      show: { opacity: 1, scale: 1 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Call to Action */}
      <motion.div
        className={`p-8 rounded-lg text-center relative overflow-hidden ${darkMode
          ? "bg-gradient-to-br from-indigo-900 to-purple-900"
          : "bg-gradient-to-br from-indigo-50 to-purple-50"
          }`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 3.5 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full opacity-10"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            backgroundImage: `radial-gradient(circle, ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
              } 1px, transparent 1px)`,
            backgroundSize: "20px 20px",
          }}
        />

        <motion.h3
          className={`text-xl font-bold mb-3 ${darkMode ? "text-white" : "text-gray-900"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.7 }}
        >
          Interested in working together?
        </motion.h3>

        <motion.p
          className={`mb-6 text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3.8 }}
        >
          I'm currently available for freelance projects and job opportunities.
        </motion.p>

        <motion.a
          href="#contact"
          className={`inline-flex items-center px-8 py-3 rounded-lg text-base font-medium ${darkMode
            ? "bg-indigo-500 text-white hover:bg-indigo-400"
            : "bg-indigo-600 text-white hover:bg-indigo-500"
            } transition-all duration-300 shadow-lg hover:shadow-xl`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 3.9 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -3px rgba(0, 0, 0, 0.1)"
          }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
          <motion.svg
            className="ml-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </motion.svg>
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default AboutModalContent;