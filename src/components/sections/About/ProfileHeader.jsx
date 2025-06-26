import { motion } from "framer-motion";

const ProfileHeader = ({ darkMode }) => {
    return (
        <div
            className="flex flex-col sm:flex-row items-center sm:items-start gap-6"
        >
            <motion.div
                className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
            >
                <img
                    loading="lazy"
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
        </div>
    );
}

export default ProfileHeader;