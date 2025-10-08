import Image from "next/image";
function Header() {
  return (
    <header className="px-6 py-3">
      <Image src="/logo.svg" alt="Cypress Logo" width={100} height={100} />
    </header>
  );
}

export default Header;
