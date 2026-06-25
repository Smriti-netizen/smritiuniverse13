"use client";

import Image from "next/image";
import { useState } from "react";

export function ProfileAvatar() {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="font-inter flex h-full w-full items-center justify-center p-5 text-center text-[0.8rem] uppercase tracking-[0.1em] text-white/85">
        Your photo
        <br />
        goes here
      </div>
    );
  }

  return (
    <Image
      src="/profile-photo.jpg"
      alt="Smriti Srivastava"
      fill
      className="object-cover"
      priority
      onError={() => setHasError(true)}
    />
  );
}
