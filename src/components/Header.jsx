import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronDown,
  Crown,
  ClipboardList,
  BookOpen,
  BookMarked,
  Languages,
  GraduationCap,
} from "lucide-react";

const Header = () => {
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (path) => router.pathname === path;

  const isPracticeActive =
    router.pathname.startsWith("/practice");

  const isGuidesActive =
    router.pathname.startsWith("/guides");

  return (
    <>
      {/* =====================================================
          HEADER
          ===================================================== */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          transition-all
          duration-300
          ${
            isScrolled
              ? `
                border-b
                border-black/5
                bg-white/80
                shadow-[0_4px_20px_rgba(10,27,31,0.08)]
                backdrop-blur-xl
              `
              : `
                border-b
                border-transparent
                bg-transparent
              `
          }
        `}
      >
        <div
          className="
            mx-auto
            flex
            w-full
            max-w-7xl
            items-center
            justify-between
            px-4
            py-2
            md:px-7
            xl:px-8
          "
        >
          {/* =================================================
              LOGO
              ================================================= */}

          <div className="flex shrink-0 items-center">
            <Link
              href="/"
              className="
                flex
                items-center
                gap-2.5
              "
            >
              <img
                src="/images/logo_nobg.png"
                alt="IELTS Global"
                className="
                  block
                  h-9
                  w-9
                  shrink-0
                  object-contain
                  sm:h-10
                  sm:w-10
                "
              />

              <span
                className="
                  hidden
                  whitespace-nowrap
                  text-[20px]
                  font-extrabold
                  leading-none
                  tracking-[-0.045em]
                  sm:block
                "
              >
                <span
                className={
                     isScrolled
                         ? "text-dark"
                        : "text-white"
                        }>
                  IELTS
                </span>

                <span className="text-primary">
                  {" "}
                  GLOBAL
                </span>
              </span>
            </Link>
          </div>

          {/* =================================================
              DESKTOP NAVIGATION
              ================================================= */}

          <nav
            className={`
              hidden
              items-center
              justify-center
              gap-6
              lg:flex
              xl:gap-8
              ${
                isScrolled
                  ? "text-dark"
                  : "text-white"
              }
            `}
          >
            {/* Mock Tests */}

            <Link
              href="/mock-tests"
              className={`
                text-nav
                whitespace-nowrap
                !transition-none
                hover:!text-primary
                ${
                  isActive("/mock-tests")
                    ? "!font-[900] !text-primary"
                    : "!font-medium"
                }
              `}
            >
              Mock Tests
            </Link>

            {/* Practice */}

            <button
              type="button"
              className={`
                text-nav
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                border-0
                bg-transparent
                p-0
                !transition-none
                hover:!bg-transparent
                hover:!text-primary
                ${
                  isPracticeActive
                    ? "!font-[900] !text-primary"
                    : "!font-medium"
                }
              `}
            >
              <span>Practice</span>

              <ChevronDown
                size={16}
                strokeWidth={2.2}
              />
            </button>

            {/* Free Guides */}

            <button
              type="button"
              className={`
                text-nav
                flex
                items-center
                gap-1.5
                whitespace-nowrap
                border-0
                bg-transparent
                p-0
                !transition-none
                hover:!bg-transparent
                hover:!text-primary
                ${
                  isGuidesActive
                    ? "!font-[900] !text-primary"
                    : "!font-medium"
                }
              `}
            >
              <span>Free Guides</span>

              <ChevronDown
                size={16}
                strokeWidth={2.2}
              />
            </button>

            {/* Vocabulary */}

            <Link
              href="/vocabulary"
              className={`
                text-nav
                whitespace-nowrap
                !transition-none
                hover:!text-primary
                ${
                  isActive("/vocabulary")
                    ? "!font-[900] !text-primary"
                    : "!font-medium"
                }
              `}
            >
              Vocabulary
            </Link>

            {/* Teachers */}

            <Link
              href="/teachers"
              className={`
                text-nav
                whitespace-nowrap
                !transition-none
                hover:!text-primary
                ${
                  isActive("/teachers")
                    ? "!font-[900] !text-primary"
                    : "!font-medium"
                }
              `}
            >
              Teachers
            </Link>
          </nav>

          {/* =================================================
              RIGHT ACTIONS
              ================================================= */}

          <div
            className="
              flex
              shrink-0
              items-center
              justify-end
              gap-2
              sm:gap-2.5
            "
          >
            {/* Upgrade */}

            <Link
              href="/upgrade"
              className="
                btn-primary
                !w-auto
                !rounded-[14px]
                !px-3
                !py-2
                sm:!px-4
                lg:!px-5
              "
            >
              <Crown
                size={18}
                strokeWidth={2.2}
              />

              <span className="hidden sm:inline">
                Upgrade
              </span>
            </Link>

            {/* Sign In */}

            <Link
              href="/login"
              className="
                btn-dark
                !w-auto
                !rounded-[14px]
                !px-3.5
                !py-2
                sm:!px-4
                lg:!px-5
              "
            >
              <span className="hidden sm:inline">
                Login / Sign up
              </span>

              <span className="sm:hidden">
                Sign in
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE BOTTOM NAVIGATION
          ===================================================== */}

      <div
        className="
          fixed
          bottom-5
          left-3
          right-3
          z-50
          rounded-full
          border
          border-black/10
          bg-white/85
          backdrop-blur-xl
          backdrop-saturate-150
          shadow-[0_8px_30px_rgba(10,27,31,0.14)]
          lg:hidden
        "
      >
        <nav
          className="
            mx-auto
            flex
            w-full
            max-w-lg
            items-center
            justify-around
            px-2
            py-2
            sm:px-4
          "
        >
          {/* =================================================
              MOCK TESTS
              ================================================= */}

          <Link
            href="/mock-tests"
            className={`
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-1
              py-1
              text-nav
              !transition-none
              ${
                isActive("/mock-tests")
                  ? "!font-[900] !text-primary"
                  : "!font-medium !text-black"
              }
            `}
          >
            <ClipboardList
              size={20}
              strokeWidth={2.2}
            />

            <span>
              Mock Tests
            </span>
          </Link>

          {/* =================================================
              PRACTICE
              ================================================= */}

          <button
            type="button"
            className={`
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-1
              py-1
              text-nav
              border-0
              bg-transparent
              !transition-none
              hover:!bg-transparent
              ${
                isPracticeActive
                  ? "!font-[900] !text-primary"
                  : "!font-medium !text-black"
              }
            `}
          >
            <BookOpen
              size={20}
              strokeWidth={2.2}
            />

            <span>
              Practice
            </span>
          </button>

          {/* =================================================
              GUIDES
              ================================================= */}

          <button
            type="button"
            className={`
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-1
              py-1
              text-nav
              border-0
              bg-transparent
              !transition-none
              hover:!bg-transparent
              ${
                isGuidesActive
                  ? "!font-[900] !text-primary"
                  : "!font-medium !text-black"
              }
            `}
          >
            <BookMarked
              size={20}
              strokeWidth={2.2}
            />

            <span>
              Guides
            </span>
          </button>

          {/* =================================================
              VOCABULARY
              ================================================= */}

          <Link
            href="/vocabulary"
            className={`
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-1
              py-1
              text-nav
              !transition-none
              ${
                isActive("/vocabulary")
                  ? "!font-[900] !text-primary"
                  : "!font-medium !text-black"
              }
            `}
          >
            <Languages
              size={20}
              strokeWidth={2.2}
            />

            <span>
              Vocabulary
            </span>
          </Link>

          {/* =================================================
              TEACHERS
              ================================================= */}

          <Link
            href="/teachers"
            className={`
              flex
              min-w-0
              flex-1
              flex-col
              items-center
              justify-center
              gap-1
              py-1
              text-nav
              !transition-none
              ${
                isActive("/teachers")
                  ? "!font-[900] !text-primary"
                  : "!font-medium !text-black"
              }
            `}
          >
            <GraduationCap
              size={20}
              strokeWidth={2.2}
            />

            <span>
              Teachers
            </span>
          </Link>
        </nav>
      </div>

      {/* =====================================================
          MOBILE BOTTOM SPACING
          ===================================================== */}

      <div
        className="
          h-[90px]
          lg:hidden
        "
      />
    </>
  );
};

export default Header;