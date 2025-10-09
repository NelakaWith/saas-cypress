function Button() {
  return (
    <button
      className=" inline-flex h-8 items-center gap-[7px] px-2 py-1 relative rounded-lg border-[none] bg-[linear-gradient(180deg,rgba(3,0,20,1)_0%,rgba(40,38,55,1)_100%)] before:content-[''] before:absolute before:inset-0 before:p-px before:rounded-lg before:[background:linear-gradient(90deg,rgba(32,31,48,1)_0%,rgba(70,69,83,1)_100%)] before:[-webkit-mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] before:[-webkit-mask-composite:xor] before:[mask-composite:exclude] before:z-[1] before:pointer-events-none cursor-pointer transition-opacity hover:opacity-90 active:opacity-80"
      type="button"
      aria-label="Button CTA"
    >
      <span className="relative flex items-center justify-center w-fit bg-[linear-gradient(272deg,rgba(217,217,217,1)_0%,rgba(141,140,149,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-typography-desktop-p font-[number:var(--typography-desktop-p-font-weight)] text-transparent text-[length:var(--typography-desktop-p-font-size)] tracking-[var(--typography-desktop-p-letter-spacing)] leading-[var(--typography-desktop-p-line-height)] [font-style:var(--typography-desktop-p-font-style)]">
        Button CTA
      </span>
    </button>
  );
}

export default Button;
