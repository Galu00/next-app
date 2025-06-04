import Image from "next/image";

export function Header() {
  return (
    <header className="w-full bg-white flex items-center justify-center py-4 shadow">
      <Image src="/favicon.ico" alt="Logo" width={100} height={56} />
    </header>
  );
}
