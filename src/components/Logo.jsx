import { Link } from 'react-router-dom';

export function Logo() {
  return (
    <Link to="/" className="brand-logo" title="KORVEX - Web Development & Digital Marketing">
      <img src="/logo_korvex.png" alt="KORVEX Logo" className="logo-img" />
    </Link>
  );
}
