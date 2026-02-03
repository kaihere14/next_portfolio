import axios from "axios";
import { Code, Cpu, GitBranch, Layers } from "lucide-react";

export const stats = [
  {
    label: "Projects Shipped",
    value: "8+",
    icon: Layers,
  },
  {
    label: "GitHub Commits",
    value: "900+",
    icon: GitBranch,
  },
  {
    label: "Technologies",
    value: "12+",
    icon: Cpu,
  },
  {
    label: "Lines of Code",
    value: "15k+",
    icon: Code,
  },
];

export const Stats = async () => {
  try {
    const token = process.env.GITHUB_PATH || null;
    if (!token) {
      console.log("No token found");
      return;
    }

    const res = await axios.post(
      "https://api.github.com/graphql",
      {
        query: `query { user(login: "kaihere14") { contributionsCollection { totalCommitContributions } } }`,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    const total =
      res?.data?.data?.user?.contributionsCollection?.totalCommitContributions;

    stats[1].value = total != null ? String(total) : "900+";
  } catch (err) {
    console.error("GitHub fetch failed:", err);
  }
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 font-bold opacity-60 sm:grid-cols-3 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col items-start gap-2 rounded-2xl border-2 p-4"
        >
          <stat.icon className="text-black dark:text-white" />
          <span>{stat.value}</span>
          <span className="text-xs">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};
