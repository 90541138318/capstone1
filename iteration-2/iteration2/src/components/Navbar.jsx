function Navbar({ title, links }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">{title}</h1>
      <div className="space-x-4">
        {links.map((link, i) => (
          <a key={i} href={link.url} className="hover:underline">
            {link.text}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
