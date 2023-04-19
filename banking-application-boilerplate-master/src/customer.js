//import {category} from './category.js';
var customerList=[];

const addCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      const existingCustomer = customerList.find(customer => customer[0] === CustomerId);

      if (existingCustomer) {
        console.log('Customer with same ID already exists');
        return; // Do not add duplicate customer
      }

      let newCustomer = [
            CustomerId,
            CustomerName,
            CustomerAge,
            CustomerAddress,
            CustomerContactNumber,
            Category
      ]
      customerList.push(newCustomer);
      // Write the Logic here
}

const updateCustomer=(CustomerId, CustomerName,CustomerAge,CustomerAddress,CustomerContactNumber,Category)=>{
      const customerIndex = customerList.findIndex(customer => customer[0] === CustomerId);

      // If the customer is found
      if (customerIndex !== -1) {
        // Update the customer's details in the inner array
        customerList[customerIndex][1] = CustomerName;
        customerList[customerIndex][2] = CustomerAge;
        customerList[customerIndex][3] = CustomerAddress;
        customerList[customerIndex][4] = CustomerContactNumber;
        customerList[customerIndex][5] = Category;
    
        // Return the updated customer inner array
        return customerList[customerIndex];
      } else {
        // If the customer is not found, return null
        return null;
      }
}

const getAllCustomers=()=>{
      return customerList;
  // Write the Logic here
}

module.exports={addCustomer,updateCustomer,getAllCustomers}