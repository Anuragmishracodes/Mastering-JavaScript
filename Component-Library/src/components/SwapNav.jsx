import React from "react";

const navItems = [
  { primary: "Work", secondary: "Work" },
  { primary: "About", secondary: "About" },
  { primary: "Services", secondary: "Services" },
  { primary: "Contact", secondary: "Contact" },
];

export default function SwapNav() {
  return (
    <div className="h-full flex items-center justify-center">
      <nav className="flex blurr gap-12 rounded-lg px-12 py-3 justify-between items-center">
        {navItems.map((item, index) => (
          <NavItem
            key={index}
            primary={item.primary}
            secondary={item.secondary}
          />
        ))}
      </nav>
    </div>
  );
}

function NavItem({ primary, secondary }) {
  return (
    <div className="group relative h-6 overflow-hidden cursor-pointer">
      <div className="flex flex-col gap-2 transition-transform duration-300 ease-out group-hover:-translate-y-8">
        <span className="text-white text-[16px] leading-6 font-medium">
          {primary}
        </span>
        <span className="text-white text-[16px] leading-6 font-medium">
          {secondary}
        </span>
      </div>
    </div>
  );
}
