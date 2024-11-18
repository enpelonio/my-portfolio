"use client";

import Link from "next/link";

const ProjectHeader = () => {
  return (
    <header className="bg-base text-neutral sticky top-0 z-50">
      <div className="container mx-6 px-4 py-4 flex items-center justify-between">
        {/* Logo/Name */}
        <div className="text-3xl font-heading w-[30%]">
          <Link href="/" legacyBehavior>
            <a>ERVIN PELONIO</a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default ProjectHeader;
