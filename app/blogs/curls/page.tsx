import React from "react";

import { Metadata } from "next";
import Link from "next/link";

import { Calendar, Clock, Github, Linkedin, Twitter } from "lucide-react";

export const metadata: Metadata = {
  title: "What is cURL and How to Use It | Arman Thakur",
  description:
    "A comprehensive guide to understanding cURL, the command-line tool for making HTTP requests. Learn how to test APIs, send data, and debug web services from the terminal.",
  keywords: [
    "cURL",
    "Command Line",
    "HTTP Requests",
    "API Testing",
    "Developer Tools",
    "REST API",
    "POST Request",
    "GET Request",
  ],
  authors: [{ name: "Arman Thakur" }],
  openGraph: {
    title: "What is cURL and How to Use It",
    description:
      "A comprehensive guide to understanding cURL, the command-line tool for making HTTP requests and testing APIs.",
    type: "article",
    publishedTime: "2026-01-18T00:00:00.000Z",
  },
};

const CurlGuide = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white font-sans transition-colors duration-300 dark:bg-[#161618] dark:text-white">
      <main className="relative z-10 mx-auto max-w-3xl px-6 pt-8 pb-32">
        <header className="mb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-neutral-200 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-neutral-600 uppercase dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
            Developer Tools
          </div>
          <h1 className="mb-8 text-4xl leading-tight font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-white">
            What is cURL and How to Use It
          </h1>
          <div className="flex flex-wrap gap-6 text-sm font-medium text-neutral-500">
            <span className="flex items-center gap-2">
              <Calendar size={16} strokeWidth={1.5} /> January 18, 2026
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} strokeWidth={1.5} /> 6 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-16 w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2y8c8YOxNhSdrtc2KdVJh2_e1xO0rvUsNdu2343oCbFxi-Z8r"
            alt="cURL Command Line Tool"
            className="h-full w-full object-cover"
          />
        </div>

        <article className="space-y-16 break-words text-neutral-700 dark:text-neutral-300">
          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              What is cURL (in very simple terms)
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                cURL is a very fundamental tool for communicating with a server.
                It stands for <strong>Client URL</strong> and it is a command
                line tool that basically lets you request and also send the data
                you want directly from the command line.
              </p>
              <p>
                cURL supports almost every type of protocol including HTTP and
                HTTPS. Essentially, curl prints the web response in the
                terminal.
              </p>
              <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-5 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-200">
                <strong>In this article we will have a deep dive into:</strong>
                <ul className="mt-3 space-y-2 text-sm">
                  <li>• Why programmers need cURL</li>
                  <li>• Making your first request using cURL</li>
                  <li>• Understanding request and response</li>
                  <li>• Using cURL to talk to APIs</li>
                  <li>• Common mistakes beginners make with cURL</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Why programmers need cURL
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                Before using cURL, we should understand what was the need of
                cURL or what pain point cURL solved.
              </p>
              <p>
                If you are a developer and you want to test any REST API—what is
                the response type, how the response is formatted, are headers,
                auth, and payload working correctly, is the API valid, how much
                time is it taking to respond—everything related to API testing,
                you would have to specially have different tools and software
                which was a little inconvenient.
              </p>
              <p>
                So cURL was made which lets developers like you and us test any
                API directly from the terminal without any other software tools,
                drastically increasing productivity and performance.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
                Some Usage:
              </h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-neutral-100 dark:bg-neutral-800">
                      <th className="p-4 text-left font-bold">
                        Question while using an API
                      </th>
                      <th className="p-4 text-left font-bold">
                        How cURL helps
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-neutral-900/50">
                    {[
                      [
                        "Is the API valid?",
                        "Faster → Instant requests without GUI overhead",
                      ],
                      [
                        "What is the response type?",
                        "Scriptable → Reusable commands inside scripts",
                      ],
                      [
                        "How is the response formatted?",
                        "Lightweight → No UI, minimal system resources",
                      ],
                      [
                        "What status code does it return?",
                        "Automation-friendly → Easy CI/CD and cron usage",
                      ],
                    ].map(([q, a], i) => (
                      <tr
                        key={i}
                        className="border-t border-neutral-200 dark:border-neutral-800"
                      >
                        <td className="p-4">{q}</td>
                        <td className="p-4 text-neutral-600 dark:text-neutral-400">
                          {a}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 w-full overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
              <img
                src="https://accountgram-production.sfo2.cdn.digitaloceanspaces.com/nubelaco_ghost/2022/12/TLC_Using_cURL_In_5_Actual_Scenarios_Using_cURL.png"
                alt="Using cURL In 5 Actual Scenarios"
                className="h-auto w-full"
              />
            </div>
            <p className="mt-3 text-center text-xs text-neutral-400 dark:text-neutral-600">
              Using cURL In 5 Actual Scenarios
            </p>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Making your first request using cURL
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                The simplest cURL request is a GET request. (You can send almost
                any type of REST API request)
              </p>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900 p-5 font-mono text-sm text-green-400">
                $ curl https://backend.novadrive.space
              </div>

              <p>
                <strong>What happens here:</strong>
              </p>
              <ul className="space-y-2 text-sm">
                <li>• curl sends an HTTP GET request</li>
                <li>• The URL is the API endpoint</li>
                <li>• The response is printed directly in the terminal</li>
              </ul>

              <p>This lets you quickly verify:</p>
              <ul className="space-y-2 text-sm">
                <li>• Whether the API is reachable</li>
                <li>• The response format (JSON, HTML, etc.)</li>
                <li>• The returned data</li>
              </ul>

              <p className="border-l-2 border-neutral-300 pl-5 dark:border-neutral-700">
                That&apos;s your first API request (no browser, no extra tools,
                just the terminal).
              </p>
            </div>

            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
                Sending data with a POST request:
              </h3>
              <div className="overflow-x-auto rounded-xl border border-neutral-800 bg-neutral-900 p-5 font-mono text-sm">
                <pre className="break-all whitespace-pre-wrap text-green-400">
                  {`curl -X POST \\
  -H "Content-Type: application/json" \\
  -d '{"name": "Ba3a", "email": "someMail@gmail.com"}' \\
  https://crud.ba3a.tech/users`}
                </pre>
              </div>

              <div className="mt-6 space-y-3">
                <h4 className="font-bold text-neutral-900 dark:text-white">
                  Explanation:
                </h4>
                <ul className="space-y-3">
                  {[
                    [
                      "-X POST",
                      "Specifies the HTTP method for creating a new resource",
                    ],
                    [
                      '-H "Content-Type: application/json"',
                      "Sets the content type header to indicate JSON data",
                    ],
                    [
                      "-d '{...}'",
                      "Includes the user data in JSON format using the -d flag",
                    ],
                  ].map(([flag, desc], i) => (
                    <li
                      key={i}
                      className="flex flex-col gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:gap-3 dark:border-neutral-800/50 dark:bg-neutral-900/30"
                    >
                      <code className="shrink-0 break-words text-neutral-600 dark:text-neutral-400">
                        {flag}
                      </code>
                      <span className="break-words text-neutral-600 dark:text-neutral-400">
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Understanding Request and Response
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
                <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
                  Request
                </h3>
                <p className="mb-4 text-sm">
                  A request is sent by the client to the server to ask for data
                  or to perform an action.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Sent by client</li>
                  <li>• Contains method and URL</li>
                  <li>• May include headers</li>
                  <li>• May include body data</li>
                </ul>
              </div>

              <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
                <h3 className="mb-4 text-lg font-bold text-neutral-900 dark:text-white">
                  Response
                </h3>
                <p className="mb-4 text-sm">
                  A response is sent by the server back to the client after
                  processing the request.
                </p>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Sent by server</li>
                  <li>• Contains status code</li>
                  <li>• Includes headers</li>
                  <li>• Returns data or error</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Using cURL to Talk to APIs
            </h2>
            <div className="space-y-5 text-base leading-relaxed">
              <p>
                cURL is a command-line tool that allows you to communicate with
                APIs by sending HTTP requests directly from the terminal. Using
                cURL, you can specify the request method, pass headers, send
                data in the request body, and inspect the server&apos;s response
                in raw form.
              </p>
              <p>
                This makes it extremely useful for quickly testing APIs,
                debugging issues, and understanding how an API behaves without
                relying on browsers or GUI tools.
              </p>

              <div className="rounded-xl border border-neutral-200 bg-neutral-100 p-5 dark:border-neutral-800 dark:bg-neutral-900/50">
                <h4 className="mb-3 font-bold text-neutral-900 dark:text-white">
                  Gist:
                </h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Sends HTTP requests via terminal</li>
                  <li>• Supports all HTTP methods</li>
                  <li>• Can send headers and data</li>
                  <li>• Shows raw API responses</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-neutral-200 pt-16 dark:border-neutral-800">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-neutral-900 dark:text-white">
              Common Mistakes Beginners Make with cURL
            </h2>
            <p className="mb-8 text-base leading-relaxed">
              General usage and syntax mistakes that beginners tend to make:
            </p>

            <div className="space-y-4">
              {[
                {
                  title: "Forgetting the protocol in the URL",
                  desc: "Always start your URL with a protocol (e.g., http:// or https://). Omitting it (e.g., curl example.com) will likely result in a connection error.",
                },
                {
                  title: "Not using quotes for URLs with special characters",
                  desc: "URLs containing characters like &, ?, or spaces must be enclosed in double quotes to prevent the command line from misinterpreting them.",
                },
                {
                  title: "Incorrect HTTP method specification",
                  desc: "Beginners sometimes use the -X flag unnecessarily, which can cause issues with redirects. It's better to use specific options like -d (for POST data) which automatically set the method.",
                },
                {
                  title: "Ignoring case sensitivity",
                  desc: "URLs and API endpoints are case-sensitive. Ensure the path is typed exactly as specified in the API documentation to avoid 404 errors.",
                },
              ].map((mistake, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-900/30"
                >
                  <h4 className="mb-2 flex items-center gap-3 font-bold text-neutral-900 dark:text-white">
                    <span className="flex h-6 w-6 items-center justify-center rounded-lg border border-neutral-300 bg-neutral-200 text-xs font-bold text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                      {i + 1}
                    </span>
                    {mistake.title}
                  </h4>
                  <p className="pl-9 text-sm text-neutral-600 dark:text-neutral-400">
                    {mistake.desc}
                  </p>
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

export default CurlGuide;
