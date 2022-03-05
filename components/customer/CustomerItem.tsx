import React from "react";

export type CustomerItemProps = {
  id: number;
  user: {
    name: string;
    email: string;
  } | null;
  name: string;
};

const CustomerItem: React.FC<{ customer: CustomerItemProps }> = ({
  customer,
}) => {
  return (
    <div>
      <small>By {customer.user?.name}</small>
      <p>{customer.name} </p>
    </div>
  );
};

export default CustomerItem;
