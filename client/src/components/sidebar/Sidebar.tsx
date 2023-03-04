import { data } from "./data";
import Cathegory from "./Cathegory";

interface DataInterface {
  icon: React.ReactNode;
  path: string;
  title: string;
}

const Sidebar = () => {
  return (
    <div className="bg-primary2 text-white p-3 md:p-6 w-fit">
      <h1 className="hidden md:block text-4xl uppercase text-secondary">vaccination</h1>
      <div className="hidden md:block divider mt-5 mb-3" />

      <div className="space-y-2">
        {data.map(({ title, path, icon }: DataInterface) => {
          return (
            <Cathegory key={title} path={path} title={title}>
              {icon}
            </Cathegory>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
