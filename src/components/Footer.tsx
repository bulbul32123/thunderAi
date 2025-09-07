export default function Footer() {
  return (
    <div>
      <footer className="z-layer-1 text-sm flex flex-col lg:gap-19 gap-8 borderColor border-t lg:mt-30 sm:mt-16 mt-12 py-8">
        <div className="w-full lg:w-[60rem] grid grid-cols-[1fr] md:grid-cols-[1fr_3fr] lg:grid-cols-[3fr_3fr] mx-auto md:gap-10 gap-6 px-4 sm:px-8 lg:px-0">
          <div className="flex flex-col justify-between ">
            <div className="relative">
              <h5 className="font-bold text-4xl relative">
                Thunder AI
              </h5>
            </div>
            <p className="hidden md:inline">
              <span className="text-xs text-bolt-elements-textSecondary">
                © 2025 StackBlitz - All rights reserved.
              </span>
            </p>
          </div>
          <nav className="grid sm:grid-cols-[1fr_1fr_2fr] grid-cols-1 md:gap-10 gap-6">
            <section className="text-sm flex flex-col gap-2">
              <h3>Resources</h3>
              <ul className="gap-3 flex flex-col">
                <li>
                  <a
                    href="https://support.bolt.new"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Support
                    <span className="arrow-up-right size-4 mt-0.5 text-bolt-elements-textSecondary group-hover:text-bolt-elements-textPrimary"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Blog
                    <span className="arrow-up-right size-4 mt-0.5 text-bolt-elements-textSecondary group-hover:text-bolt-elements-textPrimary"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Gallery
                    <span className="arrow-up-right size-4 mt-0.5 text-bolt-elements-textSecondary group-hover:text-bolt-elements-textPrimary"></span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://status.bolt.new"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Status
                    <span className="arrow-up-right size-4 mt-0.5 text-bolt-elements-textSecondary group-hover:text-bolt-elements-textPrimary"></span>
                  </a>
                </li>
              </ul>
            </section>
            <section className="text-sm flex flex-col gap-2">
              <h3>Company</h3>
              <ul className="gap-3 flex flex-col">
                <li>
                  <a
                    href="/careers"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackblitz.com/privacy-policy"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackblitz.com/terms-of-service"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    Terms
                  </a>
                </li>
              </ul>
            </section>
            <section className="text-sm flex flex-col gap-2">
              <h3>Social</h3>
              <ul className="gap-3 grid grid-cols-1 sm:grid-cols-2">
                <li>
                  <a
                    href="https://discord.com/invite/stackblitz"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-discord?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/company/stackblitz"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-linkedin?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@BoltDotNew"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-youtube?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    YouTube
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/boltdotnew"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-x?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    Twitter/X
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/boltdotnew/"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-instagram?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reddit.com/r/boltnewbuilders/"
                    className="group text-bolt-ds-textTertiary hover:text-bolt-elements-textPrimary transition-theme flex items-center gap-1.5"
                    target="_blank"
                  >
                    <span className="i-bolt:logos-reddit?mask text-bolt-elements-textSecondary size-4 group-hover:text-bolt-elements-textPrimary"></span>
                    Reddit
                  </a>
                </li>
              </ul>
            </section>
          </nav>
        </div>
        <p className="text-center inline md:hidden">
          <span className="text-xs text-bolt-elements-textSecondary">
            © 2025 Bulbul - All rights reserved.
          </span>
        </p>
      </footer>
    </div>
  );
}
