import { Link } from 'components/Link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-slate-900">
      <h1>Not Found</h1>
      <Link url="/" text="Home >" />
    </div>
  );
}
