import { useStatsAnimation } from "../../../hooks/useStatAnimation";
import Counter from "../../ui/Counter";

const ProjectStats = ({ stats }) => {
  const animate = useStatsAnimation();

  return (
    <div
      id="project-stats"
      className="mb-20 p-12 rounded-3xl bg-gradient-to-br from-slate-800/40 via-slate-900/60 to-slate-800/40 backdrop-blur-xl border border-slate-700/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-violet-500/5 via-transparent to-fuchsia-500/5"></div>

      <div className="relative z-10">
        <h3 className="text-3xl font-bold text-center text-white mb-12">
          Project Impact & Statistics
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="relative">
                <h4 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400 mb-2">
                  <Counter end={stat.value} animate={animate} />
                  {stat.suffix}
                </h4>
                <div className="absolute inset-0 text-5xl md:text-6xl font-black text-violet-500/20 blur-sm">
                  <Counter end={stat.value} animate={animate} />
                  {stat.suffix}
                </div>
              </div>
              <p className="text-slate-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectStats;