"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

// Make sure to set this to your deployed backend URL in production
const API_URL = "https://portfolio-3-backend.vercel.app";

interface User {
  id: string;
  name: string;
  email: string;
  picture: string;
  googleId: string;
}

interface Comment {
  id: string;
  name: string;
  content: string;
  avatar: string;
  date: string;
}

interface CommentsProps {
  showAll?: boolean;
  hideHeader?: boolean;
}

const Comments = ({ showAll = false, hideHeader = false }: CommentsProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const commentsPerPage = 10;

  useEffect(() => {
    // Attempt to extract token from URL if redirected back from Google OAuth
    const params = new URLSearchParams(window.location.search);
    const tokenFromUrl = params.get("accessToken");
    if (tokenFromUrl) {
      localStorage.setItem("accessToken", tokenFromUrl);
      // Optional: hide token from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }

    const initData = async () => {
      setLoading(true);
      await fetchCurrentUser();
      await fetchComments();
      setLoading(false);
    };

    initData();
  }, []);

  const fetchCurrentUser = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    try {
      const res = await fetch(`${API_URL}/api/auth/me`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("accessToken");
          setCurrentUser(null);
        }
        return;
      }

      const data = await res.json();
      setCurrentUser(data.user);
      if (data.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }
    } catch (err) {
      console.error("Failed to fetch user", err);
    }
  };

  const fetchComments = async () => {
    // Depending on backend setup, we might need the token even to just read comments
    const token = localStorage.getItem("accessToken");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    try {
      const res = await fetch(`${API_URL}/api/comments`, {
        method: "GET",
        headers,
      });

      if (!res.ok) {
        console.error("Failed to fetch comments");
        return;
      }

      const data = await res.json();
      setComments(data.comments || []);
    } catch (err) {
      console.error("Failed to fetch comments", err);
    }
  };

  const handleLogin = () => {
    // Store current path to redirect back to the comment section after login
    localStorage.setItem("returnPath", window.location.pathname);
    // Redirect to the backend OAuth initialization URL
    window.location.href = `${API_URL}/api/auth/google/login`;
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    setCurrentUser(null);
    // Fetch comments again just in case guests are allowed to see them but the JWT was invalid
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    setSubmitting(true);
    setError(null);
    const token = localStorage.getItem("accessToken");

    try {
      const res = await fetch(`${API_URL}/api/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: newComment.trim() }),
      });

      if (!res.ok) {
        if (res.status === 401) {
          localStorage.removeItem("accessToken");
          setCurrentUser(null);
          // throw new Error("Session expired. Please log in again.");
        }
        throw new Error("Failed to post comment");
      }

      const data = await res.json();
      // Add the new comment to the top of the list
      if (data.commentDb) {
        setComments((prev) => [data.commentDb, ...prev]);
      }
      setNewComment("");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const totalPages = Math.ceil(comments.length / commentsPerPage);
  const displayedComments = showAll
    ? comments.slice(
        (currentPage - 1) * commentsPerPage,
        currentPage * commentsPerPage
      )
    : comments.slice(0, 3);

  return (
    <section
      id="comments"
      className={`${hideHeader ? "" : "mt-15"} scroll-mt-24`}
    >
      {!hideHeader && (
        <>
          <h2 className="mb-2 text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            Guestbook
          </h2>
          <h2 className="mb-6 text-3xl font-bold">Leave a message</h2>
        </>
      )}

      <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-900">
        {!currentUser ? (
          <div className="flex flex-col items-center justify-center gap-4 py-6 text-center">
            <p className="text-neutral-600 dark:text-neutral-400">
              Sign in to leave a comment on my guestbook!
            </p>
            <button
              onClick={handleLogin}
              className="flex cursor-pointer items-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-4 py-2 text-sm font-medium text-black shadow-[0_4px_0_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:translate-y-[2px] hover:bg-neutral-200 hover:shadow-[0_2px_0_0_rgba(0,0,0,0.15)] active:translate-y-[4px] active:shadow-none dark:border-neutral-700 dark:bg-neutral-900 dark:text-white dark:shadow-[0_4px_0_0_#0a0a0a] dark:hover:bg-neutral-800 dark:hover:shadow-[0_2px_0_0_#0a0a0a] dark:active:shadow-none"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign in with Google
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {currentUser.picture ? (
                  <Image
                    src={currentUser.picture}
                    alt={currentUser.name}
                    width={32}
                    height={32}
                    className="rounded-full"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="h-8 w-8 rounded-full bg-neutral-200 dark:bg-neutral-800" />
                )}
                <div>
                  <p className="text-sm font-medium">{currentUser.name}</p>
                  <p className="text-xs text-neutral-500">
                    {currentUser.email}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className="text-xs text-neutral-500 hover:text-red-500"
              >
                Sign out
              </button>
            </div>

            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="What's on your mind?..."
              className="w-full resize-none rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-sm focus:border-neutral-400 focus:outline-none dark:border-neutral-800 dark:bg-neutral-950 dark:focus:border-neutral-600"
              rows={3}
              maxLength={500}
            />
            {error && <p className="text-sm text-red-500">{error}</p>}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting || !newComment.trim()}
                className="flex items-center gap-2 rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-[0_4px_0_0_#0a0a0a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-[0_4px_0_0_#0a0a0a] active:translate-y-[4px] active:shadow-none disabled:opacity-50 disabled:active:translate-y-0 disabled:active:shadow-[0_4px_0_0_#0a0a0a] dark:border-neutral-300 dark:bg-neutral-100 dark:text-black dark:shadow-[0_4px_0_0_rgba(0,0,0,0.15)] dark:hover:bg-neutral-200 dark:disabled:opacity-50"
              >
                {submitting ? "Posting..." : "Post Comment"}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {loading ? (
          <div className="flex justify-center p-4">
            <div className="h-6 w-6 animate-spin rounded-full border-b-2 border-neutral-900 dark:border-neutral-100"></div>
          </div>
        ) : comments.length > 0 ? (
          <>
            {displayedComments.map((comment) => (
              <div key={comment.id} className="group flex w-full gap-4">
                <div className="flex-shrink-0 pt-1">
                  {comment.avatar ? (
                    <Image
                      src={comment.avatar}
                      alt={comment.name}
                      width={40}
                      height={40}
                      className="rounded-full shadow-sm"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="h-10 w-10 flex-shrink-0 rounded-full bg-neutral-200 shadow-sm dark:bg-neutral-800" />
                  )}
                </div>
                <div className="flex w-full flex-col">
                  <div className="mb-1 flex items-center gap-2">
                    <span className="font-semibold text-neutral-900 dark:text-neutral-100">
                      {comment.name}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-400">
                      {new Date(comment.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="w-full rounded-2xl rounded-tl-sm border border-neutral-200 bg-neutral-50/50 p-4 transition-colors group-hover:bg-neutral-100/50 dark:border-neutral-800/60 dark:bg-neutral-900/40 dark:group-hover:bg-neutral-800/40">
                    <p className="text-sm leading-relaxed whitespace-pre-wrap text-neutral-700 dark:text-neutral-300">
                      {comment.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            {!showAll && comments.length > 3 && (
              <div className="mt-4 flex justify-center">
                <Link
                  href="/guestbook"
                  className="text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
                >
                  View all {comments.length} comments →
                </Link>
              </div>
            )}
            {showAll && totalPages > 1 && (
              <div className="mt-8 flex items-center justify-between border-t border-neutral-200 pt-6 dark:border-neutral-800">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-800/50"
                >
                  ← Previous
                </button>
                <div className="text-sm text-neutral-500">
                  Page {currentPage} of {totalPages}
                </div>
                <button
                  onClick={() =>
                    setCurrentPage((p) => Math.min(p + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100 disabled:opacity-50 dark:text-neutral-400 dark:hover:bg-neutral-800/50"
                >
                  Next →
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-neutral-500">
            No comments yet. Be the first to leave one!
          </p>
        )}
      </div>

      <hr className="mt-15 border-neutral-200 dark:border-neutral-800" />
    </section>
  );
};

export default Comments;
