import { useRouter } from 'next/router';
import Link from 'next/link';

const isActiveStyle =
  'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize';

const isNotActiveStyle =
  'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize';

export default function NavLink({ href, exact, children, ...props }: any) {
  const { pathname } = useRouter();
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += isActiveStyle;
  } else props.className += isNotActiveStyle;

  return (
    <Link href={href}>
      <a {...props}>{children}</a>
    </Link>
  );
}
