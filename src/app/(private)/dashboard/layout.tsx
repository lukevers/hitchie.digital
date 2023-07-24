import Sidebar from './Sidebar';

export default function Layout(props: { children: React.ReactNode}) {
  return (
    <div className="flex h-full w-full flex-col-reverse items-stretch sm:flex-row">
      <Sidebar />
      <div className="flex h-full w-full flex-col justify-between overflow-scroll">
        {props.children}
      </div>
    </div>
  );
}