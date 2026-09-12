import React from "react";

const Index = () => {
  return (
    <main className="min-h-screen">

      {/* =====================================================
          HERO / DISPLAY
          ===================================================== */}
      <section className="min-h-screen bg-dark text-white">
        <div className="container-ielts flex min-h-screen items-center py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="badge badge-primary mb-6">
              IELTS PREPARATION
            </div>

            <h1 className="text-display text-white">
              Prepare with purpose.
              <br />
              Practice with confidence.
            </h1>

            <p className="text-body-lg mt-6 max-w-2xl text-white/70">
              A modern IELTS preparation experience designed to help
              you practice smarter, understand your performance, and
              improve your score.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="btn-primary">
                Start Practicing
              </button>

              <button className="btn-secondary-dark">
                Explore Tests
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          TYPOGRAPHY
          ===================================================== */}
      <section className="bg-white">
        <div className="container-ielts py-20">

          <div className="mb-12">
            <span className="text-label text-primary">
              TYPOGRAPHY
            </span>

            <h2 className="mt-2">
              Typography System
            </h2>

            <p className="text-body mt-4 max-w-2xl text-secondary">
              Plus Jakarta Sans is the primary typeface throughout
              IELTS Global.
            </p>
          </div>

          <div className="space-y-10">

            <div>
              <div className="text-caption mb-2 text-muted">
                DISPLAY — 64px / 800
              </div>

              <div className="text-display">
                IELTS Global
              </div>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                H1 — 52px / 800
              </div>

              <h1>
                Your IELTS score starts here
              </h1>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                H2 — 40px / 700
              </div>

              <h2>
                Practice that actually matters
              </h2>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                H3 — 28px / 700
              </div>

              <h3>
                Improve every skill
              </h3>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                H4 — 20px / 700
              </div>

              <h4>
                Track your progress
              </h4>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                BODY LARGE
              </div>

              <p className="text-body-lg">
                Build your English skills through realistic practice,
                useful feedback, and measurable progress.
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                BODY
              </div>

              <p className="text-body">
                This is the standard body text used throughout
                IELTS Global interfaces.
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                BODY MEDIUM
              </div>

              <p className="text-body-medium">
                This text is slightly stronger for important
                supporting information.
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                IELTS QUESTION
              </div>

              <p className="text-question">
                What is the main reason the speaker decided to
                change their career?
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                IELTS ANSWER
              </div>

              <p className="text-answer">
                The speaker wanted a career that offered more
                flexibility and opportunities for growth.
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                BUTTON
              </div>

              <p className="text-button">
                Start Practice Test
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                NAVIGATION
              </div>

              <p className="text-nav">
                Practice Dashboard
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                LABEL
              </div>

              <p className="text-label">
                READING PRACTICE
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                CAPTION
              </div>

              <p className="text-caption">
                Last practiced 2 hours ago
              </p>
            </div>

            <div>
              <div className="text-caption mb-2 text-muted">
                SMALL
              </div>

              <p className="text-small">
                40 questions · 60 minutes
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          COLORS
          ===================================================== */}
      <section className="bg-surface">
        <div className="container-ielts py-20">

          <div className="mb-12">
            <span className="text-label text-primary">
              COLOR SYSTEM
            </span>

            <h2 className="mt-2">
              IELTS Global Colors
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div className="card overflow-x-hidden">
              <div className="h-32 bg-primary" />

              <div className="p-5">
                <h4>Primary</h4>

                <p className="text-caption mt-1 text-muted">
                  #00E6AB
                </p>
              </div>
            </div>

            <div className="card overflow-x-hidden">
              <div className="h-32 bg-dark" />

              <div className="p-5">
                <h4>Dark</h4>

                <p className="text-caption mt-1 text-muted">
                  #0A1B1F
                </p>
              </div>
            </div>

            <div className="card overflow-x-hidden">
              <div className="h-32 bg-[var(--color-primary-dark)]" />

              <div className="p-5">
                <h4>Primary Dark</h4>

                <p className="text-caption mt-1 text-muted">
                  #0F2D2D
                </p>
              </div>
            </div>

            <div className="card overflow-x-hidden">
              <div className="h-32 border-b border-[var(--color-border)] bg-white" />

              <div className="p-5">
                <h4>White</h4>

                <p className="text-caption mt-1 text-muted">
                  #FFFFFF
                </p>
              </div>
            </div>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-5 md:grid-cols-4">

            <div className="rounded-[var(--radius-lg)] bg-[var(--color-text-secondary)] p-6 text-white">
              <p className="text-label">
                SECONDARY
              </p>

              <p className="text-small mt-2">
                #475569
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-[var(--color-text-muted)] p-6 text-white">
              <p className="text-label">
                MUTED
              </p>

              <p className="text-small mt-2">
                #64748B
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-[var(--color-success)] p-6 text-white">
              <p className="text-label">
                SUCCESS
              </p>

              <p className="text-small mt-2">
                #00B887
              </p>
            </div>

            <div className="rounded-[var(--radius-lg)] bg-[var(--color-error)] p-6 text-white">
              <p className="text-label">
                ERROR
              </p>

              <p className="text-small mt-2">
                #EF4444
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BUTTONS
          ===================================================== */}
      <section className="bg-white">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              COMPONENTS
            </span>

            <h2 className="mt-2">
              Buttons
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-4">

            <button className="btn-primary">
              Primary Button
            </button>

            <button className="btn-secondary">
              Secondary Button
            </button>

            <button className="btn-dark">
              Dark Button
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          BADGES
          ===================================================== */}
      <section className="bg-surface">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              COMPONENTS
            </span>

            <h2 className="mt-2">
              Badges & Status
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">

            <span className="badge badge-primary">
              Practice
            </span>

            <span className="badge badge-success">
              Completed
            </span>

            <span className="badge badge-warning">
              In Progress
            </span>

            <span className="badge badge-error">
              Needs Review
            </span>

          </div>
        </div>
      </section>

      {/* =====================================================
          CARDS
          ===================================================== */}
      <section className="bg-white">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              COMPONENTS
            </span>

            <h2 className="mt-2">
              Cards
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            <div className="card p-6">
              <span className="text-label text-primary">
                READING
              </span>

              <h3 className="mt-3">
                Reading Practice
              </h3>

              <p className="text-body mt-3 text-secondary">
                Improve your reading speed, vocabulary and
                comprehension.
              </p>
            </div>

            <div className="card-interactive p-6">
              <span className="text-label text-primary">
                LISTENING
              </span>

              <h3 className="mt-3">
                Listening Practice
              </h3>

              <p className="text-body mt-3 text-secondary">
                Train your listening skills using realistic
                IELTS-style exercises.
              </p>

              <button className="btn-primary mt-6">
                Practice
              </button>
            </div>

            <div className="card p-6">
              <span className="text-label text-primary">
                WRITING
              </span>

              <h3 className="mt-3">
                Writing Practice
              </h3>

              <p className="text-body mt-3 text-secondary">
                Develop stronger answers with structured
                practice.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          SCORE + PROGRESS
          ===================================================== */}
      <section className="bg-surface">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              DASHBOARD
            </span>

            <h2 className="mt-2">
              Progress & Scores
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <div className="card p-8">

              <p className="text-label text-muted">
                OVERALL BAND SCORE
              </p>

              <div className="score mt-5">
                7.5
              </div>

              <p className="text-body mt-3 text-secondary">
                Excellent progress. Keep practicing consistently.
              </p>

              <div className="divider my-6" />

              <div className="flex justify-between">
                <span className="text-body-medium">
                  Target
                </span>

                <span className="text-body-medium">
                  8.0
                </span>
              </div>

              <div className="progress mt-3">
                <div
                  className="progress-bar"
                  style={{ width: "82%" }}
                />
              </div>

            </div>

            <div className="card p-8">

              <p className="text-label text-muted">
                SKILL PERFORMANCE
              </p>

              <div className="mt-6 space-y-6">

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-body-medium">
                      Reading
                    </span>

                    <span className="text-body-medium">
                      8.0
                    </span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "88%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-body-medium">
                      Listening
                    </span>

                    <span className="text-body-medium">
                      7.5
                    </span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "82%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-body-medium">
                      Writing
                    </span>

                    <span className="text-body-medium">
                      6.5
                    </span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex justify-between">
                    <span className="text-body-medium">
                      Speaking
                    </span>

                    <span className="text-body-medium">
                      7.0
                    </span>
                  </div>

                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{ width: "76%" }}
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          IELTS QUESTION
          ===================================================== */}
      <section className="bg-white">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              PRACTICE INTERFACE
            </span>

            <h2 className="mt-2">
              IELTS Question
            </h2>
          </div>

          <div className="exam-question">

            <span className="badge badge-primary mb-5">
              QUESTION 12 OF 40
            </span>

            <p className="exam-question-title">
              What is the main reason the speaker decided to
              change their career?
            </p>

            <div className="space-y-3">

              <button className="answer-option">
                <span>A.</span>

                <span>
                  They wanted to earn a higher salary.
                </span>
              </button>

              <button className="answer-option selected">
                <span>B.</span>

                <span>
                  They wanted more flexibility and growth.
                </span>
              </button>

              <button className="answer-option">
                <span>C.</span>

                <span>
                  They wanted to move to another country.
                </span>
              </button>

              <button className="answer-option">
                <span>D.</span>

                <span>
                  They wanted to work fewer hours.
                </span>
              </button>

            </div>

            <div className="mt-8 flex items-center justify-between">

              <button className="btn-secondary">
                Previous
              </button>

              <button className="btn-primary">
                Next Question
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          FORM ELEMENTS
          ===================================================== */}
      <section className="bg-surface">
        <div className="container-ielts py-20">

          <div className="mb-10">
            <span className="text-label text-primary">
              FORM ELEMENTS
            </span>

            <h2 className="mt-2">
              Inputs & Controls
            </h2>
          </div>

          <div className="max-w-xl space-y-5">

            <div>
              <label className="text-label mb-2 block">
                Email Address
              </label>

              <input
                className="input"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="text-label mb-2 block">
                Test Type
              </label>

              <select className="select">
                <option>IELTS Academic</option>
                <option>IELTS General Training</option>
              </select>
            </div>

            <div>
              <label className="text-label mb-2 block">
                Your Answer
              </label>

              <textarea
                className="textarea"
                placeholder="Write your answer here..."
              />
            </div>

            <button className="btn-primary">
              Save Answer
            </button>

          </div>
        </div>
      </section>

      {/* =====================================================
          FOOTER
          ===================================================== */}
      <footer className="bg-dark text-white">

        <div className="container-ielts py-16">

          <div className="grid gap-10 md:grid-cols-4">

            <div className="md:col-span-2">

              <h3 className="text-white">
                IELTS{" "}
                <span className="text-primary">
                  GLOBAL
                </span>
              </h3>

              <p className="text-body mt-4 max-w-md text-white/60">
                Modern IELTS preparation built around realistic
                practice, meaningful feedback, and measurable
                progress.
              </p>

            </div>

            <div>
              <p className="text-label text-white/50">
                PRODUCT
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  Practice
                </a>

                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  Tests
                </a>

                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  Progress
                </a>
              </div>
            </div>

            <div>
              <p className="text-label text-white/50">
                RESOURCES
              </p>

              <div className="mt-4 space-y-3">
                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  IELTS Guide
                </a>

                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  Study Tips
                </a>

                <a
                  href="#"
                  className="text-small block text-white/70"
                >
                  Support
                </a>
              </div>
            </div>

          </div>

          <div className="divider my-10 bg-white/10" />

          <p className="text-small text-white/40">
            © 2026 IELTS Global. Built for better preparation.
          </p>

        </div>

      </footer>

    </main>
  );
};

export default Index;