import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Calendar,
  Clock,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How DNS Resolution Works | Arman Thakur",
  description:
    "A comprehensive guide to understanding DNS resolution, from recursive servers to authoritative nameservers. Learn how domain names are translated to IP addresses.",
  keywords: [
    "DNS",
    "Domain Name System",
    "DNS Resolution",
    "Network Architecture",
    "dig command",
    "Root Servers",
    "TLD Servers",
    "Authoritative Nameservers",
  ],
  authors: [{ name: "Arman Thakur" }],
  openGraph: {
    title: "How DNS Resolution Works",
    description:
      "A comprehensive guide to understanding DNS resolution, from recursive servers to authoritative nameservers.",
    type: "article",
    publishedTime: "2026-01-18T00:00:00.000Z",
  },
};

const DnsWorking = () => {
  return (
    <div className="min-h-screen bg-white font-sans transition-colors duration-300 dark:bg-[#161618] dark:text-white">
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-32">
        <header className="mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-200 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-neutral-600 uppercase dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            Network Architecture
          </div>
          <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            How DNS Resolution Works
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-neutral-500">
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} /> January 18, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} strokeWidth={1.5} /> 7 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-16 aspect-video w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <img
            src="https://media.geeksforgeeks.org/wp-content/uploads/20250423151312675710/DNS-SERVER.webp"
            alt="DNS Resolution Overview"
            className="h-full w-full object-cover"
          />
        </div>

        <article className="space-y-16 text-neutral-700 dark:text-neutral-300">
          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What is DNS (Domain Name System)
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                → It is the phonebook of the internet. Humans access info using
                domain names but in the background each site is running on a
                machine which can be hosted on cloud machines or bare metal
                which have a unique public IP which is hard for humans to
                remember, so we use domain names that are easy to read.
              </p>
              <p>
                → For now, in short, we can say DNS translates domain names to
                IP addresses where the site is hosted. But it is not that simple
                (domain name ↔ IP). Before getting the IP, it sends recursive
                requests to different types of servers to finally get the IP.
              </p>
              <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
                <strong>Example:</strong> Recursive server, Root server,
                Authoritative DNS server
                <p className="mt-2 text-sm text-neutral-500">
                  We will discuss more about each server and the entire
                  lifecycle of how a request is processed and resolved.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What is the dig command and when is it used
            </h2>
            <p className="mb-6 text-base leading-relaxed">
              The <strong>dig</strong> command, short for{" "}
              <strong>Domain Information Groper</strong>, is a command-line tool
              used to query DNS servers. It retrieves detailed DNS information
              such as IP addresses (A/AAAA records), mail servers (MX records),
              name servers (NS records), and other DNS record types.
            </p>
            <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
              It&apos;s mainly used for:
            </h3>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Troubleshooting DNS issues",
                "Verifying DNS record propagation",
                "Diagnosing network problems",
                "Querying specific DNS servers",
                "Performing reverse DNS lookups",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-sm dark:border-neutral-800 dark:bg-neutral-900/30"
                >
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Before discussing further, let&apos;s discuss DNS Recursor
            </h2>
            <div className="space-y-6 text-base leading-relaxed">
              <p className="border-l-2 border-neutral-300 pl-5 dark:border-neutral-700">
                → It is the first layer where the server connects to query the
                IP address for the particular domain name. It receives queries
                from a client and first checks if there is already a cache
                present in the recursive server for a previous request.
              </p>
              <p>
                → If not cached, it will start recursively querying the DNS
                hierarchy. First, it will go to the root name server (resolving
                example: &quot;.com&quot;), then to the particular TLD
                nameserver (in this case, .com), and finally the authoritative
                name server, which will finally return the IP and also cache it
                for future queries. Recursive servers do not host any
                records—they just cache to reduce the load on the main servers.
              </p>
            </div>

            <div className="mt-8 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://cdn.umbrella.marketops.umbrella.com/wp-content/uploads/2020/06/16092413/What-is-the-difference-between-Authoritative-and-Recursive-DNS-Nameservers_Cisco-Umbrella-blog_DNS-server-diagram.jpg"
                alt="Authoritative vs Recursive DNS Nameservers Diagram"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-center text-xs text-neutral-400 dark:text-neutral-600">
              Authoritative vs Recursive DNS Nameservers (Source: Cisco
              Umbrella)
            </p>
          </section>

          <section className="rounded-xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-900/40">
            <h2 className="mb-5 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Understanding dig, NS, and Root Name Servers
            </h2>
            <p className="mb-6">
              The <strong>dig</strong> command is a powerful Linux utility used
              to query DNS servers for detailed information about domain names.
            </p>

            <div className="space-y-5">
              <div>
                <h4 className="mb-3 text-sm font-bold tracking-wider text-neutral-600 uppercase dark:text-neutral-400">
                  NS Records (Name Server Records)
                </h4>
                <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">
                  NS records specify the authoritative name servers for a
                  domain.
                </p>
                <div className="rounded-lg border border-neutral-800 bg-neutral-900 p-4 font-mono text-sm text-green-400 dark:bg-black/60">
                  $ dig example.com NS
                </div>
              </div>

              <div className="border-t border-neutral-200 pt-5 dark:border-neutral-800">
                <h4 className="mb-3 font-bold text-neutral-900 dark:text-white">
                  Key Points:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>
                    • If no record type is specified, dig defaults to A records.
                  </li>
                  <li>• The AUTHORITY SECTION contains the NS records.</li>
                  <li>
                    • Use <code>dig +short example.com NS</code> for concise
                    output.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What are Root Name Servers
            </h2>
            <p className="mb-8 text-base leading-relaxed">
              Root servers are the first main step if cache is not in the
              recursor server. You can think of a root server like an index in a
              library that points to different racks of books. There are mainly
              13 logical root name servers, each identified by a unique name and
              IP address.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { val: "13", label: "Logical Servers" },
                { val: "1950+", label: "Instances" },
                { val: "12", label: "Organizations" },
                { val: "ICANN", label: "Maintenance" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-4 text-center dark:border-neutral-800 dark:bg-neutral-900/20"
                >
                  <div className="mb-1 text-xl font-bold text-neutral-900 dark:text-white">
                    {stat.val}
                  </div>
                  <div className="text-[10px] font-bold tracking-widest text-neutral-500 uppercase">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Understanding dig com NS and TLD Name Servers
            </h2>
            <p className="mb-5">
              dig is a command-line tool used to query DNS servers for
              information about domain names.
            </p>
            <div className="space-y-3 rounded-xl border border-neutral-800 bg-neutral-900 p-5 font-mono text-sm">
              <div className="text-green-500">$ dig example.com NS</div>
              <div className="leading-loose text-neutral-500">
                example.com. 3600 IN NS a.iana-servers.net.
                <br />
                example.com. 3600 IN NS b.iana-servers.net.
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What are TLD Name Servers
            </h2>
            <p className="mb-8 text-base leading-relaxed">
              → TLD is like the specific rack of books. This nameserver is the
              next step in the search for a specific IP address and it hosts the
              last portion of the hostname.
            </p>

            <div className="space-y-3">
              <h4 className="mb-3 font-bold text-neutral-900 dark:text-white">
                Example (accessing google.com):
              </h4>
              <ul className="space-y-3">
                {[
                  "A recursive resolver connects this request to a root server",
                  "The root server directs the resolver to the '.com' TLD server",
                  "The '.com' TLD server responds with the authoritative name servers for google.com",
                  "The resolver queries these authoritative name servers to get the IP address",
                ].map((step, i) => (
                  <li
                    key={i}
                    className="flex gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4 dark:border-neutral-800/50 dark:bg-neutral-900/30"
                  >
                    <span className="font-bold text-neutral-400 dark:text-neutral-500">
                      0{i + 1}
                    </span>
                    <span className="text-neutral-600 dark:text-neutral-400">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Authoritative Name Servers
            </h2>
            <div className="space-y-5">
              <p>
                dig google.com NS queries the authoritative name servers for the
                domain by requesting NS records.
              </p>
              <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-800 dark:bg-neutral-900">
                <p className="mb-3 text-xs font-bold tracking-widest text-neutral-500 uppercase">
                  Answer Section
                </p>
                <code className="text-neutral-700 dark:text-neutral-300">
                  ns1.google.com
                  <br />
                  ns2.google.com
                  <br />
                  ns3.google.com
                  <br />
                  ns4.google.com
                </code>
              </div>
              <p className="border-l-2 border-neutral-300 pl-5 text-base leading-relaxed text-neutral-600 dark:border-neutral-700 dark:text-neutral-400">
                The authoritative nameserver is the last stop in the query. It
                returns the IP address for the requested hostname back to the
                DNS Recursor.
              </p>
            </div>
          </section>

          <section className="border-t border-neutral-200 pt-16 dark:border-neutral-800">
            <h2 className="mb-12 text-3xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Final DNS Resolution Cycle
            </h2>

            <div className="mb-12 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://miro.medium.com/1%2A-kCFoSB3-pMwajK6LTJY6Q.jpeg"
                alt="The DNS Lookup Journey"
                className="h-auto w-full"
              />
            </div>
            <div className="space-y-12">
              {[
                {
                  title: "1. Client → DNS Recursor",
                  items: [
                    "User enters a domain name in the browser",
                    "The browser sends the DNS query to the DNS recursor",
                    "The recursor first checks its cache",
                    "If cached, the IP is returned immediately",
                    "If not cached, the recursor starts the recursive resolution process",
                  ],
                },
                {
                  title: "2. DNS Recursor → Root Name Server",
                  items: [
                    "The recursor sends a query to a root name server",
                    "Root servers do not know IP addresses",
                    "They respond with a referral to the appropriate TLD name server",
                  ],
                },
                {
                  title: "3. DNS Recursor → TLD Name Server",
                  items: [
                    "The recursor queries the TLD name server",
                    "The TLD server responds with the authoritative name servers",
                  ],
                },
                {
                  title: "4. DNS Recursor → Authoritative Name Server",
                  items: [
                    "The recursor queries the authoritative name server",
                    "This server holds the actual DNS records",
                    "It returns the final IP address",
                    "The recursor caches the response and sends the IP back to the client",
                  ],
                },
              ].map((flow, i) => (
                <div key={i}>
                  <h3 className="mb-4 flex items-center gap-3 text-xl font-bold text-neutral-900 dark:text-white">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200 text-sm font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                      {i + 1}
                    </span>
                    {flow.title}
                  </h3>
                  <ul className="space-y-3 pl-10 text-neutral-600 dark:text-neutral-400">
                    {flow.items.map((item, idx) => (
                      <li key={idx} className="flex gap-3 leading-relaxed">
                        <ArrowRight
                          size={14}
                          className="mt-1.5 shrink-0 text-neutral-400 dark:text-neutral-600"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </article>

        <footer className="mt-24 flex flex-col items-center justify-between gap-8 border-t border-neutral-200 pt-12 sm:flex-row dark:border-neutral-800">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              Arman Thakur
            </p>
            <p className="text-sm text-neutral-500">
              Computer Science Student • Full Stack Developer
            </p>
          </div>
          <div className="flex gap-6">
            <Link href="https://x.com/ArmanKiyotaka" target="_blank">
              <Twitter
                className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"
                size={20}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/arman-thakur-303b47367"
              target="_blank"
            >
              <Linkedin
                className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"
                size={20}
              />
            </Link>
            <Link href="https://github.com/kaihere14" target="_blank">
              <Github
                className="cursor-pointer text-neutral-400 transition-colors hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-white"
                size={20}
              />
            </Link>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default DnsWorking;
