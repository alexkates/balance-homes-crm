import React from "react";
import CustomerItem, {
  CustomerItemProps,
} from "../../components/customer/CustomerItem";

export type CustomerListProps = {
  customers: CustomerItemProps[];
};

export default function ({ customers }: CustomerListProps) {
  return (
    <div>
      {customers.map((customer) => (
        <div key={customer.id}>
          <CustomerItem customer={customer} />
        </div>
      ))}
    </div>
  );
}
