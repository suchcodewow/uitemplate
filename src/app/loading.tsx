"use client";
import { Spinner } from "@nextui-org/react";

export default function Loader() {
  return (
    <div className="m-2 mx-auto">
      <Spinner className="m-4 mx-auto" />
    </div>
  );
}
