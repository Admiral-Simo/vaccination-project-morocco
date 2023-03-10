import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Child from "../components/children/Child";
import { ChildInterface } from "../types/child";

import { selectQuery } from "../redux/features/searchSlice";
import { useGetChildrenQuery } from "../redux/api/apiSlice";

const Children = () => {
  const [children, setChildren] = useState<ChildInterface[] | null>(null);
  const query = useSelector(selectQuery);

  const { data } = useGetChildrenQuery(3);

  useEffect(() => {
    if (!query) {
      return setChildren([]);
    } else {
      return setChildren(
        data?.filter(
          (child: ChildInterface) =>
            child.fullname.includes(query) ||
            child.SMI.includes(query) ||
            child.birthday.includes(query) ||
            child.adresse.includes(query)
        )
      );
    }
  }, [query]);

  return (
    <div className="text-secondary">
      <table className="space-y-2 table-auto w-full">
        <thead>
          <tr>
            <th>SMI</th>
            <th>Gender</th>
            <th>Name</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {children?.map((item, i) => {
            return <Child key={i} {...item} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Children;
