import Comments from "@/components/Comments/Comments";
import FadeIn from "@/components/ui/FadeIn";

export const metadata = {
  title: "Guestbook | Arman Thakur",
  description: "Leave a message, feedback, or just say hi!",
};

export default function GuestbookPage() {
  return (
    <div className="mx-auto max-w-[720px] px-8 py-3 md:px-0">
      <FadeIn>
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
            Guestbook
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            Leave a message for me and other visitors. It could be feedback, a
            question, or just a simple hello!
          </p>
        </div>

        <Comments showAll={true} hideHeader={true} />
      </FadeIn>
    </div>
  );
}
