import NavItem from "./NavItem";

export default function () {
  return (
    <div className="flex flex-col m-8 space-y-4 min-w-max">
      <h1 className="font-bold text-2xl mb-4">Balance Homes</h1>
      <NavItem text="Home" path="/" />
      <NavItem text="Customers" path="/customer" />
    </div>
  );
}
